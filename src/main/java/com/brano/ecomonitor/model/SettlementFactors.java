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
public class SettlementFactors {

    @Id
    private Integer settlementId;
    @ManyToOne
    @JoinColumn(name = "population_size_factor")
    private PopulationSizeFactor populationSizeFactor;
    @ManyToOne
    @JoinColumn(name = "type_factor")
    private SettlementTypeFactor settlementTypeFactor;

}
