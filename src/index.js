import React from "react";
import "./styles.css";
import Books from "./Books/Books";
import Header from "./Header/Header";
import { createRoot } from "react-dom/client";
function App() {
  return (
    <div>
      <Header />
      <Books />
    </div>
  );
}

const ObservedApp = App;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ObservedApp />);
