package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.CriticalOrgan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CriticalOrganRepository extends JpaRepository<CriticalOrgan, Integer> {

    @Query("select o from CriticalOrgan o join PollutantImpact pi on pi.pollutantImpactId.organ.organId = o.organId where pi.pollutantImpactId.pollutant = ?1")
    List<CriticalOrgan> findAllByPollutantId(Integer id);

}
