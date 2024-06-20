import React from "react";
import { observer } from "mobx-react";
import BooksController from "../Books/Books.ctrl";
import "./Header.scss";

const Header: React.FC = observer(() => {
  return (
    <header className="app-header">
      <h1>Your books: {BooksController.model.getPrivateBooksCount()}</h1>
    </header>
  );
});

export default Header;
