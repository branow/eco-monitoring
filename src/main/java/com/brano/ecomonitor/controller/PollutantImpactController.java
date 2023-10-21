package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.pollutantimpact.PollutantImpactPostDto;
import com.brano.ecomonitor.service.PollutantImpactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RestController
public class PollutantImpactController {

    private final PollutantImpactService pollutantImpactService;


    @GetMapping("/pollutant-impact")
    public ResponseEntity<?> get() {
        return wrap(pollutantImpactService::findAll, HttpStatus.OK);
    }

    @PostMapping("/pollutant-impact")
    public ResponseEntity<?> save(@RequestBody PollutantImpactPostDto dto) {
        return wrap(() -> pollutantImpactService.save(dto), HttpStatus.CREATED);
    }

    @DeleteMapping("/pollutant-impact")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            pollutantImpactService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
