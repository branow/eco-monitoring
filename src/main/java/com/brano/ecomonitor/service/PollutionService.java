package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.pollution.PollutionDto;
import com.brano.ecomonitor.dto.pollution.PollutionPostDto;
import com.brano.ecomonitor.mapper.PollutionMapper;
import com.brano.ecomonitor.repository.PollutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutionService {

    private final PollutionRepository repository;
    private final PollutionMapper mapper;


    public List<Integer> findDistinctYearAll() {
        return repository.findDistinctYearAll();
    }

    public List<PollutionDto> findDtoAllByCompanyId(Integer companyId) {
        return repository.findAllByCompanyCompanyId(companyId).stream().map(mapper::toPollutionDto).toList();
    }

    public List<PollutionDto> findDtoAllByCompanyIdAndYear(Integer companyId, Integer year) {
        return repository.findAllByCompanyCompanyIdAndYear(companyId, year).stream().map(mapper::toPollutionDto).toList();
    }

    public List<PollutionDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toPollutionDto).toList();
    }

    public PollutionDto save(PollutionPostDto postDto) {
        return mapper.toPollutionDto(repository.save(mapper.toPollution(postDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
