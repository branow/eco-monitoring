package com.brano.ecomonitor.dto.pollutant;

import com.brano.ecomonitor.dto.organ.OrganDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantOrgansDto {

    private Integer pollutantId;
    private String pollutantName;
    private Double massConsumption;
    private Double gdk;
    private Double rfc;
    private Double sf;
    private List<OrganDto> impact;
    private Integer hazardClass;

}
