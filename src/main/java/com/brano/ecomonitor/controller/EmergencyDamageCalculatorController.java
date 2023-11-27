package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.service.EmergencyDamageCalculator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("/emergency-damage-calculator")
@RestController
public class EmergencyDamageCalculatorController {

    private final EmergencyDamageCalculator emergencyDamageCalculator;


    @GetMapping("/{companyId}/{year}")
    public ResponseEntity<?> calculate(@PathVariable Integer companyId, @PathVariable Integer year) {
        return wrap(() -> emergencyDamageCalculator.calculate(companyId, year), HttpStatus.OK);
    }


}
