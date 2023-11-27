package com.brano.ecomonitor.dto.emergencydamage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PeopleDamageDto {

    private String emergencyName;
    private Double lp;
    private Double lh;
    private Double lpp;
    private Double pd;

}
