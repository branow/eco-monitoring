package com.brano.ecomonitor.dto.company;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyPostDto {

    private Integer companyId;
    private String companyName;
    private String ownership;
    private String economicActivity;
    private String address;
    private Integer settlement;

}
