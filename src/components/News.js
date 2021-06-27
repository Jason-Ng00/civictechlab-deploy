import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./News.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class News extends React.Component {
  render() {
    return (
        <Container className="news">
        <Col xs={12} md={10} lg={8} className="news-width">
            <h1 className="join-us-title">What's New</h1>

            <div class="news-container">
                <img
                    class="news-container-bg"
                    src="/news/690cafe534f955156ebd1ac6364dfff4.jpg"
                    alt=""
                />
                <div class="news-content">
                    <p>25 Jun 2021</p>
                    <h2 className="news-title">Event of Cultural Public</h2>
                    <p>
                    The 17th Chinese Internet Research Conference (CIRC) on “Digital Cultures:
                    Chinese Internet and Beyond” was held on June 28, 2019 in Orchard Hotel
                    Singapore. The conference was co-hosted by NUS and Murdoch University. More
                    than 60 participants registered for this day long conference, including
                    both academics and government officials. Researchers coming from all over
                    the world (China, Australia, United Stated, Netherlands, Singapore, etc)
                    made 29 presentations during the day. Two special issues, one in
                    <em> <a href="https://journals.sagepub.com/doi/full/10.1177/2059436420939322">Global Media and China</a>
                    </em> (GMC) and one in<em> <a href="https://doi.org/10.1080/17544750.2020.1848405">Chinese Journal of Communication</a>
                    </em> (CJoC), have been published based on the conference submissions.

                    </p>
                    <img className="project-img" src="/cultural-publics/picture4.png" />

                </div>
            </div>

            <div class="news-container">
                <img
                    class="news-container-bg"
                    src="/news/690cafe534f955156ebd1ac6364dfff4.jpg"
                    alt=""
                />
                <div class="news-content">
                    <p>25 Jun 2021</p>
                    <h2 className="news-title">Event of Cultural Public</h2>
                    <p>
                    An <a href="https://www.asc.upenn.edu/news-events/news/annenberg-student-and-alumna-collaborate-crowdsource-book-translation">
                            interview</a> with Penn Annenberg on the crowdsourced translation of the book "Fandom
                        Publics in the Making" was published in May 2016. The translation
                        project was a collaboration with the then Annenberg PhD student, and
                        now Dr. Kecheng Fang.

                    </p>
                    <img className="project-img" src="/cultural-publics/picture5.png" style={{width:"250px"}}/>
                    <img className="project-img" src="/cultural-publics/picture6.png" style={{width:"250px"}}/>

                </div>
            </div>






        </Col>
        </Container>
    );
  }
}