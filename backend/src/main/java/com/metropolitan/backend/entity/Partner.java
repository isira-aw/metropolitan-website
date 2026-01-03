package com.metropolitan.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "partners")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Partner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subdivision_slug")
    private String subdivisionSlug;

    @Column(nullable = false)
    private String name;

    @Column(name = "logo_url")
    private String logoUrl;
}
