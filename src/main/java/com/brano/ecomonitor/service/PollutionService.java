package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.Pollutant;
import com.brano.ecomonitor.entity.Pollution;
import com.brano.ecomonitor.repository.PollutantRepository;
import com.brano.ecomonitor.repository.PollutionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollutionService {

    private final PollutionRepository repository;

    public PollutionService(PollutionRepository repository) {
        this.repository = repository;
    }

    public List<Pollution> findAll() {
        return repository.findAll();
    }

    public Pollution save(Pollution pollution) {
        return repository.save(pollution);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}
