package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.pollution.PollutionPostDto;
import com.brano.ecomonitor.service.PollutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RestController
public class PollutionController {

    private final PollutionService pollutionService;


    @GetMapping("/pollution-by-company")
    public ResponseEntity<?> getByCompanyIdAndYear(@RequestParam("companyId") String companyId, @RequestParam("year") String year) {
        return wrap(() -> {
            int id = Integer.parseInt(companyId);
            if (year.equals("all")) {
                return pollutionService.findDtoAllByCompanyId(id);
            } else  {
                return pollutionService.findDtoAllByCompanyIdAndYear(id, Integer.parseInt(year));
            }
        }, HttpStatus.OK);
    }

    @GetMapping("/pollution-years")
    public ResponseEntity<?> getYears() {
        return wrap(pollutionService::findDistinctYearAll, HttpStatus.OK);
    }

    @GetMapping("/pollution")
    public ResponseEntity<?> get() {
        return wrap(pollutionService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("/pollution")
    public ResponseEntity<?> save(@RequestBody PollutionPostDto pollution) {
        return wrap(() -> pollutionService.save(pollution), HttpStatus.CREATED);
    }

    @DeleteMapping("/pollution")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            pollutionService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
