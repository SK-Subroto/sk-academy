import React, { useState, useEffect } from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button, Form } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [instructors, setInstructors] = useState([]);

    const handleFilter = (data) => {
        setCourses(data);

        let uniqueCategory = [];
        let uniqueInstructor = [];

        for (let d of data){
            if (uniqueCategory.indexOf(d.category) === -1){
                uniqueCategory.push(d.category);
            }

            if (uniqueInstructor.indexOf(d.instructor) === -1) {
                uniqueInstructor.push(d.instructor);
            }
        }

        setCategories(uniqueCategory);
        setInstructors(uniqueInstructor);
    }

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => handleFilter(data))
    }, []);

    return (
        <Container style={{ "marginTop": "80px" }}>
            <Row xs={1} md={2} lg={2} className="g-4">
                <Col lg="3" className="border border-primary rounded px-4" style={{ height: 'fit-content'}}>
                    <InputGroup className="border border-primary rounded mt-3">
                        <FormControl
                            placeholder="Search courses"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <h5 className="my-4">Course Categories</h5>
                    {
                        categories.map(category => <Form.Check className="mt-2 text-secondary" style={{ fontSize: "18px" }} type="checkbox" label={category} />)
                    }
                        
                    <h5 className="my-4">Instructors</h5>
                    {
                        instructors.map(instructor => <Form.Check className="mt-2 text-secondary" style={{ fontSize: "18px" }} type="checkbox" label={instructor} />)
                    }

                    <Button className="my-5">Search</Button>
                    
                </Col>
                <Col lg="9">
                    <h2>Total Course {courses.length}</h2>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            courses.map(course => <Course course={course} />)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;