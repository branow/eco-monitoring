package com.brano.ecomonitor.dto.pollutantclasstaxrate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantClassTaxRatePostDto {

    private Integer hazardClass;
    private double tax;

}
