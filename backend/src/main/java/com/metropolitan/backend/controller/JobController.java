package com.metropolitan.backend.controller;

import com.metropolitan.backend.dto.JobApplicationRequest;
import com.metropolitan.backend.dto.PageResponse;
import com.metropolitan.backend.entity.Job;
import com.metropolitan.backend.entity.JobApplication;
import com.metropolitan.backend.repository.JobApplicationRepository;
import com.metropolitan.backend.repository.JobRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @GetMapping
    public ResponseEntity<?> getAllJobs(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size) {

        if (page != null || size != null) {
            int pageNum = page != null ? page : 0;
            int pageSize = size != null ? size : 10;

            Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("postedAt").descending());
            Page<Job> jobPage = jobRepository.findAll(pageable);

            PageResponse<Job> response = new PageResponse<>(
                    jobPage.getContent(),
                    jobPage.getNumber(),
                    jobPage.getSize(),
                    jobPage.getTotalElements(),
                    jobPage.getTotalPages(),
                    jobPage.isLast()
            );

            return ResponseEntity.ok(response);
        } else {
            List<Job> jobs = jobRepository.findAll(Sort.by("postedAt").descending());
            return ResponseEntity.ok(jobs);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id) {
        return jobRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/apply")
    public ResponseEntity<JobApplication> applyForJob(
            @PathVariable Long id,
            @Valid @RequestBody JobApplicationRequest request) {

        if (!jobRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        JobApplication application = new JobApplication();
        application.setJobId(id);
        application.setFullName(request.getFullName());
        application.setEmail(request.getEmail());
        application.setPhone(request.getPhone());
        application.setResumeLink(request.getResumeLink());
        application.setCoverLetter(request.getCoverLetter());

        JobApplication savedApplication = jobApplicationRepository.save(application);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedApplication);
    }
}
