package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.organ.OrganDto;
import com.brano.ecomonitor.model.CriticalOrgan;
import org.springframework.stereotype.Service;

@Service
public class OrganMapper {

    public CriticalOrgan toOrgan(OrganDto organDto) {
        return CriticalOrgan.builder()
                .organId(organDto.getOrganId())
                .organName(organDto.getOrganName())
                .build();
    }

    public OrganDto toOrganDto(CriticalOrgan organ) {
        return OrganDto.builder()
                .organId(organ.getOrganId())
                .organName(organ.getOrganName())
                .build();
    }

}
