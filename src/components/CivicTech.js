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
            <h1 className="title" style={{width:"100%"}}>Project - Civic Tech</h1>
            {/* <a href="/civic-tech/Report-on-Preliminary-Findings.pdf" download><Button className="download-report">Download</Button></a> */}
            <h2 className="subtitle"></h2>
            <h4>This research program aims to examine and develop Civic Tech in Asian contexts.  </h4>
            <img className="project-img" src="civic-tech/picture1.png" />
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
                <li><a href="https://sg.linkedin.com/in/dongtao-qi-ab70ba16b">Dr. Dongtao Qi</a> - Co-PI; currently Research Fellow at East Asia Institute, NUS</li>
                <li><a href="https://www.suss.edu.sg/docs/default-source/default-document-library/cv_limtaiwei.pdf?sfvrsn=76940188_2">Dr. Lim Tai Wei</a> - Collaborator; currently Associate Professor, Singapore University of Social Sciences </li>
                <li><a href="https://istd.sutd.edu.sg/people/faculty/simon-perrault#biography">Dr. Simon Perrault</a> - Collaborator; currently Assistant Professor, Singapore University of Technology and Design </li>
                <li><a href="https://www.linkedin.com/in/gionnievelim/">Gionnieve Lim</a>  - Collaborator; currently PhD Student, Singapore University of Technology and Design (SUTD)</li>
                <li>Ng Chin Seang - Research Assistant; currently undergrad student, Mathematics, NUS</li>
                <li><a href="https://www.linkedin.com/in/adhiraaj-anand">Adhiraaj Anand</a> - Research Assistant; currently Master Student, LKSPP, National University of Singapore</li>
                <li>Areet Roychowdhury - Research Assistant; currently Undergraduate Student, Yale-NUS College</li>
                <li>Chuyao Wang - Research Intern; currently Master Student, Hong Kong University of Science and Technology</li>

            </ul>

            <h2 className="subtitle">Publications</h2>
            <ol>
                <li>
                Zhang, W., Lim, G., Perrault, S., & Wang, C. (2022). A Review of Research on Civic Technology: Definitions, Theories, History and Insights. arXiv preprint 
                arXiv:2204.11461. <a href='https://arxiv.org/ftp/arxiv/papers/2204/2204.11461.pdf'>[paper]</a> <a href='https://www.youtube.com/watch?v=EwYdL3_wvwg'>[video]</a> 
                </li>
                <li>
                Zhang, W. (2022). Civic AI Education: Developing a Deliberative Framework. In 4th Annual Symposium on HCI Education (EduCHI’22), April 30–May 1, 2022, New Orleans, LA, 
                USA. <a href='https://educhi2022.hcilivingcurriculum.org/wp-content/uploads/2022/04/educhi2022-final12.pdf'>[paper]</a> < a href='https://www.youtube.com/watch?v=8dK3dUKA4sg'>[video]</a>
                </li>
                <li>
                Zhang, W. (2021, June). <a href='https://www.publicdeliberation.net/online-deliberation-and-civictech/'>Online deliberation and #CivicTech</a>. Deliberative Democracy Digest.
                </li>
                <li>
                Zhang, W., Lim, G., Wang, Z., & Perrault, S. (2020, October). <a href='https://cscwcivictechnologies.files.wordpress.com/2020/10/civictech_for_and_by_citizens.pdf'># CivicTech For And By Citizens: A Review And A Meta-Evaluation</a>. In Proceedings of Annual CSCW conference Workshop Position Papers on Civic Technologies. Virtual.
                </li>
                <li>
                Zhang, W., Wang, R., & Liu, H. (2023). Moral Expression, Sources, and Frames: Examining COVID-19 Vaccination Posts by Facebook Public Pages. Computers in Human Behavior.       
                </li>
                <li>
                ii.	Zhang, W., Mukerjee, S., & Qin, H. (2022). Topics and sentiments influence likes: A study of Facebook public pages’ posts about COVID-19 vaccination. 
                <em>Cyberpsychology, Behavior, & Social Networking</em>. <a href='https://doi.org/10.1089/cyber.2022.0063'>https://doi.org/10.1089/cyber.2022.0063</a> 
                </li>

            </ol>
        
            <h2 className="subtitle">Partner Institutions</h2>
            <p>
            This research was funded by National University of Singapore’s Collaborative Research Seed 
            Fund (R-124-000-112-646) and NUS’ Centre for Trusted Internet and Community Pilot Project 
            Fund (R-728-117-002-290). Any opinions, findings and conclusions or recommendations 
            expressed on this website are those of the authors and do not necessarily reflect the 
            views of the funder.
            </p>


            <a href="https://ctic.nus.edu.sg/"><img className="partner-img" src="civic-tech/NUS CTIC.png"></img></a>
            <a href="https://research.nus.edu.sg/eai/"><img className="partner-img" src="civic-tech/NUS EAI.png"></img></a>
            <br />
            <a href="https://www.sutd.edu.sg/"><img className="partner-img" src="civic-tech/SUTD.png"></img></a>





        </Col>
        </Container>
    );
  }
}