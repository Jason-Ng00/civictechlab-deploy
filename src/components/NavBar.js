import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavDropdown, Col, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"
import logo from "../assets/logo.png"

export default class NavBar extends React.Component {
  render() {
    return (
      <Container className="nav-container">
        <Col xs={12} md={12} lg={10} className="nav-column">

          <Navbar className="navBar" expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home"><img src={logo} className="logo"/></Navbar.Brand>
          <Col xs={0} md={5} lg={5} className="nav-column"></Col>
          
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/people">People</Nav.Link>

                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/projects/civic-tech">Civic Tech</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/citizen-science">Citizen Science</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/online-deliberation">Online Deliberation</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/cultural-public">Cultural Public</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/youth-engagement">Youth Engagement</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>

                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/join-us">Join Us</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>

        </Col>
      </Container>
    );
  }
}
