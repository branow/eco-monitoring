package com.brano.ecomonitor.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PollutantModel {

    private Integer pollutantId;
    private String pollutantName;
    private Double massConsumption;
    private Double gdk;
    private Double rfc;
    private Double sf;
    private Integer hazardClass;

}
