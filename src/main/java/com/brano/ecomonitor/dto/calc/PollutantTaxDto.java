package com.brano.ecomonitor.dto.calc;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantTaxDto {

    private String pollutantName;
    private double emissionMas;
    private double taxRate;
    private double tax;

}
