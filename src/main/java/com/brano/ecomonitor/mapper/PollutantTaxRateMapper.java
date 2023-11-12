package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.pollutanttaxrate.PollutantTaxRateDto;
import com.brano.ecomonitor.dto.pollutanttaxrate.PollutantTaxRatePostDto;
import com.brano.ecomonitor.model.PollutantTaxRate;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PollutantTaxRateMapper {

    public PollutantTaxRate toPollutantTaxRate(PollutantTaxRatePostDto dto) {
        return PollutantTaxRate.builder()
                .pollutant(dto.getPollutant())
                .tax(dto.getTax())
                .build();
    }

    public PollutantTaxRateDto toPollutantTaxRateDto(PollutantTaxRate entity) {
        return PollutantTaxRateDto.builder()
                .pollutant(entity.getPollutant())
                .tax(entity.getTax())
                .build();
    }

}
