package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollutant.PollutantDto;
import com.brano.ecomonitor.mapper.PollutantMapper;
import com.brano.ecomonitor.model.Pollutant;
import com.brano.ecomonitor.model.PollutantImpact;
import com.brano.ecomonitor.dto.PollutantModel;
import com.brano.ecomonitor.repository.PollutantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PollutantService {

    private final PollutantRepository repository;
    private final PollutantMapper mapper;


    public PollutantDto findById(Integer id) {
        return mapper.toPollutantDto(repository.findById(id).orElseThrow());
    }

    public List<PollutantDto> findAll() {
        return repository.findAll().stream().map(mapper::toPollutantDto).toList();
    }

    public PollutantDto save(PollutantDto pollutantDto) {
        return mapper.toPollutantDto(repository.save(mapper.toPollutant(pollutantDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
