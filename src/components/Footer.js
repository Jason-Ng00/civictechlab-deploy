import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

export default class Footer extends React.Component {
  render() {
    return (
        <Container fluid className="footer">
        <Col>
            <Row className="footer-top">
            <Col xs={12} md={10} lg={8} className="footer-width">
                <Icon.Linkedin className="footer-icon"/>
                <Icon.Twitter className="footer-icon"/>
                <Icon.Facebook className="footer-icon"/>
                <Icon.Instagram className="footer-icon"/>
            </Col>
            </Row>
            
            <Row className="footer-content" xs={1} md={2} lg={4}>
                <Col xs={4} md={3} lg={2} className="footer-column">
                    <img className="footer-logo" src={logo}/>
                    <p>CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts.  </p>
                </Col>
                <Col xs={4} md={3} lg={2} className="footer-column">
                    <h3>Find Us</h3>
                    <p>11 Computing Drive, Room 03-24. 
                        National University of Singapore, 
                        Singapore, 117416 </p>
                </Col>
                <Col xs={4} md={3} lg={2} className="footer-column">
                    <h3>Recent Activity</h3>
                    <p>Project Update 1</p>
                    <p>9 Mar, 2021</p>
                    <p>Project Update 2 and Discussion</p>
                    <p>7 Jun, 2021</p>
                    <p>Project Meeting and Drafting</p>
                    <p>9 Jun, 2021</p>
                </Col>
                <Col xs={0} md={0} lg={2} className="footer-column">
                    <h3>Quick Links</h3>
                    <ListGroup>
                        <ListGroup.Item action href="/home">Home</ListGroup.Item>
                        <ListGroup.Item action href="/people">People</ListGroup.Item>
                        <ListGroup.Item action href="#link1">Projects</ListGroup.Item>
                        <ListGroup.Item action href="/news">News</ListGroup.Item>
                        <ListGroup.Item action href="/join-us">Join Us</ListGroup.Item>
                    </ListGroup>
                </Col>

            </Row>

            <Row className="footer-bottom" xs={12} md={10} lg={8}>
                <span>@2021 CIVICTECHLAB. ALL RIGHT RESERVED.</span>
            </Row>
        </Col>
        </Container>
    );
  }
}
  