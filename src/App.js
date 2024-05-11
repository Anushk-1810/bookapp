import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Books from "./components/books";
import Id from "./components/id";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Id />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
