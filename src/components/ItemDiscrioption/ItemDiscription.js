import './ItemDiscription.css'
import { Container, Card, Row, Col } from 'react-bootstrap/';


function Item() {
    return (

        <div className="Item w-100">
            <Container className='mainContainer p-0 pt-4' fluid>
                <>

                    <Row>
                        <Col className='itemCol' md={2}>
                            <Card border="secondary"
                                key='Info'
                                style={{ color: "grey" }}
                                className='discription'>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>details </Card.Title>
                                    <Card.Text className='discription'>
                                        Some quick example text
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='itemCol' md={10}>
                            <Card

                                border="secondary"

                                key='Info'
                                style={{ color: "grey" }}
                                className='discription'
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>White Card Title </Card.Title>
                                    <Card.Text >
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>

                </>
            </Container>

        </div>
    );
}

export default Item;
