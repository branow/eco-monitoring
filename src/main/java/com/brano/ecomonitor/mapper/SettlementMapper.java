package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.settlement.SettlementDto;
import com.brano.ecomonitor.dto.settlement.SettlementPostDto;
import com.brano.ecomonitor.model.Settlement;
import com.brano.ecomonitor.model.SettlementFactors;
import com.brano.ecomonitor.service.SettlementFactorsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SettlementMapper {

    private final SettlementFactorsService settlementFactorsService;


    public SettlementDto toSettlementDto(Settlement settlement) {
        return SettlementDto.builder()
                .settlementId(settlement.getSettlementId())
                .settlementType(settlement.getSettlementType())
                .settlementName(settlement.getSettlementName())
                .factors(settlement.getFactors())
                .build();
    }

    public Settlement toSettlement(SettlementPostDto dto) {
        SettlementFactors settlementFactors =
                settlementFactorsService.findOptById(dto.getSettlementId()).orElse(null);
        return Settlement.builder()
                .settlementId(dto.getSettlementId())
                .settlementName(dto.getSettlementName())
                .settlementType(dto.getSettlementType())
                .factors(settlementFactors)
                .build();
    }

}
