import './Home.css';
import { Container, Row, Col } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ToolCard from '../ToolCard/ToolCard'
import { useState } from 'react';
// images improts 
import formatter from'../../assets/images/encryption_formatter.png';
import Item from '../ItemPage/Item'


function Home() {

  return (
    <div className="Home">
      <Container fluid>
        <Row>
          <Col lg={3} xs={12}>
            <ToolCard title="test" link="Item" image={formatter}></ToolCard>
          </Col>
          <Col lg={3} xs={12}>
            <ToolCard title="test2" link="Item"></ToolCard>
          </Col>
          <Col lg={3} xs={12}>
            <ToolCard title="second title" link="Item"></ToolCard>
            </Col>
          <Col lg={3} xs={12}>
            <ToolCard title="third title" link="Item"></ToolCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;