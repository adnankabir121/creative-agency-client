import React from 'react';
import './Menu.css'
import logo from '../../../images/logos/logo.png'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <Navbar variant="light" expand="lg">
            <div className="container py-3">
                <img src={logo} alt="" className="logo-img" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Our Portfolio</Nav.Link>
                        <Nav.Link href="#link">Our Team</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                    </Nav>
                    <Link to="/dashboard/serviceList">
                        <button className="btn-brand ml-4">Admin Login</button>
                    </Link>
                    <Link to="/dashboard/customer-order">
                        <button className="btn-brand ml-4">Customer Login</button>
                    </Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Menu;