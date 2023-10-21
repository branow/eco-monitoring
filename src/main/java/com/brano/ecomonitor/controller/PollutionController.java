package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.PollutionModel;
import com.brano.ecomonitor.service.PollutionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RestController
public class PollutionController {

    private final PollutionService pollutionService;

    public PollutionController(PollutionService pollutionService) {
        this.pollutionService = pollutionService;
    }


    @GetMapping("/pollution-by-company")
    public ResponseEntity<?> getPollutionByCompanyId(@RequestParam("companyId") String companyId, @RequestParam("year") String year) {
        return wrap(() -> {
            int id = Integer.parseInt(companyId);
            if (year.equals("all")) {
                return pollutionService.findAllByCompanyId(id);
            } else  {
                return pollutionService.findAllByCompanyIdAndYear(id, Integer.parseInt(year));
            }
        }, HttpStatus.OK);
    }

    @GetMapping("/pollution-years")
    public ResponseEntity<?> getYears() {
        return wrap(pollutionService::findAllDistinctYear, HttpStatus.OK);
    }

    @GetMapping("/pollution")
    public ResponseEntity<?> pollution() {
        return wrap(pollutionService::findAll, HttpStatus.OK);
    }

    @PostMapping("/pollution")
    public ResponseEntity<?> addPollution(@RequestBody PollutionModel pollution) {
        return wrap(() -> pollutionService.save(pollution), HttpStatus.CREATED);
    }

    @PutMapping("/pollution")
    public ResponseEntity<?> updatePollution(@RequestBody PollutionModel pollution) {
        return wrap(() -> pollutionService.save(pollution), HttpStatus.CREATED);
    }

    @DeleteMapping("/pollution")
    public ResponseEntity<?> deletePollution(@RequestParam String id) {
        return wrap(() -> {
            pollutionService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }
}
