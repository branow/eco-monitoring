package com.brano.ecomonitor.service;

import com.brano.ecomonitor.model.Pollution;
import com.brano.ecomonitor.dto.PollutionModel;
import com.brano.ecomonitor.repository.PollutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollutionService {

    private final PollutionRepository repository;
    @Autowired
    private CompanyService companyService;
    @Autowired
    private PollutantService pollutantService;

    public PollutionService(PollutionRepository repository) {
        this.repository = repository;
    }


    public List<Integer> findAllDistinctYear() {
        return repository.findAllDistinctYear();
    }

    public List<Pollution> findAllByCompanyId(Integer companyId) {
        return repository.findAllByCompanyCompanyId(companyId);
    }

    public List<Pollution> findAllByCompanyIdAndYear(Integer companyId, Integer year) {
        return repository.findAllByCompanyCompanyIdAndYear(companyId, year);
    }

    public List<Pollution> findAll() {
        return repository.findAll();
    }

    public Pollution save(Pollution pollution) {
        return repository.save(pollution);
    }

    public Pollution save(PollutionModel pollutionModel) {
        return repository.save(toPollution(pollutionModel));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }


    public void deleteAllByCompanyId(Integer id) {
        repository.deleteAllByCompanyCompanyId(id);
    }

    public void deleteAllByPollutantId(Integer id) {
        repository.deleteAllByPollutantPollutantId(id);
    }

    private Pollution toPollution(PollutionModel model) {
        return Pollution.builder()
                .pollutionId(model.getPollutionId())
                .company(companyService.findById(model.getCompany()))
                .pollutant(pollutantService.findById(model.getPollutant()))
                .emissionMass(model.getEmissionMass())
                .concentration(model.getConcentration())
                .year(model.getYear())
                .build();
    }

}
