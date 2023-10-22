package com.brano.ecomonitor.mapper;

import com.brano.ecomonitor.dto.company.CompanyDto;
import com.brano.ecomonitor.dto.company.CompanyPostDto;
import com.brano.ecomonitor.model.Company;
import com.brano.ecomonitor.model.Settlement;
import com.brano.ecomonitor.service.SettlementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CompanyMapper {

    private final SettlementService settlementService;


    public Company toCompany(CompanyPostDto postDto) {
        Settlement settlement = settlementService.findById(postDto.getSettlement());
        return Company.builder()
                .companyId(postDto.getCompanyId())
                .companyName(postDto.getCompanyName())
                .ownership(postDto.getOwnership())
                .address(postDto.getAddress())
                .economicActivity(postDto.getEconomicActivity())
                .settlement(settlement)
                .build();
    }

    public CompanyDto toCompanyDto(Company company) {
        return CompanyDto.builder()
                .companyId(company.getCompanyId())
                .companyName(company.getCompanyName())
                .ownership(company.getOwnership())
                .economicActivity(company.getEconomicActivity())
                .address(company.getAddress())
                .settlement(company.getSettlement())
                .build();
    }

}
