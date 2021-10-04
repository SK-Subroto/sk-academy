import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Clock, TextRight } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';

const Course = (props) => {
    const { id, title, duration, category, rating, enrolled, instructor, photo, price, img } = props.course;

    const history = useHistory();

    const handleCourseDetails = () => {
        history.push(`./course/${id}`);
    }

    return (
        <Col>
            <Card className="h-100" onClick={handleCourseDetails} style={{cursor: 'pointer'}}>
                <Card.Img variant="top" src={img} style={{ 'height': '200px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="d-flex">
                        <span>
                            <Clock /> {duration}
                        </span>
                        <span className="ms-5">
                            <TextRight /> {category}
                        </span>
                    </Card.Text>
                    <div className="d-flex">
                        <StarRatings
                            rating={rating}
                            starDimension="17px"
                            starSpacing="3px"
                            starRatedColor="#FFC014"
                        />
                        <p className="p-1"> {rating} ({enrolled})</p>
                    </div>
                    <h4>$ {price}</h4>
                </Card.Body>
                <Card.Footer className="bg-white d-flex justify-content-between align-items-center">
                    <div>
                        <img src={photo} alt="" style={{height: 30, width: 30, borderRadius: '50%'}} />
                        <span className="ms-2">{instructor}</span>
                    </div>
                    <Button variant="success" style={{ backgroundColor: '#D32F2F', border: 0}}>Enroll</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;