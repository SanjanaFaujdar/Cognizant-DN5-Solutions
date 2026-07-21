package com.cognizant.ormlearn.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Handson 1: Get all countries
    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    // Handson 6: Find country by code
    @Transactional
    public Country findCountryByCode(String code) {
        Optional<Country> result = countryRepository.findById(code);
        if (!result.isPresent()) {
            throw new RuntimeException("Country not found: " + code);
        }
        return result.get();
    }

    // Handson 7: Add new country
    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

    // Handson 8: Update country
    @Transactional
    public void updateCountry(String code, String name) {
        Country country = findCountryByCode(code);
        country.setName(name);
        countryRepository.save(country);
    }

    // Handson 9: Delete country
    @Transactional
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }
}
