package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.settlement.SettlementDto;
import com.brano.ecomonitor.dto.settlement.SettlementPostDto;
import com.brano.ecomonitor.exception.SettlementNotFoundException;
import com.brano.ecomonitor.mapper.SettlementMapper;
import com.brano.ecomonitor.model.Settlement;
import com.brano.ecomonitor.repository.SettlementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SettlementService {

    private final SettlementRepository repository;
    private final SettlementMapper mapper;


    public Settlement findById(Integer id) {
        return repository.findById(id).orElseThrow(() ->
                new SettlementNotFoundException("Settlement with such id not found: " + id));
    }

    public List<SettlementDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toSettlementDto).toList();
    }

    public SettlementDto save(SettlementPostDto dto) {
        return mapper.toSettlementDto(repository.save(mapper.toSettlement(dto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
