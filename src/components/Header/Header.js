import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

const Header = () => {
    
    const history = useHistory();

    const handleHomePage = () => {
        history.push('/home');
    }

    const activeStyle = {
        fontWeight: "bold",
        color: "#D32F2F",
        borderBottom: "solid 2px #D32F2F"
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={handleHomePage} style={{cursor: 'pointer'}}>
                    <img
                        alt=""
                        src="https://www.pngitem.com/pimgs/m/292-2923379_undergraduate-education-logo-for-education-png-transparent-png.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="fw-bold" style={{ color: 'goldenrod'}}>SK Academy</span>
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