package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.calc.CompanyTaxDto;
import com.brano.ecomonitor.dto.calc.PollutantTaxDto;
import com.brano.ecomonitor.model.Pollution;
import com.brano.ecomonitor.repository.PollutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TaxCalculatorService {

    private final PollutionRepository pollutionRepository;
    private final TaxRateService taxRateService;
    private final NumberRounder rounder;


    public CompanyTaxDto calculateTax(Integer companyId, Integer year) {
        List<PollutantTaxDto> pollutantTaxDtos = pollutionRepository.findAllByCompanyCompanyIdAndYear(companyId, year)
                .stream().map(this::calculatePollutantTax).toList();
        double sum = rounder.round(pollutantTaxDtos.stream().mapToDouble(PollutantTaxDto::getTax).sum(), 3);
        return CompanyTaxDto.builder()
                .pollutantTaxes(pollutantTaxDtos)
                .sumTax(sum)
                .build();
    }

    private PollutantTaxDto calculatePollutantTax(Pollution pollution) {
        double taxRate = taxRateService.getTaxRateByPollutant(pollution.getPollutant());
        double tax = rounder.round(taxRate * pollution.getEmissionMass() / 1000, 3);
        return PollutantTaxDto.builder()
                .pollutantName(pollution.getPollutant().getPollutantName())
                .emissionMass(pollution.getEmissionMass())
                .taxRate(taxRate)
                .tax(tax)
                .build();
    }

}
