import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Facebook, Twitter, Whatsapp } from 'react-bootstrap-icons';

const About = () => {
    return (
        <Container className="mt-5">
            <Row className="g-4">
                <Col lg="4">
                    <img className="img-fluid rounded" style={{ height: 200, float: 'right' }} src="https://avatars.githubusercontent.com/u/47079665?v=4" alt="" />
                </Col>
                <Col lg="8" className="pe-5">
                    <h4 style={{color: 'goldenrod'}}>SK Academy</h4>
                    <h1 className="mt-3" style={{ color: "#D32F2F" }}>About Us</h1>
                    <p className="text-secondary" style={{maxWidth: "80vh", textAlign: 'justify'}}>In academic terms, a text is anything that conveys a set of meanings to the person who examines it. You might have thought that texts were limited to written materials, 
                        such as books, magazines, newspapers, and ‘zines 
                        (an informal term for magazine that refers especially to fanzines and webzines). 
                        Those items are indeed texts—but so are movies, paintings, television shows, songs, political cartoons, 
                        online materials, advertisements, maps, works of art, and even rooms full of people. If we can look at something, 
                        explore it, find layers of meaning in it, and draw information and conclusions from it, we’re looking at a 
                        text.</p>
                    <Button variant="outline-secondary">Learn More</Button>
                    <h4 className="mt-5" style={{ color: 'goldenrod' }}>Follow Us on</h4>
                    <div className="my-3">
                        <span className="me-4"><Facebook fontSize="30px" color="#097EEB" /></span>
                        <span className="me-4"><Whatsapp fontSize="30px" color="#47C757" /></span>
                        <span><Twitter fontSize="30px" color="#358AC4" /></span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;