package com.brano.ecomonitor.exception;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(String entityName, String searchField, Object fieldValue) {
        super(entityName + " with such " + searchField + " not found: " + fieldValue);
    }

}
