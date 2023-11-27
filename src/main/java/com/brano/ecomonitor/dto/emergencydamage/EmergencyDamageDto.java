package com.brano.ecomonitor.dto.emergencydamage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmergencyDamageDto {

    private String emergencyName;
    private double pd;
    private double lp;
    private double ad;
    private double losses;


}
