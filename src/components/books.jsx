import React, { useState, useEffect } from "react";
import "../App.css";
import { API_URL } from "../API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="book_page">
      <div className="booklist">
        {books.map((book) => (
          <div
            key={book.id}
            className="book_tile"
            onClick={() => navigate(`/books/${book.id}`)}
          >
            <div className="Title">{book.title}</div>
            <div>
              {book.authors.map((author) => (
                <div className="Author">{author}</div>
              ))}
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
