package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.company.CompanyPostDto;
import com.brano.ecomonitor.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RestController
public class CompanyController {

    private final CompanyService companyService;


    @GetMapping("/company")
    public ResponseEntity<?> company() {
        return wrap(companyService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("/company")
    public ResponseEntity<?> save(@RequestBody CompanyPostDto company) {
        return wrap(() -> companyService.save(company), HttpStatus.CREATED);
    }

    @DeleteMapping("/company")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            companyService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
