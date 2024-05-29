package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IProductEntityRepository extends JpaRepository<ProductEntity, Long> {
    Optional<ProductEntity> findByCode(String code);

    Optional<ProductEntity> findByImgPath(String imgPath);

    Page<ProductEntity> findByStatusTrue(Pageable pageable);
    Page<ProductEntity> findByStatusTrueAndNameContainingIgnoreCase(Pageable pageable, String name);
    Page<ProductEntity> findByStatusTrueAndMarkContainingIgnoreCase(Pageable pageable, String mark);
    Page<ProductEntity> findByStatusTrueAndModelContainingIgnoreCase(Pageable pageable, String model);
    Page<ProductEntity> findByStatusTrueAndGenderContainingIgnoreCase(Pageable pageable, String gender);
    Page<ProductEntity> findByStatusTrueAndPrice(Pageable pageable, Double price);
    Page<ProductEntity> findByStatusTrueAndProductTypeContainingIgnoreCase(Pageable pageable, String productType);
    Page<ProductEntity> findByStatusTrueAndCodeContainingIgnoreCase(Pageable pageable, String code);
    Page<ProductEntity> findByStatusFalse(Pageable pageable);
    Page<ProductEntity> findByStatusTrueAndGenderContainingIgnoreCaseAndModelContainingIgnoreCaseAndProductTypeContainingIgnoreCase(Pageable pageable, String gender, String model, String productType);
}