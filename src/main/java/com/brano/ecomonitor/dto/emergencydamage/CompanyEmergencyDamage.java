package com.brano.ecomonitor.dto.emergencydamage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyEmergencyDamage {

    List<PeopleDamageDto> pd;
    List<PropertyDamageDto> prd;
    List<AtmosphericDamageDto> ad;
    List<EmergencyDamageDto> ed;
    private double sum;

}
