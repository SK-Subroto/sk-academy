import React, { useState, useEffect } from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button, Form, Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { CaretDown } from 'react-bootstrap-icons';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [instructors, setInstructors] = useState([]);

    const handleFilter = (data) => {
        setCourses(data);

        let uniqueCategory = [];
        let uniqueInstructor = [];

        // filter unique course category and instructor

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

    // fetch course
    useEffect(() => {
        fetch('../courses.json')
            .then(res => res.json())
            .then(data => handleFilter(data))
    }, []);

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <button
                type="button"
                style={{ backgroundColor: 'transparent', border: 0, float: 'right' }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }

    return (
        <Container className="mt-5">
            <Row xs={1} md={2} lg={2} className="g-4">
                <Col lg="3" >
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header style={{ backgroundColor: '#F8D7DA'}}>
                                <InputGroup className="mt-4" style={{ border: '#842029 solid 1px', borderRadius: 5}}>
                                    <FormControl
                                        placeholder="Search courses"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                                <CustomToggle eventKey="0"><CaretDown color='#842029' /></CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <h5 className="my-4">Course Categories</h5>
                                    {
                                        categories.map(category => <Form.Check key={category} className="mt-2 text-secondary" style={{ fontSize: "18px" }} type="checkbox" label={category} />)
                                    }

                                    <h5 className="my-4">Instructors</h5>
                                    {
                                        instructors.map(instructor => <Form.Check key={instructor} className="mt-2 text-secondary" style={{ fontSize: "18px" }} type="checkbox" label={instructor} />)
                                    }

                                    <Button className="my-5">Search</Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
 
                </Col>
                <Col lg="9">
                    <h2 className="text-secondary">Total Course {courses.length}</h2>
                    <Row xs={1} md={1} lg={3} className="g-4">
                        {/* looping course  */}
                        {
                            courses.map(course => <Course key={course.id} course={course} />)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;