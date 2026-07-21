package com.cognizant.ormlearn.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // Search by containing text - sorted ascending
    List<Country> findByNameContainingOrderByNameAsc(String keyword);

    // Search by starting letter
    List<Country> findByNameStartingWith(String letter);
}
