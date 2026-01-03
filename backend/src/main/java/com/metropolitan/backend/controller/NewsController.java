package com.metropolitan.backend.controller;

import com.metropolitan.backend.dto.PageResponse;
import com.metropolitan.backend.entity.NewsItem;
import com.metropolitan.backend.repository.NewsItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "*")
public class NewsController {

    @Autowired
    private NewsItemRepository newsItemRepository;

    @GetMapping
    public ResponseEntity<?> getAllNews(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size) {

        if (page != null || size != null) {
            int pageNum = page != null ? page : 0;
            int pageSize = size != null ? size : 10;

            Pageable pageable = PageRequest.of(pageNum, pageSize, Sort.by("publishedAt").descending());
            Page<NewsItem> newsPage = newsItemRepository.findAll(pageable);

            PageResponse<NewsItem> response = new PageResponse<>(
                    newsPage.getContent(),
                    newsPage.getNumber(),
                    newsPage.getSize(),
                    newsPage.getTotalElements(),
                    newsPage.getTotalPages(),
                    newsPage.isLast()
            );

            return ResponseEntity.ok(response);
        } else {
            List<NewsItem> news = newsItemRepository.findAll(Sort.by("publishedAt").descending());
            return ResponseEntity.ok(news);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<NewsItem> getNewsById(@PathVariable Long id) {
        return newsItemRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
