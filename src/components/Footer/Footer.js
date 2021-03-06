import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import apple from '../../images/Apple-logo.png';
import google from '../../images/google-play-store-logo.png';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Container>
                <Row className="g-4">
                    <Col lg="6">
                        <div className="footer-sec d-flex flex-warp">
                            <p>Download Now</p>
                            <p>License</p>
                        </div>
                        <div className="footer-sec d-flex flex-wrap">
                            <p>About</p>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Courses</p>
                            <p>Help</p>
                            <p>Privacy Policy</p>
                        </div>
                    </Col>
                    <Col lg="6" className="d-flex justify-content-start justify-content-lg-center">
                        <div>
                            <p>Get the App</p>
                            <div className="app">
                                <div className="ios d-flex align-items-center">
                                    <img src={apple} alt="" />
                                    <div className="ios-detail">
                                        <small>Download on the</small>
                                        <h6>App Store</h6>
                                    </div>
                                </div>
                                <div className="android d-flex align-items-center">
                                    <img src={google} alt="" />
                                    <div className="android-detail">
                                        <small>GET IT ON</small>
                                        <h6>Google Play</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className="text-center text-lg-start pb-4">
                        <small className="">?? 2021 SK Academy. All rights reserved</small>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;