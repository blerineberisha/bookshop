import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export type BookType = {
  id: number;
  image: string;
  book_title: string;
  author_firstName: string;
  author_lastName: string;
  book_description: string;
  price: string;
  publisher: string;
};

export const Book = ({
  id,
  image,
  book_title,
  author_firstName,
  author_lastName,
  book_description,
  price,
  publisher,
}: BookType) => {
  if (!id) return <div />;
  return (
    <div className="card-style">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={image} className="card-img" />
        <Card.Body className="card-body">
          <Card.Title>
            {book_title} by {author_firstName} {author_lastName}
          </Card.Title>
          <Card.Text>{book_description}</Card.Text>
        </Card.Body>
        <Card.Body className="moreInfo">
          <p>
            <b>Price: {price}</b>
          </p>
          <h6>Publisher: {publisher}</h6>
        </Card.Body>
        <a href={"http://localhost:3000/book/" + id} className="button">
          <Button>View</Button>
        </a>
      </Card>
    </div>
  );
};

export default Book;
