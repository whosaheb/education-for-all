import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from './../components/Navigation';
import Footer from './../components/Footer';
import './../App.css';
import mainBackground from './../images/mainBackground.jpg';

const Home = ()=> {
    return (
        <div>
            <Navigation />
            <Container  >
                <Row>
                    <Col style={{textAlign:"center", fontWeight:"bold", fontSize:24, color:"red" }}>
                        <br />
                        Your little contribution will help many<br /> to stand on their own feet.
                    </Col>
                    <Col style={{backgroundColor:"lightgray"}}>
                        <p style={{textAlign:"center", fontFamily:"'Courier New', monospace"}}> <br/>
                        “All of us do not have equal talent,  <br />
                        but all of us should have equal opportunity.”  <br />
                                                                    <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        ― John F. Kennedy
                        </p>
                    </Col>
                </Row>
                <Row>
                    <img  src={mainBackground} alt="Background" style={{ width:'100%', maxHeight:450}} />
                </Row>
            </Container>
            <br />
            <br />  
            <Footer />
        </div>
    );
}

export default Home;