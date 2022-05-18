import './ToolCard.css';
import { Container, Row, Col , Card, Button} from 'react-bootstrap/';
import  { Routes, Route, Link } from "react-router-dom";
import { useState ,useEffect} from 'react';

function ToolCard(props) {
    const [image, setImage] = useState('');
    console.log(props)
    
    
        
    
    return (
        <div className="ToolCard p-4">
            <Card className='card'>
                <Card.Img variant="top" className="card-image" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
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
                    <Link to={"/" + props.link} className='btn btn-primary' image={props.image} onClick={()=> setImage(props.image)}>Go to {props.title}</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ToolCard;