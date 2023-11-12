package com.brano.ecomonitor.dto.calc;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyTaxDto {

    private List<PollutantTaxDto> pollutantTaxes;
    private double sumTax;

}
