package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.pollutantgdktaxrate.PollutantGdkTaxRatePostDto;
import com.brano.ecomonitor.dto.pollutanttaxrate.PollutantTaxRatePostDto;
import com.brano.ecomonitor.service.PollutantGdkTaxRateService;
import com.brano.ecomonitor.service.PollutantTaxRateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("pollutant-tax-rate")
@RestController
public class PollutantTaxRateController {

    private final PollutantTaxRateService pollutantGdkTaxRateService;


    @GetMapping()
    public ResponseEntity<?> get() {
        return wrap(pollutantGdkTaxRateService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> save(@RequestBody PollutantTaxRatePostDto postDto) {
        return wrap(() -> pollutantGdkTaxRateService.save(postDto), HttpStatus.CREATED);
    }

    @DeleteMapping()
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            pollutantGdkTaxRateService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
