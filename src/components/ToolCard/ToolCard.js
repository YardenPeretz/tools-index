import './ToolCard.css';
import { Container, Row, Col , Card, Button} from 'react-bootstrap/';
import  { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

function ToolCard(props) {
    return (
        <div className="ToolCard">
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
                    <Link to="/" className='btn btn-primary'>Go to {props.title}</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ToolCard;