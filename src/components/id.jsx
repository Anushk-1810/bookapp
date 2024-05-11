import React, { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../API";
const Id = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="Book_detail">
      <div>
        <h4>Title</h4>
        <div className="Title">{book?.title}</div>
        <h4>Authors</h4>
        <div className="Author">{book?.authors}</div>
        <h4>Number of pages</h4>
        <div>{book?.pageCount}</div>
        <h4>ISBN number</h4>
        <div>{book?.isbn}</div>
      </div>
    </div>
  );
};

export default Id;
