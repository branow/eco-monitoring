package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.pollutant.PollutantWithoutImpactDto;
import com.brano.ecomonitor.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RestController
public class PollutantController {

    private final PollutantService pollutantService;


    @GetMapping("/pollutant")
    public ResponseEntity<?> get() {
        return wrap(pollutantService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("/pollutant")
    public ResponseEntity<?> save(@RequestBody PollutantWithoutImpactDto pollutant) {
        return wrap(() -> pollutantService.save(pollutant), HttpStatus.CREATED);
    }

    @DeleteMapping("/pollutant")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            pollutantService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
