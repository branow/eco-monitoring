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
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer companyId;

    private String companyName;

    private String ownership;

    private String economicActivity;

    private String address;

    @ManyToOne
    @JoinColumn(name = "settlement")
    private Settlement settlement;

}
