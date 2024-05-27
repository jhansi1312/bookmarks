package com.example.bookmarks.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class BookMarkResp {
    private Long id;
    private String title;
    private String description;
    private String link;
}
