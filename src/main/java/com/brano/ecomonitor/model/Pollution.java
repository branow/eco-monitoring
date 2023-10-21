package com.brano.ecomonitor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Pollution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pollutionId;

    private Double emissionMass;

    private Double concentration;

    private Integer year;

    @ManyToOne()
    @JoinColumn(name = "company")
    private Company company;

    @ManyToOne()
    @JoinColumn(name = "pollutant")
    private Pollutant pollutant;

}
