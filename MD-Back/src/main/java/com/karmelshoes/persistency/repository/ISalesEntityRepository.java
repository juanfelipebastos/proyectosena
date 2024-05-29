package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.SalesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ISalesEntityRepository extends JpaRepository<SalesEntity, Long> {
    List<SalesEntity> findByClient_Id(Long id);
    List<SalesEntity> findByDate(LocalDate date);
    List<SalesEntity> findByPaymentMethod(String paymentMethod);
    Optional<SalesEntity> findByShoppingCart_Id(Long id);

    @Query(value = "SELECT * FROM sales s WHERE YEAR(s.date) = :year", nativeQuery = true)
    List<SalesEntity> findByYear(@Param("year") String year);
}