
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToolCard from './components/ToolCard/ToolCard';
import Item from './components/ItemPage/Item'
import ItemDiscription from './components/ItemDiscrioption/ItemDiscription'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/ToolCard" element={<ToolCard />} />   
        <Route path="/Item" element={<Item />} />  
        <Route path="/ItemDiscription" element={<ItemDiscription />} />  
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;