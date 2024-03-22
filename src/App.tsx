import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
