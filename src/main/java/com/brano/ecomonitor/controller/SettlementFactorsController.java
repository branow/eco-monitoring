package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.settlementfactors.SettlementFactorsPostDto;
import com.brano.ecomonitor.dto.settlementtypefactor.SettlementTypeFactorDto;
import com.brano.ecomonitor.service.SettlementFactorsService;
import com.brano.ecomonitor.service.SettlementTypeFactorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RestController
public class SettlementFactorsController {

    private final SettlementFactorsService service;


    @GetMapping("/settlement-factors")
    public ResponseEntity<?> get() {
        return wrap(service::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("/settlement-factors")
    public ResponseEntity<?> save(@RequestBody SettlementFactorsPostDto dto) {
        return wrap(() -> service.save(dto), HttpStatus.CREATED);
    }

    @DeleteMapping("/settlement-factors")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            service.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
