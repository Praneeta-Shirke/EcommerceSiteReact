import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Blog from "./pages/Blogs/index";
import Contact from "./pages/Contact/index";
import NotFound from "./pages/NotFound/index";

function RoutesApp() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/Blogs" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default RoutesApp;