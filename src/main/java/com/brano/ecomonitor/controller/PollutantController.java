package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.pollutant.PollutantWithoutImpactDto;
import com.brano.ecomonitor.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("/pollutant")
@RestController
public class PollutantController {

    private final PollutantService pollutantService;


    @GetMapping("")
    public ResponseEntity<?> get() {
        return wrap(pollutantService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody PollutantWithoutImpactDto pollutant) {
        return wrap(() -> pollutantService.save(pollutant), HttpStatus.CREATED);
    }

    @DeleteMapping("")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            pollutantService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
