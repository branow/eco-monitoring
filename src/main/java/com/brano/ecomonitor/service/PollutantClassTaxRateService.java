package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollutantclasstaxrate.PollutantClassTaxRateDto;
import com.brano.ecomonitor.dto.pollutantclasstaxrate.PollutantClassTaxRatePostDto;
import com.brano.ecomonitor.mapper.PollutantClassTaxRateMapper;
import com.brano.ecomonitor.repository.PollutantClassTaxRateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutantClassTaxRateService {

    private final PollutantClassTaxRateRepository repository;
    private final PollutantClassTaxRateMapper mapper;


    public List<PollutantClassTaxRateDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toPollutantClassTaxRateDto).toList();
    }

    public PollutantClassTaxRateDto save(PollutantClassTaxRatePostDto postDto) {
        return mapper.toPollutantClassTaxRateDto(repository.save(mapper.toPollutantClassTaxRate(postDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
