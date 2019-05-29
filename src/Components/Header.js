import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron className="text-center">
                        <h1>Smrt.... Exercise</h1>
                        <p>(link to image wasn't working)</p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;