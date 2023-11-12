package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.PollutantTaxRate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PollutantTaxRateRepository extends JpaRepository<PollutantTaxRate, Integer> {
}
