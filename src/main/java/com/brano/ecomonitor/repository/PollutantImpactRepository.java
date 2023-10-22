package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.CriticalOrgan;
import com.brano.ecomonitor.model.PollutantImpact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PollutantImpactRepository extends JpaRepository<PollutantImpact, Integer> {
    
    @Query(value = "select pi.pollutantImpactId.organ from PollutantImpact pi where pi.pollutantImpactId.pollutant.pollutantId = ?1")
    List<CriticalOrgan> findAllOrganByPollutantPollutantId(Integer id);

}
