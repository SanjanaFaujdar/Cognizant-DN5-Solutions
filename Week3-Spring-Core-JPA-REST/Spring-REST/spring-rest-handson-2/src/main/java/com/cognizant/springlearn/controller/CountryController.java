package com.cognizant.springlearn.controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;
import com.cognizant.springlearn.Country;

@RestController
public class CountryController {

    private static final Logger LOGGER =
        LoggerFactory.getLogger(CountryController.class);

    // REST - Country Web Service: Get all countries
    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        LOGGER.info("START");
        ApplicationContext context =
            new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries =
            (List<Country>) context.getBean("countryList");
        LOGGER.debug("Countries:{}", countries);
        LOGGER.info("END");
        return countries;
    }

    // REST - Get country based on country code
    @GetMapping("/countries/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        LOGGER.info("START");
        ApplicationContext context =
            new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries =
            (List<Country>) context.getBean("countryList");
        Country result = countries.stream()
            .filter(c -> c.getCode().equalsIgnoreCase(code))
            .findFirst()
            .orElse(null);
        LOGGER.debug("Country:{}", result);
        LOGGER.info("END");
        return result;
    }
}
