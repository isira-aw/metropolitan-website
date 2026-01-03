package com.metropolitan.backend.controller;

import com.metropolitan.backend.dto.InquiryRequest;
import com.metropolitan.backend.entity.Inquiry;
import com.metropolitan.backend.repository.InquiryRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inquiries")
@CrossOrigin(origins = "*")
public class InquiryController {

    @Autowired
    private InquiryRepository inquiryRepository;

    @PostMapping
    public ResponseEntity<Inquiry> createInquiry(@Valid @RequestBody InquiryRequest request) {
        Inquiry inquiry = new Inquiry();
        inquiry.setName(request.getName());
        inquiry.setEmail(request.getEmail());
        inquiry.setSubject(request.getSubject());
        inquiry.setMessage(request.getMessage());

        Inquiry savedInquiry = inquiryRepository.save(inquiry);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedInquiry);
    }
}
