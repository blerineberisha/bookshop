import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Book, BookType } from "./Book";
import "./App.css";
import { SearchContext } from "./SearchContext";
import { BookService } from "./BookService";

export default function AllBooks() {

  const [books, setBook] = useState<BookType[]>([]);
  const { search } = useContext(SearchContext);

  useEffect(()=>{
    const bookService = new BookService();
    bookService.getAllBooks().then((res)=>{
      setBook(res.data);
    })
  })

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
                  <Col md={3}>
                    <Book
                      id={book.id}
                      image={book.image}
                      book_title={book.book_title}
                      book_description={book.book_description}
                      price={book.price}
                      author={book.author}
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
