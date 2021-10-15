package com.example.bookShopBackend.Book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository  extends JpaRepository<Book, Integer> {
    @Query(value = "SELECT * FROM product ORDER BY price DESC LIMIT 1;", nativeQuery = true)
    Book mostExpensiveProduct();
}
