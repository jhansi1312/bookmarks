package com.example.bookmarks.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.bookmarks.entities.BookMark;

import jakarta.transaction.Transactional;



@Repository
public interface BookMarkRepository extends JpaRepository<BookMark,Long>{
    public BookMark findByTitle(String s);

    @Modifying
    @Transactional
    @Query(value = "delete from bookmarks b1 where b1.title = ?1", nativeQuery = true)
    public void deleteBookmarkByTitle(String s);
}
