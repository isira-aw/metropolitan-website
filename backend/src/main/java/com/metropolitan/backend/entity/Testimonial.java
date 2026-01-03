package com.metropolitan.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "testimonials")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Testimonial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subdivision_slug")
    private String subdivisionSlug;

    @Column(name = "client_name", nullable = false)
    private String clientName;

    private String company;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    private Integer rating = 5;
}
