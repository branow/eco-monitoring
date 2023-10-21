package com.brano.ecomonitor.dto.populationsizefactor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PopulationSizeFactorDto {

    private Integer factorId;
    private Double factor;
    private Integer maxSize;
    private Integer minSize;

}
