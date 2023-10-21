package com.brano.ecomonitor.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantImpactModel {

    private Integer pollutantImpactId;
    private Integer pollutant;
    private Integer organ;

}
