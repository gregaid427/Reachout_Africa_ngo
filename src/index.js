import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

// import AllHome from "./pages/AllHome";

import Error from "./pages/error";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
   <Navbar />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
  
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebSkills(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-Skills

