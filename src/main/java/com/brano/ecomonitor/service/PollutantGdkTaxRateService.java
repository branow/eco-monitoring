package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollutantgdktaxrate.PollutantGdkTaxRateDto;
import com.brano.ecomonitor.dto.pollutantgdktaxrate.PollutantGdkTaxRatePostDto;
import com.brano.ecomonitor.mapper.PollutantGdkTaxRateMapper;
import com.brano.ecomonitor.repository.PollutantGdkTaxRateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutantGdkTaxRateService {

    private final PollutantGdkTaxRateRepository repository;
    private final PollutantGdkTaxRateMapper mapper;


    public List<PollutantGdkTaxRateDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toPollutantGdkTaxRateDto).toList();
    }

    public PollutantGdkTaxRateDto save(PollutantGdkTaxRatePostDto postDto) {
        return mapper.toPollutantGdkTaxRateDto(repository.save(mapper.toPollutantGdkTaxRate(postDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
