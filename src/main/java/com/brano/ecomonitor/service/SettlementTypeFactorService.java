package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.organ.OrganDto;
import com.brano.ecomonitor.dto.settlementtypefactor.SettlementTypeFactorDto;
import com.brano.ecomonitor.mapper.SettlementTypeFactorMapper;
import com.brano.ecomonitor.model.SettlementTypeFactor;
import com.brano.ecomonitor.repository.SettlementTypeFactorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class SettlementTypeFactorService {

    private final SettlementTypeFactorRepository repository;
    private final SettlementTypeFactorMapper mapper;

    public Optional<SettlementTypeFactor> findOptById(Integer id) {
        return repository.findById(id);
    }

    public List<SettlementTypeFactorDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toSettlementTypeFactorDto).toList();
    }

    public SettlementTypeFactorDto save(SettlementTypeFactorDto dto) {
        return mapper.toSettlementTypeFactorDto(repository.save(mapper.toSettlementTypeFactor(dto)));
    }

    public void deleteById(int id) {
        repository.deleteById(id);
    }
}
