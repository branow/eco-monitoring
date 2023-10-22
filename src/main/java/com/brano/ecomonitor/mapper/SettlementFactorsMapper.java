package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.settlement.SettlementPostDto;
import com.brano.ecomonitor.dto.settlementfactors.SettlementFactorsDto;
import com.brano.ecomonitor.dto.settlementfactors.SettlementFactorsPostDto;
import com.brano.ecomonitor.model.PopulationSizeFactor;
import com.brano.ecomonitor.model.Settlement;
import com.brano.ecomonitor.model.SettlementFactors;
import com.brano.ecomonitor.model.SettlementTypeFactor;
import com.brano.ecomonitor.service.PopulationSizeFactorService;
import com.brano.ecomonitor.service.SettlementTypeFactorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SettlementFactorsMapper {

    private final PopulationSizeFactorService populationSizeFactorService;
    private final SettlementTypeFactorService settlementTypeFactorService;


    public SettlementFactors toSettlementFactors(SettlementFactorsPostDto postDto) {
        SettlementTypeFactor settlementTypeFactor =
                settlementTypeFactorService.findOptById(postDto.getSettlementId()).orElse(null);
        PopulationSizeFactor populationSizeFactor =
                populationSizeFactorService.findOptById(postDto.getSettlementId()).orElse(null);
        return SettlementFactors.builder()
                .settlementId(postDto.getSettlementId())
                .settlementTypeFactor(settlementTypeFactor)
                .populationSizeFactor(populationSizeFactor)
                .build();
    }

    public SettlementFactorsDto toSettlementFactorsDto(SettlementFactors factors) {
        return SettlementFactorsDto.builder()
                .settlementId(factors.getSettlementId())
                .populationSizeFactor(factors.getPopulationSizeFactor())
                .settlementTypeFactor(factors.getSettlementTypeFactor())
                .build();
    }

}
