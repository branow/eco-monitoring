package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.populationsizefactor.PopulationSizeFactorDto;
import com.brano.ecomonitor.mapper.PopulationSizeFactorMapper;
import com.brano.ecomonitor.repository.PopulationSizeFactorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PopulationSizeFactorService {

    private final PopulationSizeFactorRepository repository;
    private final PopulationSizeFactorMapper mapper;

    public List<PopulationSizeFactorDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toPopulationSizeFactorDto).toList();
    }

    public PopulationSizeFactorDto save(PopulationSizeFactorDto dto) {
        return mapper.toPopulationSizeFactorDto(repository.save(mapper.toPopulationSizeFactor(dto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
