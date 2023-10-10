package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.entity.Company;
import com.brano.ecomonitor.entity.Pollutant;
import com.brano.ecomonitor.entity.Pollution;
import com.brano.ecomonitor.model.PollutionModel;
import com.brano.ecomonitor.service.PollutionService;
import org.apache.tomcat.util.net.NioEndpoint;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RestController
public class PollutionController {

    private final PollutionService pollutionService;

    public PollutionController(PollutionService pollutionService) {
        this.pollutionService = pollutionService;
    }


    @GetMapping("/pollution-by-company")
    public ResponseEntity<?> get(@RequestParam("companyId") String companyId, @RequestParam("year") String year) {
        return wrap(() -> {
            long id = Long.parseLong(companyId);
            if (year.equals("all")) {
                return pollutionService.findAllByCompanyId(id);
            } else  {
                return pollutionService.findAllByCompanyIdAndYear(id, Integer.parseInt(year));
            }
        }, HttpStatus.ACCEPTED);
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
            pollutionService.deleteById(Long.parseLong(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }
}
