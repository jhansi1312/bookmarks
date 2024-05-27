package com.example.bookmarks.services.impl;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.bookmarks.dtos.BookMarkReq;
import com.example.bookmarks.dtos.BookMarkResp;
import com.example.bookmarks.entities.BookMark;
import com.example.bookmarks.mappers.BookMarkMapper;
import com.example.bookmarks.repositories.BookMarkRepository;
import com.example.bookmarks.services.BookMarkServices;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Component
public class BookMarkServicesimpl implements BookMarkServices{

        BookMarkRepository bookMarkRepo; 

    @Override
    public List<BookMarkResp> getAllBookMarks() {
        // TODO Auto-generated method stub
        return bookMarkRepo.findAll()
                    .stream()
                    .map(
                            bookMark -> BookMarkMapper.mapTBookMarkResp(bookMark)
                        ) 
                    .toList(); 
    }

    @Override
    public BookMarkResp getBookMarkByTitle(String title) {
        // TODO Auto-generated method stub
        Long id = bookMarkRepo.findByTitle(title).getId();
        BookMark bookMark=bookMarkRepo.findById(id).get();
        return BookMarkMapper.mapTBookMarkResp(bookMark);
    }

    @Override
    public BookMarkResp addBookMark(BookMarkReq bookMarkReq) {
        // TODO Auto-generated method stub
        BookMark bookMark = BookMarkMapper.markToBookMark(bookMarkReq);
        BookMark bookMark2 = bookMarkRepo.save(bookMark);
        return BookMarkMapper.mapTBookMarkResp(bookMark2);
    }

    @Override
    public BookMarkResp updateBookMarkByTitle(String title, BookMarkReq bookMarkReq) {
        // TODO Auto-generated method stub
        Long id = bookMarkRepo.findByTitle(title).getId();
        BookMark bookMark= bookMarkRepo.findById(id).get();
        bookMark.setTitle(bookMarkReq.getTitle());
        bookMark.setDescription(bookMarkReq.getDescription());
        bookMark.setLink(bookMarkReq.getLink());
        BookMark bookMark2 = bookMarkRepo.save(bookMark);
        return BookMarkMapper.mapTBookMarkResp(bookMark2);
    }

    @Override
    public void deleteBookMarkByTitle(String title) {
        bookMarkRepo.deleteBookmarkByTitle(title);
        // System.out.println(bookMarks.size());
    }
    
}
