
import './App.css';

import {Container,Row,Col} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <Header></Header>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Footer></Footer>
      </Container>
      

    </div>
  );
}

export default App;
