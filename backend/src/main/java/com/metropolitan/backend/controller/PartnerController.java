package com.metropolitan.backend.controller;

import com.metropolitan.backend.dto.PageResponse;
import com.metropolitan.backend.entity.Partner;
import com.metropolitan.backend.repository.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/partners")
@CrossOrigin(origins = "*")
public class PartnerController {

    @Autowired
    private PartnerRepository partnerRepository;

    @GetMapping
    public ResponseEntity<?> getAllPartners(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size) {

        if (page != null || size != null) {
            int pageNum = page != null ? page : 0;
            int pageSize = size != null ? size : 10;

            Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("name").ascending());
            Page<Partner> partnerPage = partnerRepository.findAll(pageable);

            PageResponse<Partner> response = new PageResponse<>(
                    partnerPage.getContent(),
                    partnerPage.getNumber(),
                    partnerPage.getSize(),
                    partnerPage.getTotalElements(),
                    partnerPage.getTotalPages(),
                    partnerPage.isLast()
            );

            return ResponseEntity.ok(response);
        } else {
            List<Partner> partners = partnerRepository.findAll(Sort.by("name").ascending());
            return ResponseEntity.ok(partners);
        }
    }
}
