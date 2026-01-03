package com.metropolitan.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "news")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewsItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String summary;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private String category;

    @Column(name = "published_at")
    private LocalDateTime publishedAt;

    @Column(name = "image_url")
    private String imageUrl;

    @PrePersist
    protected void onCreate() {
        publishedAt = LocalDateTime.now();
    }
}
