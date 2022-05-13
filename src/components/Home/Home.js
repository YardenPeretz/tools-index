import './Home.css';

import {Container,Row,Col} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="App">
        <Header></Header>
        <Footer></Footer>
    </div>
  );
}

export default Home;