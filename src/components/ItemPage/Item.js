import './Item.css'
import { Container, Row, Col } from 'react-bootstrap/';
import ToolCard from '../ToolCard/ToolCard';
import ItemDiscription from '../ItemDiscrioption/ItemDiscription'
function Item() {
  return (

    <div className="Item">
      <Container className='mainContainer' fluid>
        <Row>
            <Col className='itemCol' md={1}>
                
            </Col>
            <Col className='itemCol' md={10}>
                <ToolCard></ToolCard>
                <ItemDiscription></ItemDiscription>
            </Col>
            <Col className='itemCol' md={1}>
                
            </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Item;
