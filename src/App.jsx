
import React from "react";
import Header from "./components/Header"
import "./app.css"
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          </Routes>
      </BrowserRouter>
         
      <footer>
        <NavBar />
      </footer>
    </>
  );
}

export default App;


      
 