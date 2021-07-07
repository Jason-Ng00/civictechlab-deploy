import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, CardDeck, Jumbotron} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';
import SideNav from "./SideNav.js"

export default class Home extends React.Component {
  render() {
    return (
        <Container className="home">
        <SideNav>Sidebar</SideNav>

        <Col xs={12} md={12} lg={12} className="home-width">
        {/* <Row className="carousel-container">
            <Carousel infiniteLoop autoPlay interval="2500" width="80%">
                <div>
                    <img src="cultural-publics/picture4.png" />
                    <p className="legend">Cultural Public Event Went Smoothly</p>
                </div>
                <div>
                    <img src="civic-tech/picture3.png" />
                    <p className="legend">Promoting of Civic Tech are welcomed warmly</p>
                </div>
                <div>
                    <img src="youth-engagement/picture2.png" />
                    <p className="legend">Closing ceremony of Youth Engagement</p>
                </div>
            </Carousel>
        </Row> */}
            {/* <Row className="home-content-abput-us">
                <h1>ABOUT US</h1>
            </Row> */}

            <img className="logoGif" src="home/animated logo.gif" alt="animation" />


            {/* <Row className="home-content-intro">
                <div class="content">
                    <h2>We are <span className="blue-h2">Professors</span></h2>
                    <p className="home-para">CivicTech Lab at National University of Singapore is a research 
                    hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and 
                    digital cultural analysts. </p>
                </div>
            </Row> */}

            <Row sm={1} md={2} lg={2}>
            <Col>
                <Card>
                    <Card.Img variant="top" src="home/vector-vision-word-lettering.jpg" />
                    <Card.Body>
                    <Card.Title>OUR VISION</Card.Title>
                    <Card.Text>
                    An interdisciplinary, cross-sectoral and collaborative approach to tackling civic challenges. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="home/mission.jfif" />
                    <Card.Body>
                    <Card.Title>OUR MISSION</Card.Title>
                    <Card.Text>
                    Generate the highest quality research about Civic Technology. Strengthen the civic core of public-sector, private-sector actors and citizens. Design critically processes and technologies for the public good. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                </Col>
            </Row>
            
            <Row sm={1} md={2} lg={2}>
            <Col>
                <Card>
                    <Card.Img variant="top" src="home/team.jpg" />
                    <Card.Body>
                    <Card.Title>OUR TEAM</Card.Title>
                    <Card.Text>
                    CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. 
                    We are a team of social scientists, computer scientists, and digital cultural analysts.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="home/history.jpg" />
                    <Card.Body>
                    <Card.Title>OUR HISTORY</Card.Title>
                    <Card.Text>
                    The CivicTech Lab (formerly the Media Psychology Lab) was established in 2008 by Dr. Weiyu Zhang, as a central location for research projects on civic engagement and information communication technology conducted by the team. In the past years, the lab has produced research outputs on youth engagement, online deliberation, internet politics, citizen science, and civic technology, with a focus on the Asian region. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
            </Col>
            </Row>






        </Col>
        </Container>
    );
  }
}