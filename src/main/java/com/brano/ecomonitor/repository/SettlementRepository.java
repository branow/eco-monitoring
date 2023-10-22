package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.Settlement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementRepository extends JpaRepository<Settlement, Integer> {
}
