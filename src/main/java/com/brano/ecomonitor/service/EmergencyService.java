package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.emergency.EmergencyDto;
import com.brano.ecomonitor.dto.emergency.EmergencyPostDto;
import com.brano.ecomonitor.mapper.EmergencyMapper;
import com.brano.ecomonitor.repository.EmergencyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class EmergencyService {

    private final EmergencyRepository repository;
    private final EmergencyMapper mapper;


    public List<EmergencyDto> findDtoAll() {
        return repository.findAll().stream().map(mapper::toEmergencyDto).toList();
    }

    public EmergencyDto save(EmergencyPostDto dto) {
        return mapper.toEmergencyDto(repository.save(mapper.toEmergency(dto)));
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

}
