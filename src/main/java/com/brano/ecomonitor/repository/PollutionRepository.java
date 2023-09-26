package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.entity.Pollution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PollutionRepository extends JpaRepository<Pollution, Long> {

    void deleteAllByCompanyCompanyId(Long id);

    void deleteAllByPollutantPollutantId(Long id);

}
