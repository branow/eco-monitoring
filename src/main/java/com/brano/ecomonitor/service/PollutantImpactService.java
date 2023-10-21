package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollutantimpact.PollutantImpactDto;
import com.brano.ecomonitor.dto.pollutantimpact.PollutantImpactPostDto;
import com.brano.ecomonitor.mapper.PollutantImpactMapper;
import com.brano.ecomonitor.model.CriticalOrgan;
import com.brano.ecomonitor.model.PollutantImpact;
import com.brano.ecomonitor.dto.PollutantImpactModel;
import com.brano.ecomonitor.repository.PollutantImpactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutantImpactService {

    private final PollutantImpactRepository repository;
    private final PollutantImpactMapper mapper;


    public List<CriticalOrgan> findAllOrgansByPollutantId(Integer id) {
        return repository.findAllOrganByPollutantPollutantId(id);
    }

    public List<PollutantImpactDto> findAll() {
        return repository.findAll().stream().map(mapper::toPollutantImpactDto).toList();
    }

    public PollutantImpactDto save(PollutantImpactPostDto organ) {
        return mapper.toPollutantImpactDto(repository.save(mapper.toPollutantImpact(organ)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}


