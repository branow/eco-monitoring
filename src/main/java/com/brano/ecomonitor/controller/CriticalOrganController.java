package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.organ.OrganDto;
import com.brano.ecomonitor.service.CriticalOrganService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RestController
public class CriticalOrganController {

    private final CriticalOrganService criticalOrganService;


    @GetMapping("/organ")
    public ResponseEntity<?> get() {
        return wrap(criticalOrganService::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("/organ")
    public ResponseEntity<?> save(@RequestBody OrganDto organ) {
        return wrap(() -> criticalOrganService.save(organ), HttpStatus.CREATED);
    }

    @DeleteMapping("/organ")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            criticalOrganService.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
