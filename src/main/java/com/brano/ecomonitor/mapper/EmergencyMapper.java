package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.emergency.EmergencyDto;
import com.brano.ecomonitor.dto.emergency.EmergencyPostDto;
import com.brano.ecomonitor.dto.settlement.SettlementDto;
import com.brano.ecomonitor.dto.settlement.SettlementPostDto;
import com.brano.ecomonitor.model.Company;
import com.brano.ecomonitor.model.Emergency;
import com.brano.ecomonitor.model.Settlement;
import com.brano.ecomonitor.model.SettlementFactors;
import com.brano.ecomonitor.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class EmergencyMapper {

    private final CompanyService companyService;


    public EmergencyDto toEmergencyDto(Emergency entity) {
        return EmergencyDto.builder()
                .emergencyId(entity.getEmergencyId())
                .company(entity.getCompany())
                .emergencyName(entity.getEmergencyName())
                .dead(entity.getDead())
                .disability(entity.getDisability())
                .lfp(entity.getLfp())
                .lnps(entity.getLnps())
                .lps(entity.getLps())
                .ls(entity.getLs())
                .majorAccident(entity.getMajorAccident())
                .minorAccident(entity.getMinorAccident())
                .year(entity.getYear())
                .build();
    }

    public Emergency toEmergency(EmergencyPostDto dto) {
        Company company = companyService.findById(dto.getCompany());
        return Emergency.builder()
                .emergencyId(dto.getEmergencyId())
                .company(company)
                .emergencyName(dto.getEmergencyName())
                .dead(dto.getDead())
                .disability(dto.getDisability())
                .lfp(dto.getLfp())
                .lnps(dto.getLnps())
                .lps(dto.getLps())
                .ls(dto.getLs())
                .majorAccident(dto.getMajorAccident())
                .minorAccident(dto.getMinorAccident())
                .year(dto.getYear())
                .build();
    }

}
