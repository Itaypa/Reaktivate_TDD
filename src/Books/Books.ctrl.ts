import BooksModel, { Book } from "./Books.model";
import { runInAction } from "mobx";
import ApiGateway from "../Shared/ApiGateway";

class BooksController {
  model: typeof BooksModel;
  apiGateway: any; //todo create type for it
  constructor(model: typeof BooksModel) {
    this.model = model;
    this.apiGateway = new ApiGateway();
  }

  fetchBooks = async (type: string) => {
    try {
      const response = await this.apiGateway.get(type);
      runInAction(() => {
        //learn about runInAction
        this.model.setBooks(response);
        if (type === "private") {
          this.model.setPrivateBooksCount(response.length);
        }
      });
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };

  addBook = async (type: string, book: Book) => {
    try {
      const response = await this.apiGateway.post(type, book);
      runInAction(async () => {
        this.model.addBook(book);
        await this.fetchBooks(type);
      });
    } catch (error) {
      console.error("Failed to add book", book, error);
    }
  };
}

export default new BooksController(BooksModel);
