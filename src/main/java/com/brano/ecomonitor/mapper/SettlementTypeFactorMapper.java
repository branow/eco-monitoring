package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.settlementtypefactor.SettlementTypeFactorDto;
import com.brano.ecomonitor.model.SettlementTypeFactor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SettlementTypeFactorMapper {

    public SettlementTypeFactor toSettlementTypeFactor(SettlementTypeFactorDto dto) {
        return SettlementTypeFactor.builder()
                .factorId(dto.getFactorId())
                .factor(dto.getFactor())
                .settlementType(dto.getSettlementType())
                .build();
    }

    public SettlementTypeFactorDto toSettlementTypeFactorDto(SettlementTypeFactor factor) {
        return SettlementTypeFactorDto.builder()
                .factorId(factor.getFactorId())
                .factor(factor.getFactor())
                .settlementType(factor.getSettlementType())
                .build();
    }

}
