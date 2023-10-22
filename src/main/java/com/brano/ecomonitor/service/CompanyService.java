package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.company.CompanyDto;
import com.brano.ecomonitor.dto.company.CompanyPostDto;
import com.brano.ecomonitor.exception.CompanyNotFoundException;
import com.brano.ecomonitor.mapper.CompanyMapper;
import com.brano.ecomonitor.model.Company;
import com.brano.ecomonitor.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CompanyService {

    private final CompanyRepository repository;
    private final CompanyMapper mapper;


    public Company findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> new CompanyNotFoundException("id", id));
    }

    public List<CompanyDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toCompanyDto).toList();
    }

    public CompanyDto save(CompanyPostDto postDto) {
        return mapper.toCompanyDto(repository.save(mapper.toCompany(postDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
