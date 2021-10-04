import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Course from '../Course/Course';
import banner from '../../images/banner_2.png';
import { useHistory } from 'react-router';
import useCourses from '../../hooks/useCourses';

const Home = () => {
    const [featuredCourses, setFeaturedCourses] = useState([]);

    // custom hook 
    const [courses] = useCourses();

    const history = useHistory();
    // push to course
    const handleBrowseCourse = () => {
        history.push('./courses');
    }


    useEffect(() => {
        // filter featured course 
        setFeaturedCourses(courses.filter(d => d.type === "featured"));
    }, [courses]);
    return (
        <Container className="mt-5">
            <Row className="g-4 alert-danger">
                <Col lg="6">
                    <div className="mx-5" style={{marginTop: 100}}>
                        <h1>Welcome To Sk Academy</h1>
                        <p className="fs-5 my-4">Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
                        <Button 
                            className="py-2 mb-4"
                            onClick={handleBrowseCourse} 
                            style={{ backgroundColor: '#D32F2F', border: 0}}
                        >Browse Course</Button>
                    </div>
                </Col>
                <Col lg="6">
                    <img className="img-fluid" style={{float: 'right' }} src={banner} alt="" />
                </Col>
            </Row>
            <h2 style={{marginTop: 80}} className="text-secondary mb-4">Featured Courses</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    featuredCourses.map(course => <Course key={course.id} course={course} />)
                }
            </Row>
        </Container>
    );
};

export default Home;