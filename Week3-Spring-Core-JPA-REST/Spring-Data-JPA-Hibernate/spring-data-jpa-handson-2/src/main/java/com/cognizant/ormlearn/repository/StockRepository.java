package com.cognizant.ormlearn.repository;

import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.ormlearn.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {

    // FB stocks in September 2019
    List<Stock> findByCodeAndDateBetween(String code, Date start, Date end);

    // Google stocks greater than 1250
    List<Stock> findByCodeAndCloseGreaterThan(String code, double close);

    // Top 3 highest volume
    List<Stock> findTop3ByOrderByVolumeDesc();

    // Bottom 3 Netflix stocks
    List<Stock> findTop3ByCodeOrderByCloseAsc(String code);
}
