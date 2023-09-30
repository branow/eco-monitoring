package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.entity.Company;
import com.brano.ecomonitor.entity.Pollutant;
import com.brano.ecomonitor.service.PollutantService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RestController
public class PollutantController {

    private final PollutantService pollutantService;

    public PollutantController(PollutantService pollutantService) {
        this.pollutantService = pollutantService;
    }

    @GetMapping("/pollutant")
    public ResponseEntity<?> pollutant() {
        return wrap(pollutantService::findAll, HttpStatus.OK);
    }

    @PostMapping("/pollutant")
    public ResponseEntity<?> addPollutant(@RequestBody Pollutant pollutant) {
        return wrap(() -> pollutantService.save(pollutant), HttpStatus.CREATED);
    }

    @PutMapping("/pollutant")
    public ResponseEntity<?> updatePollutant(@RequestBody Pollutant pollutant) {
        return wrap(() -> pollutantService.save(pollutant), HttpStatus.CREATED);
    }

    @DeleteMapping("/pollutant")
    public ResponseEntity<?> deletePollutant(@RequestParam String id) {
        return wrap(() -> {
            pollutantService.deleteById(Long.parseLong(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
