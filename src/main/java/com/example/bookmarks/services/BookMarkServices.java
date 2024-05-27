package com.example.bookmarks.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bookmarks.dtos.BookMarkReq;
import com.example.bookmarks.dtos.BookMarkResp;

@Service
public interface BookMarkServices {

    public List<BookMarkResp> getAllBookMarks();
   
    public BookMarkResp getBookMarkByTitle(String title); 

    public BookMarkResp addBookMark(BookMarkReq bookMarkReq);

    public BookMarkResp updateBookMarkByTitle(String title, BookMarkReq bookMarkReq);

    public void deleteBookMarkByTitle(String title);
}
