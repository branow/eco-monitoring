package com.brano.ecomonitor.dto.settlement;

import com.brano.ecomonitor.model.SettlementFactors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SettlementWithFactorsDto {

    private Integer settlementId;
    private String settlementName;
    private String settlementType;
    private SettlementFactors factors;

}
