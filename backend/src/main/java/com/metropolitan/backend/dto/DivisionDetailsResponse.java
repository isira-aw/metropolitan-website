package com.metropolitan.backend.dto;

import com.metropolitan.backend.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DivisionDetailsResponse {
    private Division division;
    private List<Service> services;
    private List<Testimonial> testimonials;
    private List<Project> projects;
    private List<Partner> partners;
}
