import './ToolCard.css';
import { Container, Row, Col , Card, Button} from 'react-bootstrap/';
import  { Routes, Route, Link } from "react-router-dom";
function ToolCard() {
    return (
        <div className="ToolCard">
            <Card className='card'>
                <Card.Img variant="top" className="card-image" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to="/" className='btn btn-primary'>Go somewhere</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ToolCard;