import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Error from "./pages/error/error";
import Logement from './pages/logement/logement';

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}
export default AppRouter;