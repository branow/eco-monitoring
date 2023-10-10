package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.CriticalOrgan;
import com.brano.ecomonitor.repository.CriticalOrganRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CriticalOrganService {

    private final CriticalOrganRepository repository;
    @Autowired
    private PollutantImpactService pollutantImpactService;

    public CriticalOrganService(CriticalOrganRepository repository) {
        this.repository = repository;
    }

    public CriticalOrgan findById(Long organ) {
        return repository.findById(organ).orElseThrow();
    }

    public List<CriticalOrgan> findAll() {
        return repository.findAll();
    }

    public CriticalOrgan save(CriticalOrgan organ) {
        return repository.save(organ);
    }

    public void deleteById(Long id) {
        pollutantImpactService.deleteAllByOrganId(id);
        repository.deleteById(id);
    }


}
