import { Routes, Route } from "react-router-dom";
import Home from './pages/index';
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Darkmode from "./components/Darkmode";
import Navbar from './components/Navbar'
import './styles/App.css';
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ParallaxProvider>
      <Analytics />
      <div className="App bg-white dark:bg-black ease-in duration-200">
        <Darkmode />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ParallaxProvider>
  );
}

export default App;
