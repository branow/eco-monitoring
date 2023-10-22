package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.populationsizefactor.PopulationSizeFactorDto;
import com.brano.ecomonitor.mapper.PopulationSizeFactorMapper;
import com.brano.ecomonitor.model.PopulationSizeFactor;
import com.brano.ecomonitor.model.SettlementTypeFactor;
import com.brano.ecomonitor.repository.PopulationSizeFactorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class PopulationSizeFactorService {

    private final PopulationSizeFactorRepository repository;
    private final PopulationSizeFactorMapper mapper;

    public Optional<PopulationSizeFactor> findOptById(Integer id) {
        return repository.findById(id);
    }

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
