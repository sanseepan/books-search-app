import React from "react";

const Book = props => {
  const book = props.book;
  return (
    <div>
      <ul>
        <li>
          {book.volumeInfo.title.substring(0, 20)} |{" "}
          {book.volumeInfo.publishedDate}
        </li>
      </ul>
    </div>
  );
};

export default Book;
