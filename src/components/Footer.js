import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';


const Footer = ()=> {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
                <Nav.Link href="/community"> Community </Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/contributors">Contributors</Nav.Link>
                <Nav.Link href="/site-road-map">Site-Map</Nav.Link>
                <Nav.Link href="/contact">Contact Site-developers</Nav.Link>
                <Nav.Link href="/reference">References</Nav.Link>
            </Nav>
            <Form>
                <label style={{color:"white"}}>social Links</label>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer;