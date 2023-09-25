package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.entity.Pollution;
import com.brano.ecomonitor.service.PollutionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
public class PollutionController {

    private final PollutionService pollutionService;

    public PollutionController(PollutionService pollutionService) {
        this.pollutionService = pollutionService;
    }

    @GetMapping("/pollution")
    public ModelAndView pollution() {
        return new ModelAndView("pollution");
    }

    @GetMapping("/pollutions")
    public ResponseEntity<List<Pollution>> pollutions() {
        try {
            return new ResponseEntity<>(pollutionService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/pollution")
    public ResponseEntity<String> addPollution(@RequestBody Pollution pollution) {
        return wrap(() -> pollutionService.save(pollution), new ResponseEntity<>("Success", HttpStatus.CREATED));
    }

    @PutMapping("/pollution")
    public ResponseEntity<String> updatePollution(@RequestParam Pollution pollution) {
        return wrap(() -> pollutionService.save(pollution), new ResponseEntity<>("Success", HttpStatus.CREATED));
    }

    @DeleteMapping("/pollution")
    public ResponseEntity<String> deletePollution(@RequestBody Long id) {
        return wrap(() -> pollutionService.deleteById(id), new ResponseEntity<>("Success", HttpStatus.ACCEPTED));
    }

    private ResponseEntity<String> wrap(Runnable runnable, ResponseEntity<String> successResponse) {
        try {
            runnable.run();
            return successResponse;
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
