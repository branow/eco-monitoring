package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.Pollutant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PollutantRepository extends JpaRepository<Pollutant, Integer> {
}
