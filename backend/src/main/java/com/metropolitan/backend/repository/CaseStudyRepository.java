package com.metropolitan.backend.repository;

import com.metropolitan.backend.entity.CaseStudy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CaseStudyRepository extends JpaRepository<CaseStudy, Long> {
    Page<CaseStudy> findByDivisionId(Long divisionId, Pageable pageable);
    List<CaseStudy> findByDivisionId(Long divisionId);
}
