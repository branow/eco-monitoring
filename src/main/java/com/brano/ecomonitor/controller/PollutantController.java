package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.entity.Pollutant;
import com.brano.ecomonitor.service.PollutantService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
public class PollutantController {

    private final PollutantService pollutantService;

    public PollutantController(PollutantService pollutantService) {
        this.pollutantService = pollutantService;
    }

    @GetMapping("/pollutant")
    public ModelAndView pollutant() {
        return new ModelAndView("pollutant");
    }

    @GetMapping("/pollutants")
    public ResponseEntity<List<Pollutant>> pollutants() {
        try {
            return new ResponseEntity<>(pollutantService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/pollutant")
    public ResponseEntity<String> addPollutant(@RequestBody Pollutant pollutant) {
        return wrap(() -> pollutantService.save(pollutant), new ResponseEntity<>("Success", HttpStatus.CREATED));
    }

    @PutMapping("/pollutant")
    public ResponseEntity<String> updatePollutant(@RequestBody Pollutant pollutant) {
        return wrap(() -> pollutantService.save(pollutant), new ResponseEntity<>("Success", HttpStatus.CREATED));
    }

    @DeleteMapping("/pollutant")
    public ResponseEntity<String> deletePollutant(@RequestParam String id) {
        return wrap(() -> pollutantService.deleteById(Long.parseLong(id)), new ResponseEntity<>("Success", HttpStatus.ACCEPTED));
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
