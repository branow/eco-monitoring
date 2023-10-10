package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.entity.Pollution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PollutionRepository extends JpaRepository<Pollution, Long> {

    @Query("SELECT DISTINCT p.year FROM Pollution p")
    List<Long> findAllDistinctYear();

    List<Pollution> findAllByCompanyCompanyId(Long id);

    List<Pollution> findAllByCompanyCompanyIdAndYear(Long id, Integer year);

    void deleteAllByCompanyCompanyId(Long id);

    void deleteAllByPollutantPollutantId(Long id);

}
