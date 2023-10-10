package com.brano.ecomonitor.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutionModel {

    private Long pollutionId;
    private Double emissionMass;
    private Double concentration;
    private Integer year;
    private Long company;
    private Long pollutant;

}