import React, {Component} from 'react';
import { render } from "react-dom"
import ReactDOM from 'react-dom';
import {Container, Row, Col, ToggleButton,  ToggleButtonGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./News.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class News extends React.Component {

    constructor() {
        super();
        this.state = {
            showYouthEngagement: true,
            showCulturalPublic: true,
            showOnlineDeliberation: true,
            showCitizenScience:true,
            showCivicTech:true,
            value:[1,2,3,4,5]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val) {
        this.setState({value:val});
        var projects = 
        ["civic-tech-news-content", 
        "citizen-science-news-content", 
        "online-deliberation-news-content",
        "cultural-public-news-content",
        "youth-engagement-news-content"]
        for (var i = 1; i <= 5; i++) {
            var currClass = document.getElementsByClassName(projects[i - 1]);

            if(val.includes(i)) {
                for (var component of currClass) {
                    component.style.display = "block";
                } 
            } else {
                for (var component of currClass) {
                    component.style.display = "none";
                }

            }
        }
    }

    render() {
        const {value} = this.state;
    return (
        <Container className="news">
        <Col xs={12} md={10} lg={8} className="news-width">
            <h1 className="news-title">What's New</h1>

            <ToggleButtonGroup className="button-list" type="checkbox" value={value} onChange={this.handleChange}>
                <ToggleButton className="civic-tech-news civic-tech-button" value={1} active>Civic Tech</ToggleButton>
                <ToggleButton className="citizen-science-news citizen-science-button" value={2} active>Citizen Science</ToggleButton>
                <ToggleButton className="online-deliberation-news online-deliberation-button" value={3} active>Online Deliberation</ToggleButton>
                <ToggleButton className="cultural-public-news cultural-public-button" value={4} active>Cultural Public</ToggleButton>
                <ToggleButton className="youth-engagement-news youth-engagement-button" value={5} active>Youth Engagemnet</ToggleButton>
            </ToggleButtonGroup>


            <NewsComponent className="online-deliberation-news" class="online-deliberation-news-content" tag="Online Deliberation" date="2017" title="Deliberation and Decision Making (DDM2017): An Interdisciplinary Conference on Civic Tech">
            <p>
            The conference led to the publication of a symposium <a href="https://delibdemjournal.org/article/id/988/">“Online Deliberation and #CivicTech” featured in the Journal of Deliberative Democracy. 
            </a>
            </p>
            <img className="project-img" src="online-deliberation/4.png"></img>
            </NewsComponent>

            
            <NewsComponent className="cultural-public-news" class="cultural-public-news-content" tag="Cultural Public" date="8 October 2020" title="Forum on Internet and Media Use in Singapore’s General Election 2020">
                <a
                    href="https://lkyspp.nus.edu.sg/ips/news/details/ips-online-forum-on-internet-and-media-use-in-general-election-2020"
                >
                    A forum on <strong>
                        Internet and Media Use in Singapore’s General Election 2020
                    </strong>
                </a> was held online on October 8<sup>th</sup>, 2020
                    and open to the public. The research team was led by Dr. Carol Soon
                    from Institute of Policy Studies, NUS. The study was reported and
                    covered in local media:
                <a href="https://www.todayonline.com/singapore/ips-post-ge2020-forum-older-voters-catch-digital-use-parties-missed-crucial-online-signals">
                    TodayOnline ,</a> <a href="https://www.channelnewsasia.com/news/singapore/ge2020-swing-voters-pap-opposition-party-ips-survey-13230088">
                    Channel News Asia ,
                </a> <a href="https://mothership.sg/2020/10/swing-voters-ge2020/">Mothership ,</a> <a href="https://mp.weixin.qq.com/s/DSOOUADKhytd5c6ZfHTwHQ">Zaobao WeChat.</a>
                <img className="project-img" src="cultural-publics/picture3.png" />
            </NewsComponent>

            <NewsComponent className="cultural-public-news" class="cultural-public-news-content" tag="Cultural Public" date="28 June 2019" title="The 17th Chinese Internet Research Conference (CIRC) on “Digital Cultures: Chinese Internet and Beyond”">
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
                <img className="project-img" src="cultural-publics/picture4.png" />            
            </NewsComponent>

            <NewsComponent className="cultural-public-news" class="cultural-public-news-content" tag="Cultural Public" date="May 2016" title="Interview with Penn Annenberg on the crowdsourced translation of the book 'FandomPublics in the Making'">
                    <p>
                    An <a href="https://www.asc.upenn.edu/news-events/news/annenberg-student-and-alumna-collaborate-crowdsource-book-translation">
                        interview</a> with Penn Annenberg on the crowdsourced translation of the book "Fandom
                        Publics in the Making" was published in May 2016. The translation
                        project was a collaboration with the then Annenberg PhD student, and
                        now Dr. Kecheng Fang.
                    </p>
                    <img className="project-img" src="cultural-publics/picture5.png" style={{width:"250px"}}/>
                    <img className="project-img" src="cultural-publics/picture6.png" style={{width:"250px"}}/>
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" date="March 2010, IIT Delhi" title="ICTs and Development">
                <p>An International Workshop for Theory, Practice and Policy.</p>
                <img className="project-img" src="youth-engagement/picture2.png" />
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" date="21-23 June 2010 Suntec, Singapore" title="Session on “Youth, ICTs and Political Engagement in Asia”">
                <p>19th AMIC Annual Conference “Technology and Culture: Communication Connectors and Dividers”</p>
                <img className="project-img" src="youth-engagement/picture3.png" />
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" date="15-20 July 2012, South Africa" title="Session on “Youth, ICTs, And Civil Engagement in Asia: A Comparative Approach">
                <p>International Association of Media and Communication Research Conference </p>
                <img className="project-img" src="youth-engagement/picture4.png" />
            </NewsComponent>






        </Col>
        </Container>
    );
  }
}

class NewsComponent extends React.Component {
    render() {
      return (
        <Container className={this.props.class}>
        <div class="news-container">
            <img
                className="news-container-bg"
                src="news/690cafe534f955156ebd1ac6364dfff4.jpg"
                alt=""
            />
            <div className="news-content">
                <Row>
                <span className= {this.props.className}><span className="news-tags">#{this.props.tag}</span></span>
                <span className="news-date">{this.props.date}</span>
                </Row>
                <h2 className="news-title">{this.props.title}</h2>
                <div>{this.props.children}</div>
            </div>
        </div>
        </Container>
      );
    }
}