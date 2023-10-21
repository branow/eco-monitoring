package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.pollutant.PollutantDto;
import com.brano.ecomonitor.model.Pollutant;
import com.brano.ecomonitor.service.PollutantImpactService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PollutantMapper {

    private final PollutantImpactService pollutantImpactService;

    public PollutantDto toPollutantDto(Pollutant pollutant) {
        return PollutantDto.builder()
                .pollutantId(pollutant.getPollutantId())
                .pollutantName(pollutant.getPollutantName())
                .massConsumption(pollutant.getMassConsumption())
                .sf(pollutant.getSf())
                .rfc(pollutant.getRfc())
                .gdk(pollutant.getGdk())
                .hazardClass(pollutant.getHazardClass())
                .build();
    }


    public Pollutant toPollutant(PollutantDto pollutantDto) {
        return Pollutant.builder()
                .pollutantId(pollutantDto.getPollutantId())
                .pollutantName(pollutantDto.getPollutantName())
                .gdk(pollutantDto.getGdk())
                .sf(pollutantDto.getSf())
                .rfc(pollutantDto.getRfc())
                .hazardClass(pollutantDto.getHazardClass())
                .massConsumption(pollutantDto.getMassConsumption())
                .impact(pollutantImpactService.findAllOrgansByPollutantId(pollutantDto.getPollutantId()))
                .build();
    }


}
