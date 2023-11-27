package com.brano.ecomonitor.dto.emergencydamage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AtmosphericDamageDto {

    private String emergencyName;
    private Double mass;
    private Double tax;
    private Double dc;
    private Double tc;
    private Double ec;
    private Double ad;


}
