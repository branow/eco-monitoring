package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.settlementfactors.SettlementFactorsDto;
import com.brano.ecomonitor.dto.settlementfactors.SettlementFactorsPostDto;
import com.brano.ecomonitor.mapper.SettlementFactorsMapper;
import com.brano.ecomonitor.repository.SettlementFactorsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SettlementFactorsService {

    private final SettlementFactorsRepository repository;
    private final SettlementFactorsMapper mapper;


    public List<SettlementFactorsDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toSettlementFactorsDto).toList();
    }

    public SettlementFactorsDto save(SettlementFactorsPostDto dto) {
        return mapper.toSettlementFactorsDto(repository.save(mapper.toSettlementFactors(dto)));
    }

    public void deleteById(int id) {
        repository.deleteById(id);
    }
}
