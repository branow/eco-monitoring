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
public class CriticalOrgan {

    @Id
    @GeneratedValue
    private Long organId;

    @Column(length = 200, nullable = false)
    private String organName;

}
