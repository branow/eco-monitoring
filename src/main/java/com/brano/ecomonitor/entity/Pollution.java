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
public class Pollution {

    @Id
    @GeneratedValue
    private Long pollutionId;

    @Column(scale = 3, nullable = false)
    private Double emissionMass;

    private Integer year;

    @ManyToOne()
    @JoinColumn(name = "company", referencedColumnName = "companyId", foreignKey = @ForeignKey(name = "fk_pollution_company"))
    private Company company;

    @ManyToOne()
    @JoinColumn(name = "pollutant", referencedColumnName = "pollutantId", foreignKey = @ForeignKey(name = "fk_pollution_pollutant"))
    private Pollutant pollutant;

}
