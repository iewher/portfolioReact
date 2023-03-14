import React, { Component } from "react";
import { Button, Form, FormControl, Nav, Navbar, Container } from 'react-bootstrap';
import { Route, Routes, Link } from "react-router";
import logo from './logo192.png';
import { BrowserRouter as Router } from "react-router-dom";

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand='md' bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Georgy Solodovnikov
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/about"> Обо мне </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                </Router>
            </>
        );
    }
}