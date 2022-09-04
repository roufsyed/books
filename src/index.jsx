import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { data } from "./Book/booklist";
import Book from "./Book/Book";

// Component call function
function BookSection() {
  return (
    <section className="bookSection">
      {data.map((data) => {
        return <Book key={data.id} data={data} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookSection />, document.getElementById("root"));
