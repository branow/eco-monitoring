package com.brano.ecomonitor.service;

import com.brano.ecomonitor.mapper.SettlementTypeFactorMapper;
import com.brano.ecomonitor.repository.SettlementTypeFactorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SettlementTypeFactorService {

    private final SettlementTypeFactorRepository repository;
    private final SettlementTypeFactorMapper mapper;

}
