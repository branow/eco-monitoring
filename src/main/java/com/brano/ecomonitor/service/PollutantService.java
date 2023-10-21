package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.Pollutant;
import com.brano.ecomonitor.entity.PollutantImpact;
import com.brano.ecomonitor.dto.PollutantModel;
import com.brano.ecomonitor.repository.PollutantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PollutantService {

    private final PollutantRepository repository;
    @Autowired
    private PollutionService pollutionService;
    @Autowired
    private PollutantImpactService pollutantImpactService;

    public PollutantService(PollutantRepository repository) {
        this.repository = repository;
    }

    public Pollutant findById(Integer id) {
        return repository.findById(id).orElseThrow();
    }

    public List<Pollutant> findAll() {
        return repository.findAll();
    }

    public Pollutant save(PollutantModel pollutant) {
        return repository.save(toPollutant(pollutant));
    }

    @Transactional
    public void deleteById(Integer id) {
        pollutantImpactService.deleteAllByPollutantId(id);
        pollutionService.deleteAllByPollutantId(id);
        repository.deleteById(id);
    }

    private Pollutant toPollutant(PollutantModel model) {
        return Pollutant.builder()
                .pollutantId(model.getPollutantId())
                .pollutantName(model.getPollutantName())
                .gdk(model.getGdk())
                .rfc(model.getRfc())
                .massConsumption(model.getMassConsumption())
                .hazardClass(model.getHazardClass())
                .impact(pollutantImpactService.findAllByPollutantId(model.getPollutantId())
                        .stream().map(PollutantImpact::getOrgan)
                        .collect(Collectors.toList()))
                .build();
    }

}
