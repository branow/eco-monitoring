package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.populationsizefactor.PopulationSizeFactorDto;
import com.brano.ecomonitor.dto.settlementtypefactor.SettlementTypeFactorDto;
import com.brano.ecomonitor.service.PopulationSizeFactorService;
import com.brano.ecomonitor.service.SettlementTypeFactorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("/population-size-factor")
@RestController
public class PopulationSizeFactorController {

    private final PopulationSizeFactorService service;


    @GetMapping()
    public ResponseEntity<?> get() {
        return wrap(service::findDtoAll, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> save(@RequestBody PopulationSizeFactorDto dto) {
        return wrap(() -> service.save(dto), HttpStatus.CREATED);
    }

    @DeleteMapping()
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            service.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
