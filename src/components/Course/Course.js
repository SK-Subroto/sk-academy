import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Course = (props) => {
    const { title, duration, category, rating, enrolled, instructor, photo, price, img} = props.course;

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} style={{ 'height': '250px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {category}
                    </Card.Text>
                    <Card.Text>
                        {duration}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button
                        className="float-end"
                        variant="success"
                    >Enroll</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;