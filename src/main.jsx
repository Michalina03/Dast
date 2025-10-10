import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Ofert from "./components/Ofert";
import Projects from "./components/Projects";
import Footer from './components/Footer';

import "./scss/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Ofert />} />
        <Route path="/realizacje" element={<Projects />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
