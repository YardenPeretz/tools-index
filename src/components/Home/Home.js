import './Home.css';

import { Container, Row, Col } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Row>
        <Col className='col'>col number 1</Col>
          <Col>col number 2</Col>
          <Col>col number 3</Col>
        </Row>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default Home;