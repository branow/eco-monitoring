package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.entity.Company;
import com.brano.ecomonitor.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

import java.util.List;
import java.util.function.Supplier;

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
