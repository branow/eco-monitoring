package com.brano.ecomonitor.dto.pollution;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutionPostDto {

    private Integer pollutionId;
    private Double emissionMass;
    private Double concentration;
    private Integer year;
    private Integer company;
    private Integer pollutant;

}
