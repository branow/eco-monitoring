package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.pollutantclasstaxrate.PollutantClassTaxRateDto;
import com.brano.ecomonitor.dto.pollutantclasstaxrate.PollutantClassTaxRatePostDto;
import com.brano.ecomonitor.model.PollutantClassTaxRate;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PollutantClassTaxRateMapper {

    public PollutantClassTaxRate toPollutantClassTaxRate(PollutantClassTaxRatePostDto dto) {
        return PollutantClassTaxRate.builder()
                .hazardClass(dto.getHazardClass())
                .tax(dto.getTax())
                .build();
    }

    public PollutantClassTaxRateDto toPollutantClassTaxRateDto(PollutantClassTaxRate entity) {
        return PollutantClassTaxRateDto.builder()
                .hazardClass(entity.getHazardClass())
                .tax(entity.getTax())
                .build();
    }

}
