package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.entity.PollutantImpact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PollutantImpactRepository extends JpaRepository<PollutantImpact, Integer> {

    List<PollutantImpact> findAllByPollutantPollutantId(Integer id);

    void deleteAllByPollutantPollutantId(Integer id);

    void deleteAllByOrganOrganId(Integer id);

}
