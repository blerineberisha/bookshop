import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Book, { BookType } from "./Book";
import "./App.css";
import { SearchContext } from "./SearchContext";
import { BookService } from "./BookService";

export default function AllBooks() {
  type Book = {
    id: number;
    image: string;
    book_title: string;
    author_firstName: string;
    author_lastName: string;
    book_description: string;
    price: string;
    publisher: string;
  };
  const [books, setBook] = useState<Book[]>([]);
  const { search } = useContext(SearchContext);


  useEffect(() => {
    const bookService = new BookService();
    bookService.getAllBooks().then((res) => {
      setBook(res.data);
    })
  }, [books]);

  return (
    <div className="allbooks">
      <Container>
        <Row>
          <div className="card-group">
            {books
              .filter((book) => {
                return (
                  book.book_title.toLowerCase().includes(search) ||
                  !search ||
                  book.price.toLowerCase().includes(search)
                );
              })
              .map((book: BookType) => {
                return (
                  <Col md={4}>
                    <Book
                      id={book.id}
                      image={book.image}
                      book_title={book.book_title}
                      book_description={book.book_description}
                      price={book.price}
                      author_firstName={book.author_firstName}
                      author_lastName={book.author_lastName}
                      publisher={book.publisher}
                    />
                  </Col>
                );
              })}
          </div>
        </Row>
      </Container>
    </div>
  );
}
