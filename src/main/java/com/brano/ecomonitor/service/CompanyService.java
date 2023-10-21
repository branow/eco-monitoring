package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.Company;
import com.brano.ecomonitor.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository repository;
    @Autowired
    private PollutionService pollutionService;

    public CompanyService(CompanyRepository repository) {
        this.repository = repository;
    }

    public Company findById(Integer id) {
        return repository.findById(id).orElseThrow();
    }

    public List<Company> findAll() {
        return repository.findAll();
    }

    public Company save(Company company) {
        return repository.save(company);
    }

    @Transactional
    public void deleteById(Integer id) {
        pollutionService.deleteAllByCompanyId(id);
        repository.deleteById(id);
    }
}
