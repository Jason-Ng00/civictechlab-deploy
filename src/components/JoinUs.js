import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JoinUs.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

export default class JoinUs extends React.Component {
  render() {
    return (
        <Container className="join-us">
        <Helmet>
            <title>Join Us | CivicTech Lab</title>
        </Helmet>
        <Col xs={12} md={10} lg={8} className="join-us-width">
            <h1 className="join-us-title">Welcome to Join Us!</h1>

            <h5>
            We are expanding our team! Don't hesitate to join us if you find yourself a good fit
            for the following position!
            </h5>
            {/* <img className="deco-img" src="/join-us/pexels-mabel-amber-128299.jpg" /> */}


            <div className="job-desc">

            <h3 className="job-title">Research Assistant</h3>
            <p className="position-desc">
            This position is for undergrad and graduate students currently enrolled in National 
            University of Singapore. Students will be paid in line with the University’s payment guideline.  
            </p>

            <h5 className="join-us-subtitle">Job Scope</h5>
            <ul>
                <li>Statistical analysis such as regressions, SEMs, ANOVAs </li>
                <li>Sentiment and other emotion analysis</li>
                <li>Social media/big data cleaning</li>
                <li>Data visualization </li>
                <li>Natural language processing using machine learning  </li>
                <li>Website or mobile app interface development </li>
            </ul>

            <h5 className="join-us-subtitle">Application Requirement</h5>
            <ul>
                <li>Portfolio or CV </li>
                <li>Names and contact information of two references </li>
                <li>Qualitative test </li>
                <li>Online interview </li>
            </ul>

            <h5 className="join-us-subtitle">Application Deadline</h5>
            <p>Ongoing</p>

            <h5 className="join-us-subtitle">Application Procedure</h5>
            <p>Email <a href="mailto:civictechlabnus@gmail.com">civictechlabnus@gmail.com</a> with the position title as the subject.  </p>
            </div>



            <div className="job-desc">

            <h3 className="job-title">Research Intern</h3>
            <p className="position-desc">
            This position is for anyone who is outside of National University of Singapore 
            and wants to have some experience with our lab. Interns will be either unpaid 
            or paid, depending on the mutually accepted agreement between the interns and 
            the lab.  
            </p>

            <h5 className="join-us-subtitle">Job Scope</h5>
            <ul>
                <li>Graphic design </li>
                <li>Video making </li>
                <li>Basic research skills such as</li>
                    <ul>
                        <li>conduct literature review</li>
                        <li>conduct interviews and field observations</li>
                        <li>help with running </li>
                    </ul>
            </ul>

            <h5 className="join-us-subtitle">Application Requirement</h5>
            <ul>
                <li>Portfolio or CV </li>
                <li>Names and contact information of two references </li>
                <li>Qualitative test </li>
                <li>Online interview </li>
            </ul>

            <h5 className="join-us-subtitle">Application Deadline</h5>
            <p>Ongoing</p>

            <h5 className="join-us-subtitle">Application Procedure</h5>
            <p>Email <a href="mailto:civictechlabnus@gmail.com">civictechlabnus@gmail.com</a> with the position title as the subject.  </p>
            </div>


        </Col>
        </Container>
    );
  }
}