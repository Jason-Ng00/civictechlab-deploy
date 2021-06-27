import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
  render() {
    return (
        <Container className="home">

        <Col xs={12} md={12} lg={12} className="home-width">
            <Carousel infiniteLoop autoPlay interval="2500" width="60%">
                <div>
                    <img src="/cultural-publics/picture4.png" />
                    <p className="legend">Cultural Public Event Went Smoothly</p>
                </div>
                <div>
                    <img src="/civic-tech/picture3.png" />
                    <p className="legend">Promoting of Civic Tech are welcomed warmly</p>
                </div>
                <div>
                    <img src="/youth-engagement/picture2.png" />
                    <p className="legend">Closing ceremony of Youth Engagement</p>
                </div>
            </Carousel>
            {/* <Row className="home-content-abput-us">
                <h1>ABOUT US</h1>
            </Row> */}


            <Row className="home-content-intro">
                <img
                    class="container-bg"
                    src="/f7467f380545292cfe8bbe76eaf198c9.webp"
                    alt=""
                />
                <div class="content">
                    <h2>We are <span className="blue-h2">Professors</span></h2>
                    <p className="home-para">CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. </p>
                </div>
            </Row>

            <Row className="home-content-vision">
                <img
                    class="container-bg"
                    src="/images.jfif"
                    alt=""
                />
                <div class="content">
                    <h1>OUR VISION</h1>
                    <p className="home-para">An interdisciplinary, cross-sectoral and collaborative approach to tackling civic challenges.  </p>
                </div>
            </Row>

            <Row className="home-content-mission">
                <img
                    class="container-bg"
                    src="/Our-Vision.jpg"
                    alt=""
                />
                <div class="content">
                    <h1>OUR MISSION</h1>
                    <p className="home-para">Generate the highest quality research about Civic Technology. Strengthen the civic core of public-sector, private-sector actors and citizens. Design critically processes and technologies for the public good.  </p>
                </div>
            </Row>

            <Row className="home-content-history">
                <img
                    class="container-bg"
                    src="/our-history.jpg"
                    alt=""
                />
                <div class="content">
                    <h1>OUR HISTORY</h1>
                    <p className="home-para">The CivicTech Lab (formerly the Media Psychology Lab) was established in 2008 by Dr. Weiyu Zhang, as a central location for research projects on civic engagement and information communication technology conducted by the team. In the past years, the lab has produced research outputs on youth engagement, online deliberation, internet politics, citizen science, and civic technology, with a focus on the Asian region.  </p>
                </div>
            </Row>

        </Col>
        </Container>
    );
  }
}