package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.pollutantclasstaxrate.PollutantClassTaxRatePostDto;
import com.brano.ecomonitor.dto.pollutantgdktaxrate.PollutantGdkTaxRatePostDto;
import com.brano.ecomonitor.service.PollutantClassTaxRateService;
import com.brano.ecomonitor.service.PollutantGdkTaxRateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("pollutant-class-tax-rate")
@RestController
public class PollutantClassTaxRateController {

    private final PollutantClassTaxRateService pollutantGdkTaxRateService;


    @GetMapping()
    public ResponseEntity<?> get() {
        return wrap(pollutantGdkTaxRateService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> save(@RequestBody PollutantClassTaxRatePostDto postDto) {
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
