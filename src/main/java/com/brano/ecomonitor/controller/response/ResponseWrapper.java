package com.brano.ecomonitor.controller.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseWrapper {

    public static ResponseEntity<?> wrap(Responsible<?> responsible, HttpStatus status) {
        try {
            Object res = responsible.respond();
            return new ResponseEntity<>(res, status);
        } catch (Exception e) {
            String message = e.getMessage();
            System.err.println("BAD REQUEST: " + message);
            e.printStackTrace(System.err);
            return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
        }
    }

}
