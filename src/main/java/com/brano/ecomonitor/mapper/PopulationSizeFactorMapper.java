package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.populationsizefactor.PopulationSizeFactorDto;
import com.brano.ecomonitor.model.PopulationSizeFactor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PopulationSizeFactorMapper {


    public PopulationSizeFactor toPopulationSizeFactor(PopulationSizeFactorDto populationSizeFactorDto) {
        return PopulationSizeFactor.builder()
                .factorId(populationSizeFactorDto.getFactorId())
                .factor(populationSizeFactorDto.getFactor())
                .maxSize(populationSizeFactorDto.getMaxSize())
                .minSize(populationSizeFactorDto.getMinSize())
                .build();
    }

    public PopulationSizeFactorDto toPopulationSizeFactorDto(PopulationSizeFactor populationSizeFactor) {
        return PopulationSizeFactorDto.builder()
                .factorId(populationSizeFactor.getFactorId())
                .factor(populationSizeFactor.getFactor())
                .maxSize(populationSizeFactor.getMaxSize())
                .minSize(populationSizeFactor.getMinSize())
                .build();
    }

}
