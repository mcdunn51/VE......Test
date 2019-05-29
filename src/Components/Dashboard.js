import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userImpressions: 0,
            overlaysShown: 0,
            overlaysClicked: 0,
            revenue: 0
        };
    }

    generateRandomNumbers() {
        Object.keys(this.state).forEach(metric => {
            const randomValue = Math.floor((Math.random() * 100) + 1);
            this.setState({
                [metric]: randomValue
            })
        });
    }

    componentDidMount() {
        this.generateRandomNumbers();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>User impressions</td>
                                    <td>{this.state.userImpressions}</td>
                                </tr>
                                <tr>
                                    <td>Overlays shown</td>
                                    <td>{this.state.overlaysShown}</td>
                                </tr>
                                <tr>
                                    <td>Overlays Clicked</td>
                                    <td>{this.state.overlaysClicked}</td>
                                </tr>
                                <tr>
                                    <td>Revenue</td>
                                    <td>£{this.state.revenue}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard