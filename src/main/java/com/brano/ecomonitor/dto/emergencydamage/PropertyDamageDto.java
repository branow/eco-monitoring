package com.brano.ecomonitor.dto.emergencydamage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PropertyDamageDto {

    private String emergencyName;
    private Double lps;
    private Double lnps;
    private Double lfp;
    private Double ls;
    private Double lp;

}
