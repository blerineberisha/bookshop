import React from "react";
import { BookType } from "./Book";
import "./Form.css";
import NewBook from "./NewBook";

export default function AddBook(values: BookType) {
  return (
    <div className="body">
      <NewBook />
    </div>
  );
}
