package com.brano.ecomonitor.entity;

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
    @GeneratedValue
    private Long pollutantImpactId;

    @ManyToOne()
    @JoinColumn(
            nullable = false,
            name = "pollutant",
            referencedColumnName = "pollutantId",
            foreignKey = @ForeignKey(name = "fk_pollution_impact_pollutant"))
    private Pollutant pollutant;

    @ManyToOne()
    @JoinColumn(
            nullable = false,
            name = "organ",
            referencedColumnName = "organId",
            foreignKey = @ForeignKey(name = "fk_pollution_impact_critical_organ"))
    private CriticalOrgan organ;


}
