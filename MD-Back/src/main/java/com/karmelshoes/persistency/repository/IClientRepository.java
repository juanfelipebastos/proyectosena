package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ClientEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Range;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IClientRepository extends JpaRepository<ClientEntity, Long> {
    Optional<ClientEntity> findByName(String name);
    Page<ClientEntity> findByAdminTrue(Pageable pageable);
    Page<ClientEntity> findByAdminTrueAndNameContainingIgnoreCase(Pageable pageable, String name);
    Page<ClientEntity> findByAdminTrueAndAddressContainingIgnoreCase(Pageable pageable, String address);
    Page<ClientEntity> findByAdminTrueAndPhoneContainingIgnoreCase(Pageable pageable, String phone);
    Page<ClientEntity> findByAdminTrueAndEmailContainingIgnoreCase(Pageable pageable, String email);
    Page<ClientEntity> findByAdminTrueAndStatus(Pageable pageable, Boolean status);

    Page<ClientEntity> findByAdminTrueAndIdentificationContainingIgnoreCase(Pageable pageable, String identification);
    Optional<ClientEntity> findByEmail(String email);
    Page<ClientEntity> findByAdminFalse(Pageable pageable);
}