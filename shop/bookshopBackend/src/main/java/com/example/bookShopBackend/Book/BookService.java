package com.example.bookShopBackend.Book;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class BookService {
    private BookRepository bookRepository;
    private AtomicInteger ai = new AtomicInteger(10000);

    public void deleteById(Integer id){
        this.bookRepository.deleteById(id);
    }

    public Book getBook(int id){
        return this.bookRepository.getById(id);
    }

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public Book updateBook(Book book, Integer id){
        book.setId(book.getId());
        book.setImage(book.getImage());
        book.setBook_title(book.getBook_title());
        book.setAuthor(book.getAuthor());
        book.setBook_description(book.getBook_description());
        book.setPrice(book.getPrice());
        book.setPublisher(book.getPublisher());
        final Book updatedBook = bookRepository.save(book);
        return updatedBook;
    }
}
