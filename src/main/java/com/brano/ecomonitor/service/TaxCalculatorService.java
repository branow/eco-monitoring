package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.calc.CompanyTaxDto;
import com.brano.ecomonitor.dto.calc.PollutantTaxDto;
import com.brano.ecomonitor.model.Pollution;
import com.brano.ecomonitor.repository.PollutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TaxCalculatorService {

    private final PollutionRepository pollutionRepository;
    private final TaxRateService taxRateService;


    public CompanyTaxDto calculateTax(Integer companyId, Integer year) {
        List<PollutantTaxDto> pollutantTaxDtos = pollutionRepository.findAllByCompanyCompanyIdAndYear(companyId, year)
                .stream().map(this::calculatePollutantTax).toList();
        double sum = pollutantTaxDtos.stream().mapToDouble(PollutantTaxDto::getTax).sum();
        return CompanyTaxDto.builder()
                .pollutantTaxes(pollutantTaxDtos)
                .sumTax(sum)
                .build();
    }

    private PollutantTaxDto calculatePollutantTax(Pollution pollution) {
        double taxRate = taxRateService.getTaxRateByPollutant(pollution.getPollutant());
        return PollutantTaxDto.builder()
                .pollutantName(pollution.getPollutant().getPollutantName())
                .emissionMas(pollution.getEmissionMass())
                .taxRate(taxRate)
                .tax(taxRate * pollution.getEmissionMass() / 1000)
                .build();
    }

}
