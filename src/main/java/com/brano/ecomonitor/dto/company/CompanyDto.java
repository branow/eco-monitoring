package com.brano.ecomonitor.dto.company;

import com.brano.ecomonitor.model.Settlement;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyDto {

    private Integer companyId;
    private String companyName;
    private String ownership;
    private String economicActivity;
    private String address;
    private Settlement settlement;

}
