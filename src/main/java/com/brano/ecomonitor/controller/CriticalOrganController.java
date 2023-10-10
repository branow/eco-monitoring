package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.entity.Company;
import com.brano.ecomonitor.entity.CriticalOrgan;
import com.brano.ecomonitor.service.CompanyService;
import com.brano.ecomonitor.service.CriticalOrganService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RestController
public class CriticalOrganController {

    private final CriticalOrganService criticalOrganService;

    public CriticalOrganController(CriticalOrganService criticalOrganService) {
        this.criticalOrganService = criticalOrganService;
    }


    @GetMapping("/organ")
    public ResponseEntity<?> company() {
        return wrap(criticalOrganService::findAll, HttpStatus.OK);
    }

    @PostMapping("/organ")
    public ResponseEntity<?> addCompany(@RequestBody CriticalOrgan organ) {
        return wrap(() -> criticalOrganService.save(organ), HttpStatus.CREATED);
    }

    @PutMapping("/organ")
    public ResponseEntity<?> updateCompany(@RequestBody CriticalOrgan organ) {
        return wrap(() -> criticalOrganService.save(organ), HttpStatus.CREATED);
    }

    @DeleteMapping("/organ")
    public ResponseEntity<?> deleteCompany(@RequestParam String id) {
        return wrap(() -> {
            criticalOrganService.deleteById(Long.parseLong(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
