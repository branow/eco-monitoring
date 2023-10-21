package com.brano.ecomonitor.service;

import com.brano.ecomonitor.model.PollutantImpact;
import com.brano.ecomonitor.dto.PollutantImpactModel;
import com.brano.ecomonitor.repository.PollutantImpactRepository;
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


    public List<PollutantImpact> findAllByPollutantId(Integer id) {
        return repository.findAllByPollutantPollutantId(id);
    }


    public List<PollutantImpact> findAll() {
        return repository.findAll();
    }

    public PollutantImpact save(PollutantImpactModel organ) {
        return repository.save(toPollutantImpact(organ));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    public void deleteAllByOrganId(Integer id) {
        repository.deleteAllByOrganOrganId(id);
    }

    public void deleteAllByPollutantId(Integer id) {
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


