import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { People, Person } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#157347",
        borderBottom: "solid 2px #157347"
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.pngitem.com/pimgs/m/292-2923379_undergraduate-education-logo-for-education-png-transparent-png.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    SK Academy
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/courses">Courses</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/login">Login <Person /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;