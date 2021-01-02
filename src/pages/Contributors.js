import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './../components/Navigation';
import Footer from './../components/Footer';
import './../App.css';

const Contributors = ()=> {
    return (
        <div>
            <Navigation />
            <Container  >
                <div className="homeLayout" >
                    This is Contributors page
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Contributors;