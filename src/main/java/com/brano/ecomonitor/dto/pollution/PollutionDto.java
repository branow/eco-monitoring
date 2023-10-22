package com.brano.ecomonitor.dto.pollution;

import com.brano.ecomonitor.model.Company;
import com.brano.ecomonitor.model.Pollutant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutionDto {

    private Integer pollutionId;
    private Double emissionMass;
    private Double concentration;
    private Integer year;
    private Company company;
    private Pollutant pollutant;

}
