package com.brano.ecomonitor.dto.pollutantgdktaxrate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantGdkTaxRateDto {

    private Integer taxId;
    private double gdkMin;
    private double gdkMax;
    private double tax;

}
