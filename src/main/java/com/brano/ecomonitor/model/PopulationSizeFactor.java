package com.brano.ecomonitor.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
public class PopulationSizeFactor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer factorId;
    private Double factor;
    private Integer maxSize;
    private Integer minSize;
}
