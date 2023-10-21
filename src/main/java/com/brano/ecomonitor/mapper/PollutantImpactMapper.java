package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.pollutantimpact.PollutantImpactDto;
import com.brano.ecomonitor.dto.pollutantimpact.PollutantImpactPostDto;
import com.brano.ecomonitor.model.CriticalOrgan;
import com.brano.ecomonitor.model.Pollutant;
import com.brano.ecomonitor.model.PollutantImpact;
import com.brano.ecomonitor.service.CriticalOrganService;
import com.brano.ecomonitor.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PollutantImpactMapper {

    private final PollutantService pollutantService;
    private final CriticalOrganService criticalOrganService;


    public PollutantImpact toPollutantImpact(PollutantImpactPostDto postDto) {
        CriticalOrgan organ = criticalOrganService.findById(postDto.getOrgan());
        Pollutant pollutant = pollutantService.findById(postDto.getPollutant());
        return PollutantImpact.builder()
                .pollutantImpactId(new PollutantImpact.PollutantImpactId(pollutant, organ))
                .build();
    }

    public PollutantImpactDto toPollutantImpactDto(PollutantImpact pollutantImpact) {
        return PollutantImpactDto.builder()
                .pollutant(pollutantImpact.getPollutantImpactId().getPollutant())
                .organ(pollutantImpact.getPollutantImpactId().getOrgan())
                .build();
    }

}
