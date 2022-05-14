import './ItemDiscription.css'
import { Container, Card, Row, Col } from 'react-bootstrap/';


function Item() {
    return (

        <div className="Item">
            <Container className='mainContainer' fluid>
                <>

                    <Card
                        bg='info'
                        key='Info'
                        text='white'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>White Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </>
            </Container>

        </div>
    );
}

export default Item;
