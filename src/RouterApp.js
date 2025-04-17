import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";

function RoutesApp() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </div>
  );
}

export default RoutesApp;