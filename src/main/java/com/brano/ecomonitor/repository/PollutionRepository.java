package com.brano.ecomonitor.repository;

import com.brano.ecomonitor.model.Pollution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PollutionRepository extends JpaRepository<Pollution, Integer> {

    @Query("SELECT DISTINCT p.year FROM Pollution p")
    List<Integer> findAllDistinctYear();

    List<Pollution> findAllByCompanyCompanyId(Integer id);

    List<Pollution> findAllByCompanyCompanyIdAndYear(Integer id, Integer year);

    void deleteAllByCompanyCompanyId(Integer id);

    void deleteAllByPollutantPollutantId(Integer id);

}
