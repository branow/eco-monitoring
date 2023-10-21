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
@Table(name = "pollutant_impact")
public class PollutantImpact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pollutantImpactId;

    @ManyToOne()
    @JoinColumn(name = "pollutant")
    private Pollutant pollutant;

    @ManyToOne()
    @JoinColumn(name = "organ")
    private CriticalOrgan organ;


}
