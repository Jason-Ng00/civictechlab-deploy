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

          <Navbar collapseOnSelect className="navBar" expand="lg">


          <Navbar.Brand as={Link} to="/home"><img src={logo} className="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link eventKey="1" as={Link} to="/home">Home</Nav.Link>
                <Nav.Link eventKey="2" as={Link} to="/people">People</Nav.Link>

                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} eventKey="3" to="/projects/civic-tech">Civic Tech</NavDropdown.Item>
                    <NavDropdown.Item as={Link} eventKey="4" to="/projects/citizen-science">Citizen Science</NavDropdown.Item>
                    <NavDropdown.Item as={Link} eventKey="5" to="/projects/online-deliberation">Online Deliberation</NavDropdown.Item>
                    <NavDropdown.Item as={Link} eventKey="6" to="/projects/cultural-public">Cultural Publics</NavDropdown.Item>
                    <NavDropdown.Item as={Link} eventKey="7" to="/projects/youth-engagement">Youth Engagement</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>

                <Nav.Link as={Link} eventKey="8" to="/news">News</Nav.Link>
                <Nav.Link as={Link} eventKey="9" to="/join-us">Join Us</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>

      </Container>
    );
  }
}
