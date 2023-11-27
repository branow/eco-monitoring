package com.brano.ecomonitor.dto.emergency;

import com.brano.ecomonitor.model.Company;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmergencyDto {

    private Integer emergencyId;
    private Company company;
    private Integer year;
    private String emergencyName;
    private Integer minorAccident;
    private Integer majorAccident;
    private Integer disability;
    private Integer dead;
    private Double lps;
    private Double lnps;
    private Double lfp;
    private Double ls;

}
