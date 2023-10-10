package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.CriticalOrgan;
import com.brano.ecomonitor.entity.PollutantImpact;
import com.brano.ecomonitor.entity.Pollution;
import com.brano.ecomonitor.model.PollutantImpactModel;
import com.brano.ecomonitor.model.PollutionModel;
import com.brano.ecomonitor.repository.CriticalOrganRepository;
import com.brano.ecomonitor.repository.PollutantImpactRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollutantImpactService {

    private final PollutantImpactRepository repository;

    @Autowired
    private PollutantService pollutantService;
    @Autowired
    private CriticalOrganService criticalOrganService;


    public PollutantImpactService(PollutantImpactRepository repository) {
        this.repository = repository;
    }


    public List<PollutantImpact> findAllByPollutantId(Long id) {
        return repository.findAllByPollutantPollutantId(id);
    }


    public List<PollutantImpact> findAll() {
        return repository.findAll();
    }

    public PollutantImpact save(PollutantImpactModel organ) {
        return repository.save(toPollutantImpact(organ));
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public void deleteAllByOrganId(Long id) {
        repository.deleteAllByOrganOrganId(id);
    }

    public void deleteAllByPollutantId(Long id) {
        repository.deleteAllByPollutantPollutantId(id);
    }

    private PollutantImpact toPollutantImpact(PollutantImpactModel model) {
        return PollutantImpact.builder()
                .pollutantImpactId(model.getPollutantImpactId())
                .pollutant(pollutantService.findById(model.getPollutant()))
                .organ(criticalOrganService.findById(model.getOrgan()))
                .build();
    }

}


