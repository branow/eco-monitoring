package com.brano.ecomonitor.service;

import org.springframework.stereotype.Service;

@Service
public class NumberRounder {

    public double round(double value, int accuracy) {
        double var = value * Math.pow(10, accuracy);
        var = Math.round(var);
        return var / Math.pow(10, accuracy);
    }

}
