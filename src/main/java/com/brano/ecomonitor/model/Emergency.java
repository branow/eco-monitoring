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
public class Emergency {

    @Id
    private Integer emergencyId;
    private String emergencyName;
    @ManyToOne
    @JoinColumn(name = "company")
    private Company company;
    private Integer year;
    private Integer minorAccident;
    private Integer majorAccident;
    private Integer disability;
    private Integer dead;
    private Double lps;
    private Double lnps;
    private Double lfp;
    private Double ls;

}
