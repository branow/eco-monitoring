package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.PollutantImpactModel;
import com.brano.ecomonitor.service.PollutantImpactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RestController
public class PollutantImpactController {

    private final PollutantImpactService pollutantImpactService;

    public PollutantImpactController(PollutantImpactService pollutantImpactService) {
        this.pollutantImpactService = pollutantImpactService;
    }

    @GetMapping("/pollutant-impact")
    public ResponseEntity<?> pollutantImpact() {
        return wrap(pollutantImpactService::findAll, HttpStatus.OK);
    }

    @PostMapping("/pollutant-impact")
    public ResponseEntity<?> addPollutantImpact(@RequestBody PollutantImpactModel model) {
        return wrap(() -> pollutantImpactService.save(model), HttpStatus.CREATED);
    }

    @PutMapping("/pollutant-impact")
    public ResponseEntity<?> updatePollutantImpact(@RequestBody PollutantImpactModel model) {
        return wrap(() -> pollutantImpactService.save(model), HttpStatus.CREATED);
    }

    @DeleteMapping("/pollutant-impact")
    public ResponseEntity<?> deletePollutantImpact(@RequestParam String id) {
        return wrap(() -> {
            pollutantImpactService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
