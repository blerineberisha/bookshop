import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Book from "./Book";
import "./App.css";
import Footer from "./Footer";

function AllBooks() {
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

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((resolve) => {
        return resolve.json();
      })
      .then((book) => {
        setBook(book);
      })
      .catch(() => {
        console.log("unexpected error");
      });
  }, [books]);
  return (
    <div className="allbooks">
      <Container>
        <Row>
          <div className="card-group">
            {books.map((bookInfo: Book) => {
              return (
                <Col md={4}>
                  <Book
                    id={bookInfo.id}
                    image={bookInfo.image}
                    book_title={bookInfo.book_title}
                    author_firstName={bookInfo.author_firstName}
                    author_lastName={bookInfo.author_lastName}
                    book_description={bookInfo.book_description}
                    price={bookInfo.price}
                    publisher={bookInfo.publisher}
                  />
                </Col>
              );
            })}
          </div>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default AllBooks;
