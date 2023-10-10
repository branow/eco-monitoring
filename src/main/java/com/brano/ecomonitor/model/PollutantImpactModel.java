package com.brano.ecomonitor.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantImpactModel {

    private Long pollutantImpactId;
    private Long pollutant;
    private Long organ;

}
