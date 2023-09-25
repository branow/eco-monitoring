package com.brano.ecomonitor.service;

import com.brano.ecomonitor.entity.Company;
import com.brano.ecomonitor.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository repository;

    public CompanyService(CompanyRepository repository) {
        this.repository = repository;
    }

    public List<Company> findAll() {
        return repository.findAll();
    }

    public Company save(Company company) {
        return repository.save(company);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
