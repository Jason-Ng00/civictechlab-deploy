import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CitizenScience.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

export default class CivicTech extends React.Component {
  render() {
    return (
        <Container className="citizen-science">
        <Helmet>
            <title>Citizen Science | CivicTech Lab</title>
        </Helmet>
        <Col xs={12} md={10} lg={8} className="citizen-science-width">
            <h1 className="title" style={{width:"100%"}}>Project - Citizen Science</h1>

            <h2 className="subtitle"></h2>
            <h4>This research program focuses on enabling public participation in science and technology topics.</h4>
            <img className="project-img" src="/citizen-science/picture1.png" />
            <p>
            Science and Technology topics (e.g., pandemics, climate change, gene editing, artificial intelligence) 
            have increasingly becoming the focus of public discussion. Public understanding of science and technology 
            is the foundation of the governance of these history-changing actants. Without the publics’ buy-in, 
            we cannot harvest the fruits of scientific breakthroughs (e.g., vaccine take-up). Without the public’s 
            support, we won’t be able to reverse the climate change human development has induced. Without the 
            public’s debate, we won’t know that there are limits the mankind must set to their own imagination 
            (e.g., gene editing). Without the public’s thought evolvement, we cannot justify the decisions on 
            technological development made by experts (e.g., artificial intelligence).              

            </p>


            <h2 className="subtitle">Collaborators</h2>
            <ul>
                <li><a href="https://research.monash.edu/en/persons/david-holmes">Dr. David Holmes</a>- Co-PI; Founder and Director, Climate Change Communication Research, Monash University</li>
                <li><a href="https://comm.uky.edu/people/wang">Dr. Rong Wang</a> - Co-PI; Assistant Professor, Department of Communication, University of Kentucky</li>
                <li><a href="https://www.linkedin.com/in/manjianghe/">Manjiang He</a> - Research Assistant, Master Student, LKYSPP, NUS </li>
                <li>Xing Zhang- Research Assistant, PhD Student, CNM, NUS </li>
                <li><a href="https://www.linkedin.com/in/ximing-liu-951543b8/?originalSubdomain=cn">Ximing Liu</a> - Research Assistant, Master student; currently Market Researcher at Tencent</li>
                <li>Jingjing Liang - Research Assistant, Master student; currently taking a break</li>
                <li><a href="https://www.researchgate.net/profile/Anfan-Chen">Dr. Anfan Chen</a> - Visiting PhD Student, Tsinghua University, 2019; currently PostDoc Researcher at Chinese University of Hong Kong (CUHK)</li>
                <li>Kehan Yang - Research Assistant, Master Student, LKYSPP, NUS</li>
                <li>Haodong Liu - Research Intern; currently Master graduate, City University of Hong Kong</li>
                <li>Huazhi Qin - Research Intern, Master graduate, Georgetown University</li>
                <li>Cheng Yixiang - Research Intern, Master Graduate, Chinese University of Hong Kong</li>
            </ul>

            <h2 className="subtitle">Publications</h2>
            <ol>
                <li>
                Zhang, W., Wang, R., & Liu, H. (2023). Moral Expression, Sources, and Frames: Examining COVID-19 Vaccination Posts by Facebook Public Pages. Computers in Human Behavior.       
                </li>
                <li>
                Zhang, W., Mukerjee, S., & Qin, H. (2022). Topics and sentiments influence likes: A study of Facebook public pages’ posts about COVID-19 vaccination. 
                <em>Cyberpsychology, Behavior, & Social Networking</em>. <a href='https://doi.org/10.1089/cyber.2022.0063'>https://doi.org/10.1089/cyber.2022.0063</a> 
                </li>
                <li>
                    Zhang, W., Chua, G., See, C. (July 2021). <em>The Role of Social Media in China’s Lifeworld Environmentalism</em>,
                    paper presented at the 2021 Annual Conference of International Association
                    of Media and Communication Research, virtual due to Covid-19.
                </li>
                <li>
                    Zhang, X., Chen, A., &amp; Zhang, W. (2021). <a href="https://doi.org/10.1177%2F0963662520987754">
                        Before and after the Chinese gene-edited human babies: Multiple
                        discourses of gene editing on social media.
                    </a> <em>Public Understanding of Science, 30(5) : 570-587. </em>
                    <video src="/video/CIRC 2021_Xing(with opening).mp4" width="80%" height="auto" controls="controls"/>
                </li>
                <li>
                    Liang, J., Liu, X., Zhang, W. (2019) <a href="https://doi.org/10.1177%2F0963662519876782">
                        Scientists vs. Laypeople: How Genetically Modified Food is Discussed on
                        a Chinese Q&amp;A Website?
                    </a>
                    . <em>Public Understanding of Science, 28</em>(8), 991-1004.
                </li>
                <br/>
            </ol>
            
            <h2 className="subtitle">Partner Institutions</h2>
            <p>
            This research was funded by International Universities Climate Alliance through the leadership of 
            the Monash Climate Change Communication Research Hub.
            </p>

            <a href="https://www.universitiesforclimate.org/"><img className="partner-img" src="/citizen-science/picture2.png"></img></a>
            <a href="https://ci.uky.edu/ci/"><img className="partner-img" src="/citizen-science/picture4.png"></img></a>
            <a href="https://www.monash.edu/mcccrh"><img className="partner-img" src="/citizen-science/picture5.png"></img></a>




        </Col>
        </Container>
    );
  }
}