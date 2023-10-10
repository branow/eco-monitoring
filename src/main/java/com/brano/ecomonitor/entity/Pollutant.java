package com.brano.ecomonitor.entity;


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
    @GeneratedValue
    private Long pollutantId;

    @Column(length = 200, nullable = false)
    private String pollutantName;

    @Column(scale = 3, nullable = false)
    private Double massConsumption;

    @Column(scale = 2, nullable = false)
    private Double gdk;

    @Column(scale = 6)
    private Double rfc;

    @Column(scale = 4)
    private Double sf;

    @ManyToMany()
    @JoinTable(
            name = "pollutant_impact",
            joinColumns = @JoinColumn(name = "pollutant", referencedColumnName = "pollutantId", foreignKey = @ForeignKey(name = "fk_pollutant_impact_pollutant")),
            inverseJoinColumns = @JoinColumn(name = "organ", referencedColumnName = "organId", foreignKey = @ForeignKey(name = "fk_pollutant_impact_organ")))
    private List<CriticalOrgan> impact;

    private Integer hazardClass;

}
