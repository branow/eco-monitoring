package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.PollutantGdkTaxRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PollutantGdkTaxRateRepository extends JpaRepository<PollutantGdkTaxRate, Integer> {

    @Query("select p from PollutantGdkTaxRate p where ?1 > p.gdkMin and ?1 <= p.gdkMin")
    Optional<PollutantGdkTaxRate> findByGdk(Double gdk);

}
