package com.brano.ecomonitor.controller;

import com.brano.ecomonitor.dto.settlement.SettlementPostDto;
import com.brano.ecomonitor.service.SettlementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.brano.ecomonitor.controller.response.ResponseWrapper.wrap;

@RequiredArgsConstructor
@RequestMapping("/settlement")
@RestController
public class SettlementController {

    private final SettlementService service;


    @GetMapping("")
    public ResponseEntity<?> get() {
        return wrap(service::findDtoAll, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody SettlementPostDto dto) {
        return wrap(() -> service.save(dto), HttpStatus.CREATED);
    }

    @DeleteMapping("")
    public ResponseEntity<?> delete(@RequestParam String id) {
        return wrap(() -> {
            service.deleteById(Integer.parseInt(id));
            return "Success";
        }, HttpStatus.ACCEPTED);
    }

}
