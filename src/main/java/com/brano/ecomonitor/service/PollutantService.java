package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.Pollutant;
import com.brano.ecomonitor.repository.PollutantRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PollutantService {

    private final PollutantRepository repository;
    private final PollutionService pollutionService;

    public PollutantService(PollutantRepository repository, PollutionService pollutionService) {
        this.repository = repository;
        this.pollutionService = pollutionService;
    }

    public List<Pollutant> findAll() {
        return repository.findAll();
    }

    public Pollutant save(Pollutant pollutant) {
        return repository.save(pollutant);
    }

    @Transactional
    public void deleteById(Long id) {
        pollutionService.deleteAllByPollutantId(id);
        repository.deleteById(id);
    }

}
