
import React from "react";
import Header from "./components/Header"
import "./app.css"
import SearchBar from "./components/Searchbar";
import Content from "./components/Content";
import { BrowserRouter, Routes } from "react-router-dom";






function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          </Routes>
      </BrowserRouter>
          <Content />
      <footer>
        <SearchBar />
      </footer>
    </>
  );
}

export default App;


      
 