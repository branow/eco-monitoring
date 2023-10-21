package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.organ.OrganDto;
import com.brano.ecomonitor.mapper.OrganMapper;
import com.brano.ecomonitor.model.CriticalOrgan;
import com.brano.ecomonitor.repository.CriticalOrganRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CriticalOrganService {

    private final CriticalOrganRepository repository;
    private final OrganMapper organMapper;


    public OrganDto findById(Integer organ) {
        return organMapper.toOrganDto(repository.findById(organ).orElseThrow());
    }

    public List<OrganDto> findAll() {
        return repository.findAll().stream().map(organMapper::toOrganDto).toList();
    }

    public OrganDto save(OrganDto organDto) {
        return organMapper.toOrganDto(repository.save(organMapper.toOrgan(organDto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
