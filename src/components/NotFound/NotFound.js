import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { HouseDoor } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('./home');
    }
    return (
        <Container className="alert alert-info text-center mt-5" style={{height: 300}}>
            <h2 className="mt-4">Page Not Found</h2>
            <h1>404</h1>
            <Button variant="info" className="text-white" onClick={handleGoHome}> <HouseDoor/> Go to homepage</Button>
        </Container>
    );
};

export default NotFound;