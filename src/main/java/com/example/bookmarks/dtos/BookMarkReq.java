package com.example.bookmarks.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class BookMarkReq {
    private String title;
    private String description;
    private String link;
}
