import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);

    const handleFeatured = (data) => {
        setCourses(data.filter(d => d.type === "featured"))
    }

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => handleFeatured(data))
    }, []);
    return (
        <Container style={{ "marginTop": "80px" }}>
            <h1 className="text-primary text-center">SK Academy</h1>
            <h2>Featured Courses</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    courses.map(course => <Course course={course} />)
                }
            </Row>
        </Container>
    );
};

export default Home;