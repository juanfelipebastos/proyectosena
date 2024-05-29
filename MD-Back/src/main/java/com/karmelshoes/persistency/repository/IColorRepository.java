package com.karmelshoes.persistency.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.karmelshoes.persistency.entity.ColorEntity;

@Repository
public interface IColorRepository extends JpaRepository<ColorEntity, Long> {
    Optional<ColorEntity> findByName(String name);
}
