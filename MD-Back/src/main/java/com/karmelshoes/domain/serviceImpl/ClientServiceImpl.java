package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.RoleEntity;
import com.karmelshoes.persistency.errors.exception.DataIntegrityViolationExceptionPersonality;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.mappers.IClientMapper;
import com.karmelshoes.persistency.repository.IClientRepository;
import com.karmelshoes.persistency.repository.IRoleRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ClientServiceImpl implements IClientService {

    private final IClientRepository iClientRepository;
    private final IClientMapper iClientMapper;
    private final IRoleRepository iRoleRepository;
    private final PasswordEncoder passwordEncoder;

    public ClientServiceImpl(IClientRepository iClientRepository,
                             IClientMapper iClientMapper, IRoleRepository iRoleRepository, PasswordEncoder passwordEncoder) {
        this.iClientRepository = iClientRepository;
        this.iClientMapper = iClientMapper;
        this.iRoleRepository = iRoleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(readOnly = true)
    @Override
    public Page<ClientDto> getAll(Integer page, Integer size) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findAll(pageable).map(iClientMapper::clientEntityToClientDto);
    }

    @Transactional(readOnly = true)
    @Override
    public Page<ClientDto> getAllAdmin(Integer page, Integer size) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminTrue(pageable).map(iClientMapper::clientEntityToClientDto);
    }

    @Override
    public Page<ClientDto> getAllAdminByName(Integer page, Integer size, String name) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminTrueAndNameContainingIgnoreCase(pageable, name).map(iClientMapper::clientEntityToClientDto);
    }

    @Override
    public Page<ClientDto> getAllAdminByAddress(Integer page, Integer size, String address) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminTrueAndAddressContainingIgnoreCase(pageable, address).map(iClientMapper::clientEntityToClientDto);
    }

    @Override
    public Page<ClientDto> getAllAdminByPhone(Integer page, Integer size, String phone) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminTrueAndPhoneContainingIgnoreCase(pageable, phone).map(iClientMapper::clientEntityToClientDto);
    }

    @Override
    public Page<ClientDto> getAllAdminByEmail(Integer page, Integer size, String email) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminTrueAndEmailContainingIgnoreCase(pageable, email).map(iClientMapper::clientEntityToClientDto);
    }

    @Override
    public Page<ClientDto> getAllAdminByStatus(Integer page, Integer size, Boolean status) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminTrueAndStatus(pageable, status).map(iClientMapper::clientEntityToClientDto);
    }

    @Override
    public Page<ClientDto> getAllAdminByIdentification(Integer page, Integer size, String identification) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminTrueAndIdentificationContainingIgnoreCase(pageable, identification).map(iClientMapper::clientEntityToClientDto);
    }

    @Transactional(readOnly = true)
    @Override
    public ClientDto getById(Long id) {
        Optional<ClientEntity> client = iClientRepository.findById(id);
        if (client.isPresent()) {
            return iClientMapper.clientEntityToClientDto(client.get());
        }
        throw new ObjectNotFoundException("Cliente no encontrado con el ID: " + id);
    }

    @Transactional(readOnly = false)
    @Override
    public ClientDto getByName(String name) {
        Optional<ClientEntity> client = iClientRepository.findByName(name);
        if (client.isPresent()) {
            return iClientMapper.clientEntityToClientDto(client.get());
        }
        throw new ObjectNotFoundException("Cliente no encontrado con el Nombre: " + name);
    }

    @Transactional(readOnly = false)
    @Override
    public ClientDto create(ClientEntity clientEntity) {
        try {
            if (clientEntity.getAdmin() == null) {
                clientEntity.setAdmin(false);
            }
            clientEntity.setStatus(true);
            clientEntity.setRoles(getRoles(clientEntity));
            clientEntity.setPassword(passwordEncoder.encode(clientEntity.getPassword()));
            return iClientMapper.clientEntityToClientDto(iClientRepository.save(clientEntity));
        } catch (DataIntegrityViolationException exception) {
            throw new DataIntegrityViolationExceptionPersonality("No se puede crear el clinte por que el email:" + clientEntity.getEmail() + " o identification " + clientEntity.getIdentification() + " ya existen");
        }
    }

    @Transactional(readOnly = false)
    @Override
    public ClientDto updateAllField(Long id, ClientEntity client) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity clientEntity = clientOptional.get();
            clientEntity.setName(client.getName());
            clientEntity.setEmail(client.getEmail());
            clientEntity.setAddress(client.getAddress());
            clientEntity.setPhone(client.getPhone());
            if (client.getAdmin() == null) {
                clientEntity.setAdmin(false);
            } else {
                clientEntity.setAdmin(client.getAdmin());
            }
            if (client.getPassword() == null || client.getPassword().equals("Null123")) {
                clientEntity.setPassword(clientEntity.getPassword());
            } else {
                clientEntity.setPassword(passwordEncoder.encode(client.getPassword()));
            }
            clientEntity.setRoles(getRoles(client));
            clientEntity.setIdentification(client.getIdentification());
            return iClientMapper.clientEntityToClientDto(iClientRepository.save(clientEntity));
        }
        throw new ObjectNotFoundException("Cliente no encontrado con el ID: " + id);
    }

    @Transactional(readOnly = false)
    @Override
    public void deleteById(Long id) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity client = clientOptional.get();
            client.setStatus(false);
            iClientRepository.save(client);
        } else {
            throw new ObjectNotFoundException("Cliente no encontrado con el ID: " + id);
        }
    }

    @Transactional(readOnly = false)
    @Override
    public ClientDto deleteAdminById(Long id) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity client = clientOptional.get();
            client.getRoles().removeIf(role -> role.getName().equals("ROLE_ADMIN"));
            client.setStatus(false);
            client.setAdmin(false);
            return iClientMapper.clientEntityToClientDto(iClientRepository.save(client));
        } else {
            throw new ObjectNotFoundException("Cliente no encontrado con el ID: " + id);
        }
    }

    @Override
    public ClientDto updateFieldPassword(String email, String identification, String newPassword) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findByEmail(email);
        if(clientEntityOptional.isPresent()) {
            ClientEntity clientEntity = clientEntityOptional.get();
            if(!clientEntity.getStatus()) {
                throw new ObjectNotFoundException("El usuario no existe en la base de datos");
            }
            if(Objects.equals(clientEntity.getIdentification(), identification)) {
                clientEntity.setPassword(passwordEncoder.encode(newPassword));
                return iClientMapper.clientEntityToClientDto(iClientRepository.save(clientEntity));
            }
            throw  new ObjectNotFoundException("La identificacion : " + identification + " no coincide con la registrada en la base de datos");
        } else {
            throw new ObjectNotFoundException("Cliente no encontrado con el correo: " + email);
        }
    }

    @Override
    public Page<ClientDto> getAllUser(Integer page, Integer size) {
        final Pageable pageable = PageRequest.of(page, size);
        return iClientRepository.findByAdminFalse(pageable).map(iClientMapper::clientEntityToClientDto);
    }

    private List<RoleEntity> getRoles(ClientEntity user) {
        List<RoleEntity> roles = new ArrayList<>();
        Optional<RoleEntity> roleUser = iRoleRepository.findByName("ROLE_USER");

        if(roleUser.isPresent()) {
            roles.add(roleUser.orElseThrow());
        }

        if (Boolean.TRUE.equals(user.getAdmin())) {
            Optional<RoleEntity> roleAdmin = iRoleRepository.findByName("ROLE_ADMIN");
            if (roleAdmin.isPresent()) {
                roles.add(roleAdmin.orElseThrow());
            }
        }
        return roles;
    }
}
