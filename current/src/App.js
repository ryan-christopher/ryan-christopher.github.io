import { Routes, Route } from "react-router-dom";
import Home from './pages/index';
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Darkmode from "./components/Darkmode";
import './styles/App.css';
import React from 'react'


function App() {
  return (
    <div className="App bg-white dark:bg-black ease-in duration-200">
      <Darkmode />
      <Routes>
        {/*All our routes go here!*/}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
