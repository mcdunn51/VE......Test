import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PhotoViewer = () => {
    return (
        <Container id="photoViewerWrapper">
            <Row className="mb-4">
                <Col md={{span: 8, offset: 2}} className="text-center">
                    <img alt="basket saved return to site to resume your purchase" src="https://cdn.smct.co/17746-682.png" />
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoViewer;