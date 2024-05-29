package com.karmelshoes.domain.service.security;

import com.karmelshoes.domain.models.CustomUserDetailsModel;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.repository.IClientRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    private final IClientRepository iClientRepository;

    public JpaUserDetailsService(IClientRepository iClientRepository) {
        this.iClientRepository = iClientRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public CustomUserDetailsModel loadUserByUsername(String userName) throws UsernameNotFoundException {

        Optional<ClientEntity> userFind = iClientRepository.findByName(userName);

        if (!userFind.isPresent()) {
            throw new UsernameNotFoundException(userName + " no existe en el sistema");
        } else {

            ClientEntity userEntity = userFind.orElseThrow();
            List<GrantedAuthority> authorities = userEntity.getRoles()
                    .stream()
                    .map(role -> new SimpleGrantedAuthority(role.getName()))
                    .collect(Collectors.toList());

            return new CustomUserDetailsModel(
                    userEntity.getName(),
                    userEntity.getPassword(),
                    userEntity.getId(),
                    true,
                    true,
                    true,
                    true,
                    authorities
            );
        }
    }
}
