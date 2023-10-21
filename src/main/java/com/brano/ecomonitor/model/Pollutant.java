package com.brano.ecomonitor.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Pollutant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pollutantId;

    private String pollutantName;

    private Double massConsumption;

    private Double gdk;

    private Double rfc;

    private Double sf;

    @ManyToMany()
    @JoinTable(
            name = "pollutant_impact",
            joinColumns = @JoinColumn(name = "pollutant"),
            inverseJoinColumns = @JoinColumn(name = "organ"))
    private List<CriticalOrgan> impact;

    private Integer hazardClass;

}
