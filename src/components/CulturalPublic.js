import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CulturalPublic.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class CulturalPublics extends React.Component {
  render() {
    return (
        <Container className="cultural-publics">
        <Col xs={12} md={10} lg={8} className="cultural-publics-width">
            <h1 className="title" style={{width:"100%"}}>Project - Cultural Publics</h1>
            {/* <a href="/cultural-publics/Report-on-Preliminary-Findings.pdf" download><Button className="download-report">Download</Button></a> */}
            <h2 className="subtitle"></h2>
            <h4>This research program focuses on cultural publics in the era of network society. </h4>
            <img className="project-img" src="/cultural-publics/picture1.png" style={{width:"50%"}}/>
            <p>
            The formation of publics has been re-written by the mediation of information and communication 
            technologies in the era of network society. Cultural publics originated from popular culture 
            fans and celebrities have increasingly taken the center stage of active citizenship. Shared 
            among the diverse groups of nowadays cultural publics are the rooting in cultural identity, 
            and the shaping role played by new media. The logic behind algorithm-driven traffic media, 
            the financial move made by new media companies, and the user communities’ negotiation 
            present a complex web of actors in contesting cultural publics. 
            </p>

            {/* <img className="project-img" src="/cultural-publics/picture2.png" /> */}
            <p>
            Political culture varies among countries, due to their unique AND interwoven historical 
            trajectories. Public engagement in activities such as political talk, elections, protests 
            must be understood within the time- and location-bounded contexts. Historically, authoritarian 
            orientation is salient in some countries than others; elections are indigenous to some cultures 
            but imported to others; participatory acts, either online or offline, contain widely different 
            meanings. The influence of political culture, even in a digital age, is best made evident if 
            we take a comparative approach to examine the South against the South. 
            </p>


            <h2 className="subtitle">Collaborators</h2>
            <ul>
                <li><a href="https://lkyspp.nus.edu.sg/ips/about-us/staff-directory/tan-tarn-how">Tan Tarn How</a> - PI; Adjunct Senior Research Fellow, Institute of Policy Studies, NUS</li>
                <li><a href="https://lkyspp.nus.edu.sg/ips/about-us/staff-directory/soon-carol">Dr. Carol Soon</a> - PI; Senior Research Fellow, Institute of Policy Studies, NUS</li>
                <li><a href="https://discovery.nus.edu.sg/11678-lee-san-natalie-pang">Dr. Natalie Pang</a> - Co-PI; Senior Lecturer, CNM, NUS </li>
                <li><a href="https://www.rsis.edu.sg/profile/gulizar-haciyakupoglu/">Dr. Gulizar Haciyakupoglu</a>  - PhD Graduate, 2016; currently Research Fellow at Nanyang Technological University</li>
                <li><a href="http://www.fangkc.com/">Dr. Kecheng Fang</a>- Collaborator; currently Assistant Professor, Chinese University of Hong Kong</li>
                <li><a href="http://faculty.hitsz.edu.cn/maochengting">Dr. Chengting Mao</a> - Research Assistant; currently Assistant Professor, Harbin Institute of Technology (Shenzhen Campus)</li>
                <li><a href="https://comm.uky.edu/people/wang">Dr. Rong Wang</a> - Research Assistant; currently Assistant Professor, Department of Communication, University of Kentucky</li>
                <li><a href="https://www.researchgate.net/profile/Anfan-Chen">Dr. Anfan Chen</a> - Visiting PhD Student, Tsinghua University, 2019; currently PostDoc Researcher at University of Science and Technology of China</li>
                <li>Zhuo Chen - Research Assistant, PhD Candidate</li>
                <li>Yipeng Xi - Research Assistant, PhD Candidate</li>
                <li>Tong Tong - Visiting PhD Student, Tsinghua University</li>
            </ul>
            

            <h2 className="subtitle">Publications</h2>
            <ol>
                <li>
                    Xi, Y., Chen, A., &amp; Zhang, W. (online first). <a href="http://dx.doi.org/10.1177/08944393211012267">
                        The expression of cultural identities in Hong Kong’s Anti-Extradition
                        Law Amendment Bill Movement: A semantic network analysis of tweets
                    </a>
                    . <em>Social Science Computer Review. </em>[video]<em></em>
                </li>
                <li>
                    Zhang, W., Chen, Z., &amp; Xi, Y. (2021). <a href="https://doi.org/10.1080/17544750.2020.1830422">
                        Traffic media: how algorithmic imaginations and practices change
                        content production
                    </a>
                    . <em>Chinese Journal of Communication, 14(</em>1). 58-74. 
                    <video src="video/3D_Weiyu_Zhang (with opening).mp4" width="80%" height="auto" controls="controls"/>

                </li>
                <li>
                    Zhang, W., &amp; Neyazi, T. A. (2020). <a href="https://www.tandfonline.com/doi/pdf/10.1080/23808985.2019.1667852">
                        Communication and technology theories from the South: the cases of
                        China and India.
                    </a>
                    <em>Annals of the International Communication Association, 44</em>
                    (1), 34-49. [video]
                </li>
                <li>
                    Zhang, L. &amp; Zhang, W. (2018). <a
                        href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/profits_or_public_interest_dilemma_in_the_business_of_weibo_togmc.pdf"
                    >
                        The influence of monetization on the public functions of Weibo
                    </a>
                    , <em>Global Media and China, 3</em>(3), 195-212.
                </li>
                <li>
                    Zhang, W. (2016). <a
                        href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/social_media_and_elections_2011_vs_2015_proof.pdf"
                    >
                        Social media and elections in Singapore: comparing 2011 and 2015
                    </a>
                    . <em>Chinese Journal of Communication, 9</em>(4), 367-384.
                </li>
                <li>
                    Zhang, W. &amp; Sabrina, M. Anthony. (2016). <u>
                        Alternative tweeting: A comparison of frames in Twitter’s political
                        discourse and mainstream newspaper coverage on Singapore General
                        Elections 2011
                    </u>
                    . In M. Adria &amp; Y. Mao (Eds.),
                    <em>
                        Handbook of Research on Citizen Engagement and Public Participation in
                        the Era of New Media
                    </em>
                    . IGI Global.
                </li>
                <li>
                    Zhang, W. (2016). <a
                        href="http://www.amazon.com/Internet-New-Social-Formation-China-ebook/dp/B01DBY49VC/ref=mt_kindle?_encoding=UTF8&amp;me="
                    >
                        The Internet and New Social Formation in China: Fandom Publics in the
                        Making
                    </a>
                    . London and New York: Routledge. [<a href="https://www.weiyuzhang.net/fandom-publics.html">
                        link to book website
                    </a>
                    ]
                </li>
                <li>
                    Zhang, W. &amp; Pang, N. (2016). <u>The Internet and social media</u>. In
                Lee, T., &amp; Tan, K. (Eds.),    <em>Change in voting: Singapore’s 2015 General Election</em>. Singapore:
                    Ethos Books.
                </li>
                <li>
                    Haciyakupoglu, G. &amp; Zhang, W. (2015). <a href="http://onlinelibrary.wiley.com/doi/10.1111/jcc4.12121/full">
                        Social media and trust during the Gezi Protests in Turkey
                    </a>
                    . <em>Journal of Computer Mediated Communication, 40</em>(2), 250-266.
                </li>
                <li>
                Zhang, W. (2015).    <u>The silence of majority: Political talk during 2011 election time</u>.
                In Tan, T. H., Mahizhnan, A., &amp; Ang, P. H. (Eds.),    <em>Battle for hearts and minds: New media and elections in Singapore</em>.
                    pp.227-246. Singapore: World Scientific.
                </li>
                <li>
                    Zhang, W &amp; Chib, A. (2014). <a
                        href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/internet_studies_china_and_india_final_version.pdf"
                    >
                        Internet studies and development discourses: The cases of China and
                        India
                    </a>
                . <em>Information Technology for Development, 20</em>(4), 324-338    <em>. </em>
                </li>
                <li>
                    Zhang, W. (2014).
                    <strong> <a
                            href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/forhong_draft_weiyu_zhang_2014.pdf"
                        >
                            新科技对政治传播的影响 The influence of new technologies on political
                            communication
                        </a>
                    </strong> (<strong>中文</strong><strong> </strong>in Chinese). In J. Hong (Ed.),    <em>New trends in communication studies</em>. pp.732-746. Beijing, China:
                    Tsinghua University Press.
                </li>
                <li>
                    Zhang, W. &amp; Mao, C. (2013). <a
                        href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/fan_activism_final.pdf"
                    >
                        Fan activism sustained and challenged: Participatory culture in Chinese
                        online translation communities
                    </a>
                    . <em>Chinese Journal of Communication, 6</em>(1), 45-61.
                </li>
                <li>
                    Zhang, W. (2012). <a
                        href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/chapter_9_proof.pdf"
                    >
                        Virtual communities as subaltern public spheres: A theoretical
                        development and an application to the Chinese Internet
                    </a>
                    . In H. Li (Ed.),
                    <em>
                        Virtual community participation and motivation: Cross-disciplinary
                        theories
                    </em>
                    . Pp.143-161. Hershey, PA: IGI Global.
                </li>
                <li>
                    Zhang, W. (2012). <a
                        href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/political_news_use_political_discussion_and_authrotarianism_oct17.pdf"
                    >
                        The Effects of Political News Use, Political Discussion and
                        Authoritarian Orientation on Political Participation: Evidences from
                        Singapore and Taiwan
                    </a>
                    . <em>Asian Journal of Communication, 22</em>(5): 474-492.
                </li>
                <li>
                    Zhang, W., &amp; Wang, R. (2010). <a
                        href="http://firstmonday.org/htbin/cgiwrap/bin/ojs/index.php/fm/article/view/2836/2582"
                    >
                        Interest-oriented versus relationship-oriented social network sites in
                        China
                    </a>
                    <em>. First Monday, 15</em>
                    (8).
                </li>
                <li>
                    Zhang, W. (2006). <a href="http://javnost-thepublic.org/article/pdf/2006/2/3/">
                        Constructing and disseminating subaltern public discourses in China
                    </a>
                    . <em>Javnost-The Public, 13</em>(2), 41-64.
                </li>            
            </ol>
            
            <h2 className="subtitle">Partner Institutions</h2>
            <p>
            This research was funded by AcRF Tier 1 Grant (R-124-000-095-115), NUS’ FASS Book 
            Grant (R-124-000-066-133) and a series of research grants from Institute of Policy 
            Studies led by Tan Tarn How and Dr. Carol Soon. Any opinions, findings and conclusions or 
            recommendations expressed on this website are those of the authors and do not necessarily 
            reflect the views of the funder.
            </p>

            <a href="https://lkyspp.nus.edu.sg/ips"><img className="partner-img" src="cultural-publics/IPS.png"></img></a>
            <a href="https://www.upenn.edu/"><img className="partner-img" src="cultural-publics/UP.png"></img></a>
            <a href="https://www.studyabroad.sg/murdoch-university-2/?gclid=CjwKCAjwlrqHBhByEiwAnLmYUH0SarDmuRHWL6MTLkCJzu0jbnyXtPG2fhV-zhaicdqB-qQNWDQ2WRoCJNIQAvD_BwE"><img className="partner-img" src="cultural-publics/MU.png"></img></a>




        </Col>
        </Container>
    );
  }
}