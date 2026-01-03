package com.metropolitan.backend.controller;

import com.metropolitan.backend.dto.DivisionDetailsResponse;
import com.metropolitan.backend.dto.PageResponse;
import com.metropolitan.backend.entity.*;
import com.metropolitan.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/divisions")
@CrossOrigin(origins = "*")
public class DivisionController {

    @Autowired
    private DivisionRepository divisionRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private TestimonialRepository testimonialRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private PartnerRepository partnerRepository;

    @GetMapping
    public ResponseEntity<?> getAllDivisions(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size) {

        if (page != null || size != null) {
            int pageNum = page != null ? page : 0;
            int pageSize = size != null ? size : 10;

            Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("name").ascending());
            Page<Division> divisionPage = divisionRepository.findAll(pageable);

            PageResponse<Division> response = new PageResponse<>(
                    divisionPage.getContent(),
                    divisionPage.getNumber(),
                    divisionPage.getSize(),
                    divisionPage.getTotalElements(),
                    divisionPage.getTotalPages(),
                    divisionPage.isLast()
            );

            return ResponseEntity.ok(response);
        } else {
            List<Division> divisions = divisionRepository.findAll(Sort.by("name").ascending());
            return ResponseEntity.ok(divisions);
        }
    }

    @GetMapping("/{slug}")
    public ResponseEntity<DivisionDetailsResponse> getDivisionBySlug(@PathVariable String slug) {
        return divisionRepository.findBySlug(slug)
                .map(division -> {
                    List<Service> services = serviceRepository.findByDivisionId(division.getId());
                    List<Testimonial> testimonials = testimonialRepository.findByDivisionId(division.getId());
                    List<Project> projects = projectRepository.findByDivisionId(division.getId());
                    List<Partner> partners = partnerRepository.findByDivisionId(division.getId());

                    DivisionDetailsResponse response = new DivisionDetailsResponse(
                            division, services, testimonials, projects, partners
                    );
                    return ResponseEntity.ok(response);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
