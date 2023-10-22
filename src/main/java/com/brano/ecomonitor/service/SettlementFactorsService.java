package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.settlementfactors.SettlementFactorsDto;
import com.brano.ecomonitor.dto.settlementfactors.SettlementFactorsPostDto;
import com.brano.ecomonitor.mapper.SettlementFactorsMapper;
import com.brano.ecomonitor.model.SettlementFactors;
import com.brano.ecomonitor.repository.SettlementFactorsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class SettlementFactorsService {

    private final SettlementFactorsRepository repository;
    private final SettlementFactorsMapper mapper;


    public Optional<SettlementFactors> findOptById(Integer id) {
        return repository.findById(id);
    }

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
