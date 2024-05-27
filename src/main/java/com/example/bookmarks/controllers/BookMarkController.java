package com.example.bookmarks.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookmarks.dtos.BookMarkReq;
import com.example.bookmarks.dtos.BookMarkResp;
import com.example.bookmarks.entities.BookMark;
import com.example.bookmarks.services.BookMarkServices;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("/api/bookmarks")
@RestController
public class BookMarkController {
    BookMarkServices bookMarkServices;

    @PostMapping("/")
    public  BookMarkResp addBookMark(@RequestBody BookMarkReq bookMarkReq){

        return bookMarkServices.addBookMark(bookMarkReq);

    }

    @GetMapping("/")
    public List<BookMarkResp> getAllBookMarks(){

        return bookMarkServices.getAllBookMarks();

    }

    @GetMapping("/{title}")
    public BookMarkResp getBookMarkByTitle(@PathVariable("title") String title){

        return bookMarkServices.getBookMarkByTitle(title);

    }

    @PatchMapping("/{title}")
    public BookMarkResp updateBookMarkByTitle(@PathVariable("title") String title, @RequestBody BookMarkReq bookMarkReq){

        return bookMarkServices.updateBookMarkByTitle(title,bookMarkReq); 

    }

    @DeleteMapping("/{title}")
    public void deleteBookMarkByTitle(@PathVariable("title") String title){
        System.out.println("controller " +title);
        bookMarkServices.deleteBookMarkByTitle(title);

    }
}
