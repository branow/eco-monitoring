package com.brano.ecomonitor.dto.pollutantimpact;

import com.brano.ecomonitor.entity.CriticalOrgan;
import com.brano.ecomonitor.entity.Pollutant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantImpactDto {

    private Integer pollutantImpactId;
    private Pollutant pollutant;
    private CriticalOrgan organ;

}
