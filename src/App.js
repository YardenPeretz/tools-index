
import './App.css';
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
      
    </div>
  );
}

export default App;
