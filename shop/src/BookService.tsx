import axios from "axios";

export class BookService{
    
    private client = axios.create({baseURL: 'http://localhost:3001/books'});
    getAllBooks(){
        return this.client.get("")
    };

    getBookByID(id: number){
        return this.client.get("" + id)
    };
}


