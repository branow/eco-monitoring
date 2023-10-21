package com.brano.ecomonitor.dto.organ;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class OrganDto {

    private Integer organId;
    private String organName;

}
