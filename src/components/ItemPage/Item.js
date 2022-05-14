import './Item.scss'
import { Container, Row, Col } from 'react-bootstrap/';
import ToolCard from '../ToolCard/ToolCard';
import ItemDiscription from '../ItemDiscrioption/ItemDiscription'
function Item() {
  return (

    <div className="Item">
      <Container className='mainContainer' fluid>
        <Row className='justify-content-center'>
            <Col className='itemCol d-flex flex-wrap justify-content-center' md={8} xs={12}>
                <ToolCard></ToolCard>
                <ItemDiscription></ItemDiscription>
            </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Item;
