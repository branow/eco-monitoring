package com.brano.ecomonitor.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Pollutant {

    @Id
    @GeneratedValue
    private Long pollutantId;

    @Column(length = 200, nullable = false)
    private String pollutantName;

    @Column(scale = 3, nullable = false)
    private Double massConsumption;

    @Column(scale = 2, nullable = false)
    private Double gdk;

    private Integer hazardClass;

}
