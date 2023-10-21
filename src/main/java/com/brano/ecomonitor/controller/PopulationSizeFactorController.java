package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.pollutant.PollutantDto;
import com.brano.ecomonitor.dto.populationsizefactor.PopulationSizeFactorDto;
import com.brano.ecomonitor.service.PollutantService;
import com.brano.ecomonitor.service.PopulationSizeFactorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RestController
public class PopulationSizeFactorController {

    private final PopulationSizeFactorService populationSizeFactorService;


    @GetMapping("/population-size-factor")
    public ResponseEntity<?> get() {
        return wrap(populationSizeFactorService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("/population-size-factor")
    public ResponseEntity<?> save(@RequestBody PopulationSizeFactorDto dto) {
        return wrap(() -> populationSizeFactorService.save(dto), HttpStatus.CREATED);
    }

    @DeleteMapping("/population-size-factor")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            populationSizeFactorService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
