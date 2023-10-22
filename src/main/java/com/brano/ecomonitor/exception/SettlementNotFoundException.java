package com.brano.ecomonitor.exception;

public class SettlementNotFoundException extends EntityNotFoundException {

    public SettlementNotFoundException(String searchField, Object fieldValue) {
        super("Settlement", searchField, fieldValue);
    }

}
