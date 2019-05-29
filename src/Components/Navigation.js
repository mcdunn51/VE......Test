import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return (
        <Container id="navigationWrapper">
            <Navbar bg="light">
                <Nav>
                    <NavDropdown drop="up" title={<FontAwesomeIcon className="icon" icon={faBars} />} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Home (picture viewer)</NavDropdown.Item>
                        <NavDropdown.Item href="/newuser">Sign up form</NavDropdown.Item>
                        <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Navigation;