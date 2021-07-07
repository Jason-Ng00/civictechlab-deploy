import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavDropdown, Col, Row, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default class NavBar extends React.Component {
  render() {
    return (
      <Container className="nav-container">

          <Navbar className="navBar" expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} to="/honme"><img src={logo} className="logo"/></Navbar.Brand>
          <Col xs={0} md={5} lg={5} className="nav-column"></Col>
          
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/people">People</Nav.Link>

                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/projects/civic-tech">Civic Tech</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/citizen-science">Citizen Science</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/online-deliberation">Online Deliberation</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/cultural-public">Cultural Public</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/youth-engagement">Youth Engagement</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>

                <Nav.Link as={Link} to="/news">News</Nav.Link>
                <Nav.Link as={Link} to="/join-us">Join Us</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>

      </Container>
    );
  }
}
