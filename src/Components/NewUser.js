import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            userName: '',
            pwd: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: [event.target.value]
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        // would typically do validation and then submit via axios
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" value={this.state.email} type="email" onChange={this.handleChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                        </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="userName" value={this.state.userName} type="text" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicUserName">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="pwd" value={this.state.pwd} type="password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewUser