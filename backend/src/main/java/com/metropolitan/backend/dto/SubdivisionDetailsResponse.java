package com.metropolitan.backend.dto;

import com.metropolitan.backend.entity.Partner;
import com.metropolitan.backend.entity.Project;
import com.metropolitan.backend.entity.Service;
import com.metropolitan.backend.entity.Testimonial;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SubdivisionDetailsResponse {
    private List<Service> services;
    private List<Testimonial> testimonials;
    private List<Project> projects;
    private List<Partner> partners;
}
