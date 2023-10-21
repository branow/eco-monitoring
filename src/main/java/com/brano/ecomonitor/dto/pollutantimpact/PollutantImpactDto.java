package com.brano.ecomonitor.dto.pollutantimpact;

import com.brano.ecomonitor.model.CriticalOrgan;
import com.brano.ecomonitor.model.Pollutant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantImpactDto {

    private Pollutant pollutant;
    private CriticalOrgan organ;

}
