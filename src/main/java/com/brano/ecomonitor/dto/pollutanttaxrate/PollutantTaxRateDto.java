package com.brano.ecomonitor.dto.pollutanttaxrate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantTaxRateDto {

    private Integer pollutant;
    private double tax;

}
