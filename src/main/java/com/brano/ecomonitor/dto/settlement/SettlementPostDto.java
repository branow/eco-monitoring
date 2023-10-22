package com.brano.ecomonitor.dto.settlement;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SettlementPostDto {

    private Integer settlementId;
    private String settlementName;
    private String settlementType;

}
