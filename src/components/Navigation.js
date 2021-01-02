import React from 'react';
import {Button, Form, Nav, Navbar } from 'react-bootstrap';


const Navigation = ()=> {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Education for all</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
                <Nav.Link href="#community"> Community </Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
                <Nav.Link href="#contributors">Contributors</Nav.Link>
                <Nav.Link href="#road-map">Site-Map</Nav.Link>
                <Nav.Link href="#contact">Contact Site-developers</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="secondary" >YourProfile</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;