import axios from "axios";
import { BookType } from "./Book";

export class BookService {
  private client = axios.create({ baseURL: "http://localhost:3001" });

  getAllBooks() {
    return this.client.get("/books");
  }

  getBookByID(id: string) {
    return this.client.get("/books" + id);
  }

  addBook = (data: BookType) => {
    return this.client.post("/books", data);
  };
}
