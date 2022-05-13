
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import ToolCard from './components/ToolCard/ToolCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToolCard" elemet={<ToolCard />} />
      </Routes>
    </div>
  );
}

export default App;