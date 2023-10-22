package com.brano.ecomonitor.exception;

public class PollutantNotFoundException extends EntityNotFoundException {

    public PollutantNotFoundException(String searchField, Object fieldValue) {
        super("Pollutant", searchField, fieldValue);
    }

}
