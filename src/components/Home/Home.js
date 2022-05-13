import './Home.css';
import { Container, Row, Col } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="Home">
      <Container fluid>
        <Header></Header>
        <Row  lg={2}>
          <Col className='col1'>row 1 col number 1</Col>
          <Col>row 1 col number 2</Col>
          <Col>row 1 col number 3</Col>
          <Col>row 1 col number 4</Col>
        </Row>
        <Row  xs={2} md={8} lg={9}>
          <Col className='col2'>col number 1</Col>
          <Col>col number 2</Col>
          <Col>col number 3</Col>
          <Col>col number 4</Col>
        </Row>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default Home;