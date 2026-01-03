package com.metropolitan.backend.controller;

import com.metropolitan.backend.dto.SubdivisionDetailsResponse;
import com.metropolitan.backend.repository.PartnerRepository;
import com.metropolitan.backend.repository.ProjectRepository;
import com.metropolitan.backend.repository.ServiceRepository;
import com.metropolitan.backend.repository.TestimonialRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subdivisions")
@CrossOrigin(origins = "*")
public class SubdivisionController {

    private final ServiceRepository serviceRepository;
    private final TestimonialRepository testimonialRepository;
    private final ProjectRepository projectRepository;
    private final PartnerRepository partnerRepository;

    public SubdivisionController(ServiceRepository serviceRepository,
                                 TestimonialRepository testimonialRepository,
                                 ProjectRepository projectRepository,
                                 PartnerRepository partnerRepository) {
        this.serviceRepository = serviceRepository;
        this.testimonialRepository = testimonialRepository;
        this.projectRepository = projectRepository;
        this.partnerRepository = partnerRepository;
    }

    @GetMapping("/{slug}")
    public ResponseEntity<SubdivisionDetailsResponse> getSubdivisionBySlug(@PathVariable String slug) {
        SubdivisionDetailsResponse response = new SubdivisionDetailsResponse();

        response.setServices(serviceRepository.findBySubdivisionSlug(slug));
        response.setTestimonials(testimonialRepository.findBySubdivisionSlug(slug));
        response.setProjects(projectRepository.findBySubdivisionSlug(slug));
        response.setPartners(partnerRepository.findBySubdivisionSlug(slug));

        return ResponseEntity.ok(response);
    }
}
