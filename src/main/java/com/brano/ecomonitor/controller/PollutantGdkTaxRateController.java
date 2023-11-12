package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.organ.OrganDto;
import com.brano.ecomonitor.dto.pollutantgdktaxrate.PollutantGdkTaxRatePostDto;
import com.brano.ecomonitor.service.CriticalOrganService;
import com.brano.ecomonitor.service.PollutantGdkTaxRateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("pollutant-gdk-tax-rate")
@RestController
public class PollutantGdkTaxRateController {

    private final PollutantGdkTaxRateService pollutantGdkTaxRateService;


    @GetMapping()
    public ResponseEntity<?> get() {
        return wrap(pollutantGdkTaxRateService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> save(@RequestBody PollutantGdkTaxRatePostDto postDto) {
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
