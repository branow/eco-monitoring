package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.entity.Pollution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PollutionRepository extends JpaRepository<Pollution, Long> {

    List<Pollution> findAllByCompanyCompanyId(Long id);

    List<Pollution> findAllByCompanyCompanyIdAndYear(Long id, Integer year);

    void deleteAllByCompanyCompanyId(Long id);

    void deleteAllByPollutantPollutantId(Long id);

}
