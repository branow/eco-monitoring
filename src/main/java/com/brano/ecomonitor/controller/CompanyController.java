package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.model.Company;
import com.brano.ecomonitor.service.CompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RestController
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }


    @GetMapping("/company")
    public ResponseEntity<?> company() {
        return wrap(companyService::findAll, HttpStatus.OK);
    }

    @PostMapping("/company")
    public ResponseEntity<?> addCompany(@RequestBody Company company) {
        return wrap(() -> companyService.save(company), HttpStatus.CREATED);
    }

    @PutMapping("/company")
    public ResponseEntity<?> updateCompany(@RequestBody Company company) {
        return wrap(() -> companyService.save(company), HttpStatus.CREATED);
    }

    @DeleteMapping("/company")
    public ResponseEntity<?> deleteCompany(@RequestParam String id) {
        return wrap(() -> {
            companyService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }
}
