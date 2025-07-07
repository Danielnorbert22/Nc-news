
import React from "react";

import "./app.css"
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users"
import ArticlesPage from "./components/articlesPage";
import Article from "./components/Article"
import 'bootstrap/dist/css/bootstrap.css'




function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/search-articles" element={<Article />} />
          </Routes>
      </BrowserRouter>
         
    
        
      
    </>
  );
}

export default App;


      
 