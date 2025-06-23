import Header from "./components/header";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./app.css"
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

function Home() {
  return <h2>Home Page</h2>;
}

function Popular() {
  return <h2>Popular Page</h2>;
}

function Trending() {
  return <h2>Trending Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}


function App() {
  return (
    <Router>
      <Header />
        <nav>
        <Link to="/">Home</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Articles">Articles</Link>
      </nav>
      <div className="container">
        <div className="main">
      
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
          <SearchBar/>
        <Content ></Content>
          
       
        </div>
      </div>
      <footer>
        <p>&copy; 2025 MyReddit. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;


      
 