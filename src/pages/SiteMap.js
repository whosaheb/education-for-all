import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './../App.css';

const SiteMap = ()=> {
    return (
        <div>
            <Navigation />
            <Container  >
                <div className="homeLayout" >
                    This is Site-map page
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default SiteMap;