package com.karmelshoes.persistency.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.karmelshoes.persistency.entity.SizeEntity;

import java.util.Optional;

@Repository
public interface ISizeRepository extends JpaRepository<SizeEntity, Long> {
    Optional<SizeEntity> findBySize(Integer size);
}
