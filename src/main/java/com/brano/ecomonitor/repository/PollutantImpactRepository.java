package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.entity.PollutantImpact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PollutantImpactRepository extends JpaRepository<PollutantImpact, Long> {

    List<PollutantImpact> findAllByPollutantPollutantId(Long id);

    void deleteAllByPollutantPollutantId(Long id);

    void deleteAllByOrganOrganId(Long id);

}
