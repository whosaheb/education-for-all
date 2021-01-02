import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Navigation from './../components/Navigation';
import Footer from './../components/Footer';
import './../App.css';
import mainBackground from './../images/mainBackground.png';

const Home = ()=> {
    return (
        <div>
            <Navigation />
            <Container  >
                <div className="homeLayout" >
                    <p style={{textAlign:"center", fontFamily:"'Courier New', monospace"}}> <br/>
                    “If we are to reach real peace in the world, <br />
                    we shall have to begin with the children.”  <br />
                                                                <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                     ― Mahatma Gandhi

                    </p> <br/>
                    <img  src={mainBackground} alt="Background" style={{width: 1110}} />
                    <Card 
                        bg="info"    
                    >
                        <p>
                            Your little contribution will help many to stand on their own feet.
                        </p>
                    </Card>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Home;