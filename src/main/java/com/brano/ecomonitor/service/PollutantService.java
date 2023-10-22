package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollutant.PollutantWithoutImpactDto;
import com.brano.ecomonitor.exception.PollutantNotFoundException;
import com.brano.ecomonitor.mapper.PollutantMapper;
import com.brano.ecomonitor.model.Pollutant;
import com.brano.ecomonitor.repository.PollutantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutantService {

    private final PollutantRepository repository;
    private final PollutantMapper mapper;


    public PollutantWithoutImpactDto findDtoById(Integer id) {
        return mapper.toPollutantWithoutImpactDto(repository.findById(id).orElseThrow(() -> new PollutantNotFoundException("id", id)));
    }

    public Pollutant findById(Integer id) {
        return repository.findById(id).orElseThrow();
    }

    public List<PollutantWithoutImpactDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toPollutantWithoutImpactDto).toList();
    }

    public PollutantWithoutImpactDto save(PollutantWithoutImpactDto pollutantDto) {
        return mapper.toPollutantWithoutImpactDto(repository.save(mapper.toPollutant(pollutantDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
