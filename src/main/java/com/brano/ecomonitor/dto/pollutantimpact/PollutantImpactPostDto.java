package com.brano.ecomonitor.dto.pollutantimpact;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class PollutantImpactPostDto {

    private Integer pollutantImpactId;
    private Integer pollutant;
    private Integer organ;

}
