package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    // Dependency Injection via Setter
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("BookService: Managing books via Dependency Injection.");
        bookRepository.findAllBooks();
    }
}
