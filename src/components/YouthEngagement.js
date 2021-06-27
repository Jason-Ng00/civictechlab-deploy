import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./YouthEngagement.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class YOuthEngagement extends React.Component {
  render() {
    return (
        <Container className="youth-engagement">
        <Col xs={12} md={10} lg={8} className="youth-engagement-width">
            <h1 className="title">Project - Youth Engagement</h1>
            <a href="/youth-engagement/final_tech_report.pdf" download><Button className="download-report">Download Report</Button></a>
            <h2 className="subtitle">Introduction</h2>
            <h4>This research program focuses on understanding the relationship between civic engagement of youth and Information Communication Technologies (ICTs).</h4>
            <img className="project-img" src="/youth-engagement/picture1.png" />

            <p>
            The “Youth, ICTs, and Political Engagement in Asia” project spanned over two years 
            from 2009 to 2012 and officially closed on November 15, 2012. The five-country (Singapore, 
            Malaysia, Philippines, India, Bangladesh) comparative study was funded by <a href="https://idrc.ca/en/homepage">International 
            Development Research Center, Canada</a> through ideacorp, the Philippines, after a competitive 
            review process. A grant of SGD 170,000 was utilized to conduct 143 in-depth interviews and 
            41 focus group discussions with young activists. About 35 researchers were recruited, trained, 
            and organized to contribute to this project. The research findings from this project have been 
            published as <a href="http://gaz.sagepub.com/content/75/3.toc">a special issue in 
            <i>International Communication Gazette</i></a> in April 2013. Before that, 
            the project has been presented as a panel at the <i>19th Asian Media Information and Communication 
            (AMIC 2011) </i> and <i>the annual conference of International Association of Media and Communication 
            Research (IAMCR 2012)</i>. The project was re-invented and continued through an NUS-University of 
            Sydney Partnership Fund during 2019-2021. 
            </p>


            <h2 className="subtitle">Collaborators</h2>
            <ul>
                <li>Dr. Murray Print - Co-PI; Professor, Faculty of Arts and Social Sciences, University of Sydney</li>
                <li>Dr. Joanne Lim Bee Yin - Co-PI; Associate Professor, University of Nottingham, Malaysia</li>
                <li>Dr. Sahid Ullah - Co-PI; Professor, University of Chittagong, Bangladesh</li>
                <li>Dr. Clarissa David- Co-PI; Professor, University of the Philippines </li>
                <li>Dr. P. Vigneswara Ilavarasan - Co-PI; Professor, Indian Institute of Technology Delhi  </li>

            </ul>

            <h2 className="subtitle">Events</h2>
            <ol>
                <li>

                    <p>ICTs and Development: An International Workshop for Theory, Practice and Policy</p>
                    <img className="project-img" src="/youth-engagement/picture2.png" />
                    <p>March 2010, IIT Delhi</p>
                </li>
                <li>

                    <p>Session on “Youth, ICTs and Political Engagement in Asia” [slides]
                        <br />19th AMIC Annual Conference “Technology and Culture: Communication Connectors and Dividers”
                    </p>
                    <img className="project-img" src="/youth-engagement/picture3.png" />
                    <p>21-23 June 2010 Suntec, Singapore</p>
                </li>
                <li>

                    <p>Session on “Youth, ICTs, And Civil Engagement in Asia: A Comparative Approach”
                        <br />International Association of Media and Communication Research Conference 
                    </p>
                    <img className="project-img" src="/youth-engagement/picture4.png" />
                    <p>15-20 July 2012, South Africa</p>

                </li>
            </ol>

            <h2 className="subtitle">Publications</h2>
            <ol>
                <li>
                    Zhang, W. (November, 2020).
                    <em>
                        I Am Not Interested in Politics!: A Temporal Comparison of Youth
                        between 2011 and 2020
                    </em>
                    . Paper presented at the online workshop on “Youth, News, and Democratic
                    Engagement”, International Journal of Press/Politics.
                </li>
                <li>
                    Zhang, W. &amp; Lallana, E. (2013). Editorial of “Youth, ICTs, and Civic
                    Engagement in Asia”. <em>International Communication Gazette, 75</em>(3),
                    249-252.<strong> </strong><strong></strong>
                </li>
                <li>
                    Zhang, W. (2013).
                    <a href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/weiyu.pdf">
                        Redefining youth activism through digital technology in Singapore
                    </a>
                . <em>International Communication Gazette, 75</em>(3), 253-270. [slides]  
                    <br />a. Reprinted in <em>Youth Culture and Activism in Southeast Asia</em>.
                    ISEAS, 2015.
                </li>


                <li>
                    Zhang, W. &amp; David, C. (2012). Youth engagement and ICTs in Southeast
                    Asia: Reflections on emerging trends. In M. M. Skoric, M. Sachs, &amp; P.
                Parycek (Eds.), <em>Proceedings of CeDEM Asia 2012</em>, Singapore.  
                </li>

            </ol>

            <h2 className="subtitle">Reports</h2>
            <ol className="youth-engagement-tools">
                <li>
                    <h3 className="h3title">YOUTH, ICTs AND POLITICAL ENGAGEMENT IN ASIA FINAL REPORT</h3>
                    <a href="/youth-engagement/final_tech_report.pdf" download><Button className="download-report">Download</Button></a>
                    <img className="project-img" src="/youth-engagement/picture5.png" />
                </li>
                <li>
                    <h3 className="h3title">COUNTRY BACKGROUND REPORT</h3>
                    <a href="/youth-engagement/Country Background Report.doc" download><Button className="download-report">Download</Button></a>
                    <img className="project-img" src="/youth-engagement/picture6.png" />
                </li>
            </ol>

            <h2 className="subtitle">Presentations</h2>
            <ol className="youth-engagement-tools">
                <li>
                    Zhang, W. (2011).
                    <em>
                        Change, Youth, Failure, Excellence (<strong>keynote lecture</strong>)
                    </em>
                    , the 22<sup>nd</sup> International Youth Forum, Ministry of Gender
                    Equality and Family and National Council of Youth Organizations in Korea,
                    August 18<sup>th</sup>, 2011.
                </li>
                <li>
                    Zhang, W. (2010). <em>Urban Youth, ICTs, and Civic Engagement in Asia</em>,
                East Asia Institute, National University of Singapore, September 13    <sup>th</sup>, 2010.
                </li>
                <li>
                Zhang, W. (2010).    <em>Youth Engagement and ICTs in Asia: A Comparative Approach</em>, The
                    Joint Summer School by Chinese University of Communication, Chinese
                    University of Hong Kong, University of Westminster and University of
                    Pennsylvania, Chinese University of Communication, July 8<sup>th</sup>,
                    2010.
                </li>

            </ol>

            <h2 className="subtitle">Partner Institutions</h2>
            <p>
                This research was funded by NUS-University of Sydney Partnership Fund (R-124-000-102-133), 
                International Development Research Center, Canada through ideacorp, the Philippines 
                (R-124-000-037-597) and NUS’ FASS start-up grant (R-124-000-034-133). Any opinions, 
                findings and conclusions or recommendations expressed on this website are those of the 
                authors and do not necessarily reflect the views of the funder.
            </p>

            <Row xs={1} sm={2} lg={4}>
            <img className="partner-img" src="/youth-engagement/universityOfSdyney.png"></img>
            <img className="partner-img" src="/youth-engagement/UniversityOfNottingham.png"></img>
            <img className="partner-img" src="/youth-engagement/universityOfChittagong.png"></img>
            <img className="partner-img" src="/youth-engagement/universityOfThePhillippines.png"></img>
            </Row>

            
            <Row xs={1} sm={2} lg={4}>
            <img className="partner-img" src="/youth-engagement/Indian_Institute_of_Technology_Delhi_Logo.svg"></img>
            </Row>


        </Col>
        </Container>
    );
  }
}