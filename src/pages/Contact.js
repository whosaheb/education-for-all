import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './../components/Navigation';
import Footer from './../components/Footer';
import './../App.css';


const Contact = ()=> {
    return (
        <div>
            <Navigation />
            <Container  >
                <div className="homeLayout" >
                    This is Contact page
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Contact;