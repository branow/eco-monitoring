package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.Pollutant;
import com.brano.ecomonitor.repository.PollutantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollutantService {

    private final PollutantRepository repository;

    public PollutantService(PollutantRepository repository) {
        this.repository = repository;
    }

    public List<Pollutant> findAll() {
        return repository.findAll();
    }

    public Pollutant save(Pollutant pollutant) {
        return repository.save(pollutant);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}
