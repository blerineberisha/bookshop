import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BookType } from "./Book";
import { useParams } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

export const SingleBook = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType>({} as BookType);

  useEffect(() => {
    fetch("http://localhost:3001/books/" + id)
      .then((resolve) => {
        return resolve.json();
      })
      .then((res) => {
        setBook(res);
      })
      .catch(() => {
        console.log("unexpected error");
      });
  }, [id]);

  return (
    <div className="singlebook">
      <Card className="single">
        <div className="card">
          <img
            src={book.image}
            alt="book"
            className="img"
            style={{ width: "100px;" }}
          />
          <div className="card-body">
            <h5 className="card-title">{book.book_title}</h5>
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
