package com.brano.ecomonitor.dto.settlementfactors;

import com.brano.ecomonitor.model.PopulationSizeFactor;
import com.brano.ecomonitor.model.SettlementTypeFactor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SettlementFactorsDto {

    private Integer settlementId;
    private PopulationSizeFactor populationSizeFactor;
    private SettlementTypeFactor settlementTypeFactor;

}
