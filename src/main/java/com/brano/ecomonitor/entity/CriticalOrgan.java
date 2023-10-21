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
public class CriticalOrgan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer organId;

    private String organName;

}
