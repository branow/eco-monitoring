package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.pollution.PollutionDto;
import com.brano.ecomonitor.dto.pollution.PollutionPostDto;
import com.brano.ecomonitor.model.Company;
import com.brano.ecomonitor.model.Pollutant;
import com.brano.ecomonitor.model.Pollution;
import com.brano.ecomonitor.service.CompanyService;
import com.brano.ecomonitor.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PollutionMapper {

    private final CompanyService companyService;
    private final PollutantService pollutantService;


    public Pollution toPollution(PollutionPostDto postDto) {
        Company company = companyService.findById(postDto.getCompany());
        Pollutant pollutant = pollutantService.findById(postDto.getPollutant());
        return Pollution.builder()
                .pollutionId(postDto.getPollutionId())
                .concentration(postDto.getConcentration())
                .emissionMass(postDto.getEmissionMass())
                .year(postDto.getYear())
                .pollutant(pollutant)
                .company(company)
                .build();
    }

    public PollutionDto toPollutionDto(Pollution pollution) {
        return PollutionDto.builder()
                .pollutionId(pollution.getPollutionId())
                .year(pollution.getYear())
                .company(pollution.getCompany())
                .concentration(pollution.getConcentration())
                .emissionMass(pollution.getEmissionMass())
                .pollutant(pollution.getPollutant())
                .build();
    }

}
