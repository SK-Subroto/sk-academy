import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { BadgeCc, CalendarCheck, Globe, Heart, Share } from 'react-bootstrap-icons';
import { useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import useCourses from '../../hooks/useCourses';

const CourseDetail = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState({})
    const [courses] = useCourses();

    useEffect(() => {
        // console.log(courses)
        setCourse(courses.find(c => c.id === courseId));
    }, [courses]);

    return (
        <Container className="mt-5">
            <Row>
                <Col lg="8">
                    <h1 style={{color: '#842029'}}>{course?.title}</h1>
                    <div className="d-flex">
                        <StarRatings
                            rating={course?.rating}
                            starDimension="20px"
                            starSpacing="5px"
                            starRatedColor="#FFC014"
                        />
                        <p className="p-1"> {course?.rating} ({course?.enrolled})</p>
                    </div>
                    <div>
                        <span className="me-2">Created by <b>{course?.instructor}</b></span>
                        <img src={course?.photo} alt="" style={{ height: 30, width: 30, borderRadius: '50%' }} />
                    </div>
                    <div className="mt-3">
                        <span className="me-4"><CalendarCheck /> Last updated 5/2020</span>
                        <span className="me-4"><Globe /> English</span>
                        <span><BadgeCc /> English, French [Auto]</span>
                    </div>
                    <div className="my-5">
                        <Button variant="outline-secondary" className="me-4 mb-2">Whitelist <Heart/> </Button>
                        <Button variant="outline-secondary" className="me-4 mb-2">Share <Share/> </Button>
                        <Button variant="outline-secondary">Gift the course</Button>
                    </div>
                </Col>
                <Col lg="4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={course?.img}  />
                        <Card.Body className="text-center">
                            <h4>$ {course?.price}</h4>
                            <Button 
                                variant="success" 
                                style={{ backgroundColor: '#D32F2F', border: 0 }}
                            >Add to cart</Button>
                        </Card.Body>
                    </Card>
                    {/* <img style={{height: 250, width: 300, float: 'right'}} src={course?.img} alt="" /> */}
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetail;