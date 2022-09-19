import { Routes, Route } from "react-router-dom";
import Home from './pages/index';
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Darkmode from "./components/Darkmode";
import Navbar from './components/Navbar'
import './styles/App.css';
import React from 'react'
import { Scrollbar } from 'smooth-scrollbar-react';

function App() {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App bg-white dark:bg-black ease-in duration-200">

      {isDesktop ? (
        <div style={{ display: 'flex', maxHeight: '100vh' }}>
          <Darkmode />
          <Navbar />
          <Scrollbar
            damping={0.08}
          >
            <div>:)</div>
            <Routes>
              {/*All our routes go here!*/}
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Scrollbar>
        </div>
      ) : (<div>
        <Darkmode />
        <Navbar />
        <Routes>
          {/*All our routes go here!*/}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      )}
    </div>
  );
}

export default App;
