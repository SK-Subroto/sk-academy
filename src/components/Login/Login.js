import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="mt-5">
            <h4 className="text-secondary text-center mb-4">Log In to Your Account!</h4>
            <div className="p-5 mx-auto alert alert-danger" style={{ maxWidth: 400 }}>
                <h3 className="text-center mb-4">Login</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="success" type="submit" style={{ backgroundColor: '#D32F2F', border: 0 }}>
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;