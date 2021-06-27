import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CivicTech.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class CivicTech extends React.Component {
  render() {
    return (
        <Container className="civic-tech">
        <Col xs={12} md={10} lg={8} className="civic-tech-width">
            <h1 className="title">Project - Civic Tech</h1>
            <a href="/civic-tech/Report-on-Preliminary-Findings.pdf" download><Button className="download-report">Download Report</Button></a>
            <h2 className="subtitle">Introduction</h2>
            <h4>This research program aims to examine and develop Civic Tech in Asian contexts.  </h4>
            <img className="project-img" src="/civic-tech/picture1.png" />
            <p>
            Civic Technology, or Civic Tech, refers to information and communication technologies (ICTs) that facilitate civic engagement.
             Government-centric Civic Tech refers to governments utilizing the technologies for service provision, citizen consultations, 
             and data analyses to inform policy making. Citizen-centric Civic Tech refers to the platforms and applications that enable 
             citizens to connect and collaborate with each other and with government. Multiple groups of actors have contributed to building 
             and implementing Civic Tech, including governments, academics, NGOs, citizen groups, and more. Yet, at least two gaps exist in the 
             academic scrutiny of the topic:
             <ol>
                <li>
                Although Civic Tech is gaining traction in North America and Europe, little has been known 
                about the development in Asia, despite its increasing prominence;
                </li>
                <span>and</span>
                <li>
                As an ongoing phenomenon, our understanding is still 
                limited regarding the sources, design, implementation, and evaluation of Civic Tech (e.g., how communities of computer 
                programmers and digital developers play an unprecedented role in this). 
                </li>
             </ol> 
            </p>


            <h2 className="subtitle">Collaborators</h2>
            <ul>
                <li>Dr. Dongtao Qi - Co-PI; currently Research Fellow at East Asia Institute, NUS</li>
                <li>Dr. Lim Tai Wei - Collaborator; currently Associate Professor, Singapore University of Social Sciences </li>
                <li>Dr. Simon Perrault - Collaborator; currently Assistant Professor, Singapore University of Technology and Design </li>
                <li>Gionnieve Lim  - Collaborator; currently PhD Student, Singapore University of Technology and Design (SUTD)</li>
                <li>Ng Chin Seang - Research Assistant; currently undergrad student, Mathematics, NUS</li>
                <li>Adhiraaj Anand - Research Assistant; currently Master Student, LKSPP, National University of Singapore</li>
                <li>Areet Roychowdhury - Research Assistant; currently Undergraduate Student, Yale-NUS College</li>
            </ul>

            <h2 className="subtitle">Publications</h2>
            <ol>
                <li>
                    Zhang, W. (2021, June).
                    <a
                        href="https://www.publicdeliberation.net/online-deliberation-and-civictech/"
                    >
                        Online deliberation and #CivicTech
                    </a>
                    . Deliberative Democracy Digest.
                </li>
                <img className="project-img" src="/civic-tech/picture2.png" />

                <li>
                    Zhang, W., Lim, G., Wang, Z., &amp; Perrault, S. (2020, October).    <u> #</u>
                    <a
                        href="https://cscwcivictechnologies.files.wordpress.com/2020/10/civictech_for_and_by_citizens.pdf"
                    >
                        CivicTech For And By Citizens: A Review And A Meta-Evaluation
                    </a>
                    . In <em>
                        Proceedings of Annual CSCW conference Workshop Position Papers on Civic
                        Technologies
                    </em>
                    . Virtual.
                </li>
                <img className="project-img" src="/civic-tech/picture3.png" />

            </ol>

            <h2 className="subtitle">Presentations</h2>
            <ol>
                <li>
                    Zhang, W<em>. (2021). The history of Civic Tech in Singapore</em>,
                    Singapore Research Nexus Virtual Event, FASS, NUS, May 12<sup>th</sup>,
                    2021. [video]
                </li>
                <img className="project-img" src="/civic-tech/picture4.png" style={{height:"600px", objectFit:"cover", objectPosition:"0 -360px"}}/>

                <li>
                    <em>
                        Zhang, W. (2009). Pushing democracy: Prospects for media and technology
                    </em>
                    , Peace, Human Rights, Good Governance: East Asian Democracies at the
                    Crossroads, The Philippine Center for Investigative Journalism, September
                    30th, 2009. [slides]
                </li>
                {/* <img className="project-img" src="/civic-tech/picture5.png" style={{height:"300px", width:"auto"}}/> */}
            </ol>

            
            <h2 className="subtitle">Partner Institutions</h2>
            <p>
            This research was funded by National University of Singapore’s Collaborative Research Seed 
            Fund (R-124-000-112-646) and NUS’ Centre for Trusted Internet and Community Pilot Project 
            Fund (R-728-117-002-290). Any opinions, findings and conclusions or recommendations 
            expressed on this website are those of the authors and do not necessarily reflect the 
            views of the funder.
            </p>

            <img className="partner-img" src="/civic-tech/NUS CTIC.png"></img>
            <img className="partner-img" src="/civic-tech/NUS EAI.png"></img>
            <br />
            <img className="partner-img" src="/civic-tech/SUTD.png"></img>
            <img className="partner-img" src="/civic-tech/PCIJ.png"></img>




        </Col>
        </Container>
    );
  }
}