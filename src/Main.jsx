import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

const Main = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Main;
