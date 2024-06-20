import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import BooksController from "./Books.ctrl";

const Books: React.FC = observer(() => {
  const [type, setType] = useState("private");
  useEffect(() => {
    BooksController.fetchBooks(type);
  }, [type]);

  return (
    <div>
      <h3>Books</h3>
      <div>
        <button onClick={() => setType("")}>All Books</button>
        <button onClick={() => setType("private")}> Private Books</button>
        <ul>
          {BooksController.model.books.map((book) => (
            <li key={book.id ?? book.author + book.name}>
              {book.author}: {book.name}
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            BooksController.addBook(type, {
              name: "New Book",
              author: "itay Y. Pahima",
              id: Math.round(Math.random() * 100),
            })
          }
        >
          Add Book
        </button>
      </div>
    </div>
  );
});

export default Books;
