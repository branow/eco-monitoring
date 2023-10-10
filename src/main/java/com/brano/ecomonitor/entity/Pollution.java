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

    @Column(scale = 3, nullable = false)
    private Double concentration;

    private Integer year;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "company", referencedColumnName = "companyId", foreignKey = @ForeignKey(name = "fk_pollution_company"))
    private Company company;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "pollutant", referencedColumnName = "pollutantId", foreignKey = @ForeignKey(name = "fk_pollution_pollutant"))
    private Pollutant pollutant;

}
