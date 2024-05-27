package com.example.bookmarks.mappers;

import com.example.bookmarks.dtos.BookMarkReq;
import com.example.bookmarks.dtos.BookMarkResp;
import com.example.bookmarks.entities.BookMark;

public class BookMarkMapper {


    public static BookMark markToBookMark(BookMarkReq bookMarkReq){

        return new BookMark(null,bookMarkReq.getTitle(),bookMarkReq.getDescription(),bookMarkReq.getLink());

    }

    public static BookMarkResp mapTBookMarkResp(BookMark bookMark){

        return new BookMarkResp(bookMark.getId(),bookMark.getTitle(),bookMark.getDescription(),bookMark.getLink());

    }

}
