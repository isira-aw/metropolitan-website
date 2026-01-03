package com.metropolitan.backend.controller;

import com.metropolitan.backend.dto.PageResponse;
import com.metropolitan.backend.entity.CaseStudy;
import com.metropolitan.backend.repository.CaseStudyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/case-studies")
@CrossOrigin(origins = "*")
public class CaseStudyController {

    @Autowired
    private CaseStudyRepository caseStudyRepository;

    @GetMapping
    public ResponseEntity<?> getAllCaseStudies(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size) {

        if (page != null || size != null) {
            int pageNum = page != null ? page : 0;
            int pageSize = size != null ? size : 10;

            Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("createdAt").descending());
            Page<CaseStudy> caseStudyPage = caseStudyRepository.findAll(pageable);

            PageResponse<CaseStudy> response = new PageResponse<>(
                    caseStudyPage.getContent(),
                    caseStudyPage.getNumber(),
                    caseStudyPage.getSize(),
                    caseStudyPage.getTotalElements(),
                    caseStudyPage.getTotalPages(),
                    caseStudyPage.isLast()
            );

            return ResponseEntity.ok(response);
        } else {
            List<CaseStudy> caseStudies = caseStudyRepository.findAll(Sort.by("createdAt").descending());
            return ResponseEntity.ok(caseStudies);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<CaseStudy> getCaseStudyById(@PathVariable Long id) {
        return caseStudyRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
