package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.CriticalOrgan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CriticalOrganRepository extends JpaRepository<CriticalOrgan, Integer> {
}
