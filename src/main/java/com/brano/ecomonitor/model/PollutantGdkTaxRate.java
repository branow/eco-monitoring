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
public class PollutantGdkTaxRate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taxId;
    private double gdkMin;
    private double gdkMax;
    private double tax;

}
