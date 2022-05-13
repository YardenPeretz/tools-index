
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
