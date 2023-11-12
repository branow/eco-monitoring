package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollutanttaxrate.PollutantTaxRateDto;
import com.brano.ecomonitor.dto.pollutanttaxrate.PollutantTaxRatePostDto;
import com.brano.ecomonitor.mapper.PollutantTaxRateMapper;
import com.brano.ecomonitor.repository.PollutantTaxRateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutantTaxRateService {

    private final PollutantTaxRateRepository repository;
    private final PollutantTaxRateMapper mapper;


    public List<PollutantTaxRateDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toPollutantTaxRateDto).toList();
    }

    public PollutantTaxRateDto save(PollutantTaxRatePostDto postDto) {
        return mapper.toPollutantTaxRateDto(repository.save(mapper.toPollutantTaxRate(postDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
