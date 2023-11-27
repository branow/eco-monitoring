package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.Emergency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmergencyRepository extends JpaRepository<Emergency, Integer> {

    @Query("select e from Emergency e where e.company.companyId = ?1 and e.year = ?2")
    List<Emergency> findAllByCompanyIdAndYear(Integer companyId, Integer year);

}
