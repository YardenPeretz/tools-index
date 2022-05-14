
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToolCard from './components/ToolCard/ToolCard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/ToolCard" element={<ToolCard />} />   
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;