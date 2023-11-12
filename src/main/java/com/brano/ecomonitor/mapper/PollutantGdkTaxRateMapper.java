package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.pollutantgdktaxrate.PollutantGdkTaxRateDto;
import com.brano.ecomonitor.dto.pollutantgdktaxrate.PollutantGdkTaxRatePostDto;
import com.brano.ecomonitor.model.PollutantGdkTaxRate;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PollutantGdkTaxRateMapper {

    public PollutantGdkTaxRate toPollutantGdkTaxRate(PollutantGdkTaxRatePostDto dto) {
        return PollutantGdkTaxRate.builder()
                .taxId(dto.getTaxId())
                .gdkMax(dto.getGdkMax())
                .gdkMin(dto.getGdkMin())
                .tax(dto.getTax())
                .build();
    }

    public PollutantGdkTaxRateDto toPollutantGdkTaxRateDto(PollutantGdkTaxRate entity) {
        return PollutantGdkTaxRateDto.builder()
                .taxId(entity.getTaxId())
                .gdkMax(entity.getGdkMax())
                .gdkMin(entity.getGdkMin())
                .tax(entity.getTax())
                .build();
    }

}
