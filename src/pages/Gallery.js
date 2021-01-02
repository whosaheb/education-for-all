import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Navigation from './../components/Navigation';
import Footer from './../components/Footer';
import photo from './../images/mainBackground.png'
import './../App.css';

const Gallery = ()=> {
    return (
        <div>
            <Navigation />
            <Container  >
                <div className="homeLayout" >
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>Photo</Card.Header>
                    <Card.Body>
                    <Card.Title><img src={photo} style={{width:248}} alt="loading..." /></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Gallery;