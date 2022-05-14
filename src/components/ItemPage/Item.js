import './Item.css'
import { Container, Row, Col } from 'react-bootstrap/';
import ToolCard from '../ToolCard/ToolCard';

function Item() {
  return (

    <div className="Item">
      <Container className='mainContainer' fluid>
        <Row>
            <Col className='itemCol' md={2}>
                
            </Col>
            <Col className='itemCol' md={8}>
                <ToolCard></ToolCard>
            </Col>
            <Col className='itemCol' md={2}>
                
            </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Item;
