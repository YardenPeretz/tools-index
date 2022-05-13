
import './App.css';
<<<<<<< HEAD
import {Container,Row,Col} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
      
=======
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
>>>>>>> f945ac87e63d41b64d487b34b6232c26d96de2e5
    </div>
  );
}

export default App;
