package com.brano.ecomonitor.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
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
public class Company {

    @Id
    @GeneratedValue
    private Long companyId;

    @Column(length = 200, nullable = false)
    private String companyName;

    @Column(length = 50)
    private String ownership;

    private String economicActivity;

    private String address;

}
