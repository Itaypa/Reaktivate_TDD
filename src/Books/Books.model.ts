import { makeAutoObservable, runInAction } from "mobx";

export interface Book {
  id?: number;
  name: string;
  ownerId?: string;
  author: string;
}

class BooksModel {
  books: Book[] = [];
  privateBooksCount: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setBooks(books: Book[]) {
    this.books = books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  setPrivateBooksCount(count: number) {
    this.privateBooksCount = count;
  }

  getPrivateBooksCount() {
    return this.privateBooksCount;
  }
}

export default new BooksModel();
