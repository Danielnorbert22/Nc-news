
import React from "react";
import Header from "./components/Header"
import "./app.css"
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users"
import ArticlesPage from "./components/articlesPage";
import Article from "./components/Article"




function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/search-articles" element={<Article />} />
          </Routes>
      </BrowserRouter>
         
      <footer>
        <NavBar />
      </footer>
    </>
  );
}

export default App;


      
 