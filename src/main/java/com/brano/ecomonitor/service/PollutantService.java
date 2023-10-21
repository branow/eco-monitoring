package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollutant.PollutantDto;
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


    public PollutantDto findDtoById(Integer id) {
        return mapper.toPollutantDto(repository.findById(id).orElseThrow());
    }

    public Pollutant findById(Integer id) {
        return repository.findById(id).orElseThrow();
    }

    public List<PollutantDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toPollutantDto).toList();
    }

    public PollutantDto save(PollutantDto pollutantDto) {
        return mapper.toPollutantDto(repository.save(mapper.toPollutant(pollutantDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
