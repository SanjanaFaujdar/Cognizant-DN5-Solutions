package com.cognizant.loan.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoanController {

    private static final Logger LOGGER =
        LoggerFactory.getLogger(LoanController.class);

    // GET /loans/{number}
    // Returns dummy loan details without backend connectivity
    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoan(@PathVariable String number) {
        LOGGER.info("Start");
        LOGGER.debug("Loan number: {}", number);

        Map<String, Object> loan = new HashMap<>();
        loan.put("number", number);
        loan.put("type", "car");
        loan.put("loan", 480000);
        loan.put("emi", 5258);

        LOGGER.debug("Loan: {}", loan);
        LOGGER.info("End");
        return loan;
    }
}
