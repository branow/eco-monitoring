package com.brano.ecomonitor.exception;

public class CompanyNotFoundException extends EntityNotFoundException {
    public CompanyNotFoundException(String searchField, Object fieldValue) {
        super("Company", searchField, fieldValue);
    }

}
