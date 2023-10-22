package com.brano.ecomonitor.exception;

public class SettlementNotFoundException extends RuntimeException {

    public SettlementNotFoundException() {
    }

    public SettlementNotFoundException(String message) {
        super(message);
    }

    public SettlementNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public SettlementNotFoundException(Throwable cause) {
        super(cause);
    }

    public SettlementNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
