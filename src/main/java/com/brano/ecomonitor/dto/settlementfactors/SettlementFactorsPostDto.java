package com.brano.ecomonitor.dto.settlementfactors;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SettlementFactorsPostDto {

    private Integer settlementId;
    private Integer populationSizeFactor;
    private Integer settlementTypeFactor;

}
