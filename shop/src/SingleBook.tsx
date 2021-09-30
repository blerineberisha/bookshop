import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BookType } from "./Book";
import { useParams } from "react-router-dom";
import "./App.css";
import { BookService } from "./BookService";

export const SingleBook = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType>({} as BookType);

  useEffect(() => {
    const bookService = new BookService();
    bookService.getBookByID(id).then((res) => {
      setBook(res.data);
    })
  }, [id]);

  return (
    <div className="singlebook">
      <Card className="single">
        <div className="card">
          <img
            src={book.image}
            alt="book"
            className="img"
          />
          <div className="card-body">
            <h5 className="card-title">{book.book_title} by {book.author}</h5>
            <p>
              <b>Price: {book.price}</b>
            </p>
            <div className="card-body-2">
              <p className="card-text">Description: {book.book_description}</p>
              <p className="card-text">Publisher: {book.publisher}</p>
            </div>
          </div>
          <a href={"http://localhost:3000/all"} className="button">
            <Button>Go back</Button>
          </a>
        </div>
      </Card>
    </div>
  );
};
