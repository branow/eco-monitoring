package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.service.TaxCalculatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("/tax-calculator")
@RestController
public class TaxCalculatorController {

    private final TaxCalculatorService taxCalculatorService;


    @GetMapping("/{companyId}/{year}")
    public ResponseEntity<?> calculate(@PathVariable Integer companyId, Integer year) {
        return wrap(() -> taxCalculatorService.calculateTax(companyId, year), HttpStatus.OK);
    }

}
