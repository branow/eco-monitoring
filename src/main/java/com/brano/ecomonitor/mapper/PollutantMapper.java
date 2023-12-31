package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.pollutant.PollutantWithoutImpactDto;
import com.brano.ecomonitor.model.CriticalOrgan;
import com.brano.ecomonitor.model.Pollutant;
import com.brano.ecomonitor.service.CriticalOrganService;
import com.brano.ecomonitor.service.PollutantImpactService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutantMapper {

    private final CriticalOrganService criticalOrganService;

    public PollutantWithoutImpactDto toPollutantWithoutImpactDto(Pollutant pollutant) {
        return PollutantWithoutImpactDto.builder()
                .pollutantId(pollutant.getPollutantId())
                .pollutantName(pollutant.getPollutantName())
                .massConsumption(pollutant.getMassConsumption())
                .sf(pollutant.getSf())
                .rfc(pollutant.getRfc())
                .gdk(pollutant.getGdk())
                .hazardClass(pollutant.getHazardClass())
                .build();
    }


    public Pollutant toPollutant(PollutantWithoutImpactDto pollutantDto) {
        List<CriticalOrgan> criticalOrgans = criticalOrganService.findAllByPollutantId(pollutantDto.getPollutantId());
        return Pollutant.builder()
                .pollutantId(pollutantDto.getPollutantId())
                .pollutantName(pollutantDto.getPollutantName())
                .gdk(pollutantDto.getGdk())
                .sf(pollutantDto.getSf())
                .rfc(pollutantDto.getRfc())
                .hazardClass(pollutantDto.getHazardClass())
                .massConsumption(pollutantDto.getMassConsumption())
                .impact(criticalOrgans)
                .build();
    }


}
