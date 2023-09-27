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

import java.util.List;

@RestController
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/company")
    public ModelAndView company() {
        return new ModelAndView("company");
    }

    @GetMapping("/companies")
    public ResponseEntity<List<Company>> companies() {
        try {
            return new ResponseEntity<>(companyService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/company")
    public ResponseEntity<String> addCompany(@RequestBody Company company) {
        return wrap(() -> companyService.save(company), new ResponseEntity<>("Success", HttpStatus.CREATED));
    }

    @PutMapping("/company")
    public ResponseEntity<String> updateCompany(@RequestBody Company company) {
        return wrap(() -> companyService.save(company), new ResponseEntity<>("Success", HttpStatus.CREATED));
    }

    @DeleteMapping("/company")
    public ResponseEntity<String> deleteCompany(@RequestParam String id) {
        return wrap(() -> companyService.deleteById(Long.parseLong(id)), new ResponseEntity<>("Success", HttpStatus.ACCEPTED));
    }

    private ResponseEntity<String> wrap(Runnable runnable, ResponseEntity<String> successResponse) {
        try {
            runnable.run();
            return successResponse;
        } catch (Exception e) {
            System.err.println("BAD REQUEST: " + e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
