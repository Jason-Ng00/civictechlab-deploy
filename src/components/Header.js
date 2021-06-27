import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {
  render() {
    return (
        <Container className="header">
        <Col xs={12} md={10} lg={8} className="header-content">
          <Col xs={4} md={3} lg={2} className="header-column d-xs-none"><Icon.TelephoneFill className="icon"/>Phone Number</Col>
          <Col xs={4} md={4} lg={3} className="header-column"><Icon.EnvelopeFill className="icon"/>info@civictechlab.org</Col>
          <Col xs={4} md={4} lg={4} className="header-column"><Icon.MapFill className="icon"/>
          National University of Singapore
          </Col>
          <Col xs={0} md={2} lg={3} className="header-column d-xs-none header-icon">
            <Icon.Linkedin className="icon"/>
            <Icon.Twitter className="icon"/>
            <Icon.Facebook className="icon"/>
            <Icon.Instagram className="icon"/>
          </Col>
          </Col>
        </Container>
    );
  }
}