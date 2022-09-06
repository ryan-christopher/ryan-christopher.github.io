import { Routes, Route } from "react-router-dom";
import Home from './pages/index';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*All our routes go here!*/}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
