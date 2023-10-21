package com.brano.ecomonitor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "pollutant_impact")
public class PollutantImpact {


    @EmbeddedId
    private PollutantImpactId pollutantImpactId;


    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Embeddable
    public static class PollutantImpactId implements Serializable {

        @ManyToOne()
        @JoinColumn(name = "pollutant")
        private Pollutant pollutant;
        @ManyToOne()
        @JoinColumn(name = "organ")
        private CriticalOrgan organ;

    }
}
