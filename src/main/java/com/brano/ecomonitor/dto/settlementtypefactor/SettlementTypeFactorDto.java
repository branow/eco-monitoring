package com.brano.ecomonitor.dto.settlementtypefactor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SettlementTypeFactorDto {

    private Integer factorId;
    private Double factor;
    private String settlementType;

}
