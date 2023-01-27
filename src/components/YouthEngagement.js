import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./YouthEngagement.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

export default class YouthEngagement extends React.Component {
  render() {
    return (
        <Container className="youth-engagement">
        <Helmet>
            <title>Youth Engagement | CivicTech Lab</title>
        </Helmet>
        <Col xs={12} md={10} lg={8} className="youth-engagement-width">
            <h1 className="title" style={{width:"100%"}}>Project - Youth Engagement</h1>
            {/* <a href="/youth-engagement/final_tech_report.pdf" download><Button className="download-report">Download</Button></a> */}
            <h2 className="subtitle"></h2>
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
            <p><a href="/youth-engagement/final_tech_report.pdf" download>See more details in this Final Technical Report.</a></p>


            <h2 className="subtitle">Collaborators</h2>
            <ul>
                <li><a href="https://www.sydney.edu.au/arts/about/our-people/academic-staff/murray-print.html">Dr. Murray Print</a> - Co-PI; Professor, Faculty of Arts and Social Sciences, University of Sydney</li>
                <li><a href="https://www.sydney.edu.au/arts/about/our-people/academic-staff/yeowtong-chia.html">Dr. Yeow-Tong Chia </a> - Collaborator; Senior Lecturer, Faculty of Arts and Social Sciences, University of Sydney</li>
                <li><a href="https://www.sydney.edu.au/arts/about/our-people/academic-staff/jiaying-neoh.html">Dr. Jia Ying Neo</a> - Collaborator; Lecturer, Faculty of Arts and Social Sciences, University of Sydney</li>
                <li><a href="https://www.nottingham.edu.my/Social-Sciences/People/joanne.lim">Dr. Joanne Lim Bee Yin</a> - Co-PI; Associate Professor, University of Nottingham, Malaysia</li>
                <li><a href="https://www.linkedin.com/in/mohammad-sahid-ullah-6a948912/?originalSubdomain=bd">Dr. Sahid Ullah</a> - Co-PI; Professor, University of Chittagong, Bangladesh</li>
                <li><a href="https://www.linkedin.com/in/clarissa-david-5b8a851/?originalSubdomain=ph">Dr. Clarissa David</a> - Co-PI; Professor, University of the Philippines </li>
                <li><a href="https://web.iitd.ac.in/~vignes/">Dr. P. Vigneswara Ilavarasan</a> - Co-PI; Professor, Indian Institute of Technology Delhi </li>

            </ul>

            <h2 className="subtitle">Publications</h2>
            <ol>
                <li>
                Zhang, W., Chen, Z., Chia, Y-T., & Neoh, J. Y. (2022). Rethinking civic education in the 
                digital era: How media, school, and young people negotiate the meaning of citizenship. 
                International Communication Gazette, 84 (4), 287-305. 
                </li>
                <li>
                Zhang, W. (2022). Political disengagement among youth: A comparison between 2011 and 2020. 
                Frontiers in Psychology. <a href='https://doi-org/10.1177%2F17480485221094101'>https://doi.org/10.3389/fpsyg.2022.809432</a>
                </li>
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
                    Zhang, W. 
                    (2013). <a href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/weiyu.pdf">
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
                    <h5 className="h3title">YOUTH, ICTs AND POLITICAL ENGAGEMENT IN ASIA FINAL REPORT</h5>
                    <a href="/youth-engagement/final_tech_report.pdf" download><Button className="download-report">Download</Button></a>
                    {/* <img className="project-img" src="youth-engagement/picture5.png" /> */}
                </li>
                <br />
                <li>
                    <h5 className="h3title">COUNTRY BACKGROUND REPORT</h5>
                    <a href="/youth-engagement/Country Background Report.doc" download><Button className="download-report">Download</Button></a>
                    {/* <img className="project-img" src="youth-engagement/picture6.png" /> */}
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
            
            <Row sm={2} md={2} lg={3}>
            <a href="https://www.idrc.ca/en"><img className="partner-img" src="/youth-engagement/IDRC.png" style={{width:"250px"}}></img></a>
            <a href="https://www.sydney.edu.au/"><img className="partner-img" src="/youth-engagement/universityOfSdyney.png" style={{width:"250px"}}></img></a>
            <br/>
            <a href="https://www.nottingham.edu.my/index.aspx"><img className="partner-img" src="/youth-engagement/UniversityOfNottingham.png" style={{width:"250px"}}></img></a>
            <a href="https://cu.ac.bd/"><img className="partner-img" src="/youth-engagement/universityOfChittagong.png" style={{width:"100px"}}></img></a>
            <br/>
            <a href="https://up.edu.ph/"><img className="partner-img" src="/youth-engagement/universityOfThePhillippines.png"></img> </a>
            <a href="https://home.iitd.ac.in/"><img className="partner-img" src="/youth-engagement/Indian_Institute_of_Technology_Delhi_Logo.svg"></img></a>
            </Row>

        </Col>
        </Container>
    );
  }
}