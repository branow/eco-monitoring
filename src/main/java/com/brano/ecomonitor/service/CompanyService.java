package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.Company;
import com.brano.ecomonitor.repository.CompanyRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository repository;
    private final PollutionService pollutionService;

    public CompanyService(CompanyRepository repository, PollutionService pollutionService) {
        this.repository = repository;
        this.pollutionService = pollutionService;
    }

    public List<Company> findAll() {
        return repository.findAll();
    }

    public Company save(Company company) {
        return repository.save(company);
    }

    @Transactional
    public void deleteById(Long id) {
        pollutionService.deleteAllByCompanyId(id);
        repository.deleteById(id);
    }
}
