import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OnlineDeliberation.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import picture1 from "../assets/online-deliberation/1.png"
import picture2 from "../assets/online-deliberation/2.png"
import picture3 from "../assets/online-deliberation/3.png"
import picture4 from "../assets/online-deliberation/4.png"
import picture5 from "../assets/online-deliberation/5.png"
import picture6 from "../assets/online-deliberation/6.png"
import picture7 from "../assets/online-deliberation/7.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class OnlineDeliberation extends React.Component {
  render() {
    return (
        <Container className="online-deliberation">
        <Col xs={12} md={10} lg={8} className="online-deliberation-width">
            <h1 className="title">Project - Online Deliberation</h1>
            <a href="/online-deliberation/Report-on-Preliminary-Findings.pdf" download><Button className="download-report">Download</Button></a>
            <h2 className="subtitle"></h2>
            <p>
                Are you concerned about the rising living cost in Singapore? The over-crowded MRT trains? 
                The difficulty to find jobs due to competitions from foreign talents? Or the dilution of the Singapore identity and culture? 
                If yes, you are not alone. Many Singaporeans share the same worries as you do. 
                You may have sensed that during your casual conversations with your family members, your friends and colleagues, 
                or random encounters on the Internet. But your everyday social circle is limited and it may not allow you to 
                fully know what is going on in your fellow citizens’ minds. 
                Do you want to know how other Singaporeans think about these problems and whether they agree with you? 
                Do you like to talk to these fellow Singaporeans directly and discover why they hold different views from what you do? 
                And eventually after knowing what others think, do you wish to have a voice in shaping governmental policies regarding 
                these issues? Our research project is set to fulfill these possibilities, 
                through building a digital platform that will be open to a group of Singaporeans who come from all walks of lives 
                and allow them to discuss these issues with each other. 
            </p>
            <img className="project-img" src={picture1}></img>

            <h2 className="subtitle">How it worked</h2>
            <img className="project-img" src={picture2}></img>

            <h2 className="subtitle">What The Experience Was Like</h2>
            <p>
                Now you probably wonder how the digital platform actually “looks and feels” 
                should you be able to have the chance to participate. 
                We had a few technological features built into the digital platform that you may find interesting.     
            </p>
            <img className="project-img" src={picture3}></img>
            <p>
                See more details in this Report on Preliminary Findings. 
            </p>

            <h2 className="subtitle">Collaborators</h2>
            <ul>
                <li><a href="http://www.coms.hkbu.edu.hk/faculty-staff/faculty/leannechang/">Dr. Leanne Chang</a> - Associate Professor, Hong Kong Baptist University</li>
                <li><a href="https://lkyspp.nus.edu.sg/ips/about-us/staff-directory/soon-carol">Dr. Carol Soon</a> - Senior Research Fellow, Institute of Policy Studies, NUS</li>
                <li><a href="https://shengdongzhao.com/newSite/">Dr. Shengdong Zhao</a> - Associate Professor, School of Computing, NUS</li>
                <li><a href="https://istd.sutd.edu.sg/people/faculty/simon-perrault#biography">Dr. Simon Perrault</a> - Postdoc Researcher</li>
                <li>Joseph Matthias Goh - Design Researcher</li>
                <li>Jeffrey Effendy- Design Researcher</li>
                <li><a href="https://www.linkedin.com/in/samsontmr/">Samson Tan</a> - Data Scientist</li>
                <li><a href="https://www.linkedin.com/in/sanjumenonp/">Sanju Menon</a> - Research Assistant</li>
                <li><a href="https://www.asc.upenn.edu/people/graduate-student/tian-yang">Tian Yang</a> - Research Assistant</li>
                <li>Yang Wang - Research Assistant</li>
                <li>Jingjing Liang - Research Assistant</li>
                <li>Naditha Davies - Research Assistant</li>
                <li>Chengting Mao - Research Assistant</li>
                <li>Sabrina Mercy Anthony - Research Assistant</li>
                <li>Andrea Nehl Parinas Caliwag - Research Assistant</li>
            </ul>

            <h2 className="subtitle">Publications</h2>
            <ol>
            <li>
                Zhang W., Yang, T., &amp; Perrault, S. (2021, May).
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/chi2021-draft-camera-ready-final-highlighted.pdf"
                >
                    Nudge for reflection: More than Just a Channel to Political Knowledge
                </a>
                . In
                <em>
                    Proceedings of the SIGCHI Conference Full Papers on Human Factors in
                    Computing Systems (CHI '21)
                </em>
                . ACM. [slides]
            </li>
            <li>
                Zhang W. &amp; Davies T. &amp; Przybylska A., (2021).
                <a href="https://delibdemjournal.org/article/id/988/">
                    Online Deliberation and #CivicTech: A Symposium
                </a>
                . <em>Journal of Deliberative Democracy, 17</em>(1), 76-77.
            </li>
            <li>
                Chang L. &amp; Zhang W., (2021).
                <a href="https://delibdemjournal.org/article/id/968/">
                    Procedural Justice in Online Deliberation: Theoretical Explanations and
                    Empirical Findings
                </a>
                . <em>Journal of Deliberative Democracy, 17</em>(1), 105-117. [slides]
            </li>
            <li>
                Yang T. &amp; Wang Y. &amp; Zhang W., (2021).
                <a href="https://delibdemjournal.org/article/id/964/">
                    Effects of Knowledge and Reflection in Intrapersonal Deliberation
                </a>
                . <em>Journal of Deliberative Democracy, 17</em>(1), 134-148. [slides]
            </li>
            <li>
                Chen, Z &amp; Zhang, W. (2020),
                <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0736585320300769"
                >
                    Bracketing or Reinforcing?: Socio-economic Status, Network Power, and
                    Online Deliberation
                </a>
                . <em>T</em><em>elematics &amp; Informatics, </em>52, Article 101417.
                [slides]
            </li>
            <li>
                Zhang, W., Xi, Y., &amp; Chen, A. (2020).
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/nms880520_rev2_wz.pdf"
                >
                    Why do replies appear? A multi-level event history analysis of online
                    policy discussions
                </a>
                . <em>New Media &amp; Society, 22</em> (8), 1484-1504. [slides]
            </li>
            <li>
                Menon, S., Zhang, W. &amp; Perrault, S. (2020).
                <a href="https://arxiv.org/ftp/arxiv/papers/2001/2001.04612.pdf">
                    Nudge for Deliberativeness: How Interface Features Influence Online
                    Discourses.
                </a>
                In
                <em>
                    Proceedings of the SIGCHI Conference Full Papers on Human Factors in
                    Computing Systems (CHI ’20)
                </em>
                . ACM. [slides]
            </li>
            <li>
                Zhang, W. &amp; Yang, T. (2020).
                <a href="https://link.springer.com/article/10.1057/s41269-018-0112-2">
                    The interaction between perceived procedural fairness and perceived
                    disagreement in deliberation
                </a>
                .<em> Acta Politica, 55</em>, 199–220. [slides]
            </li>
            <li>
                Perrault, S. &amp; Zhang, W. (2019).
                <a href="https://arxiv.org/abs/1901.10720">
                    Effects of Moderation and Opinion Heterogeneity on Attitude towards the
                    Online Deliberation Process..
                </a>
                <em> </em>
                In
                <em>
                    Proceedings of the SIGCHI Conference Full Papers on Human Factors in
                    Computing Systems (CHI '19).
                </em>
                ACM. [slides]
            </li>
            <li>
                Zhang, W., &amp; Soon, C (2017).
                <a
                    href="http://onlinedeliberation.org/wp-content/uploads/2016/10/CeDEM2017_weiyu-and-carol-CS.pdf"
                >
                    The Main and Spillover Effects of Online Deliberation: Changes in
                    opinions, informational media use and political activities
                </a>
                . In <em>Proceedings of CeDEM 2017</em>, Danube University Krems, Austria.
                [slides]
            </li>
            <li>
                Zhang, W. (2015).
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/proof_procedural_fairness_in_deliberation.pdf"
                >
                    Perceived procedural fairness in deliberation: Predictors and effects
                </a>
                .<em> Communication Research</em>. 42(3), 345-364. [slides]
            </li>
            <li>
                Zhang, W. (2015).    <u>The disenfranchised and eDeliberation: Beyond access</u>. In Coleman,
                S., Przybylska, A., &amp; Sintomer, Y. (Eds.),    <em>Deliberation and Democracy: Innovative Processes and Institutions</em>,
                    pp. 57-82. Frankfurt, Germany: Peter Lang.
            </li>
            <li>
                Lu, X., Zhang, W., Przybylska, A, De Liddo, A., Convertino, G., Davies,
                T., &amp; Klein, M. (2015).
                <a
                    href="http://onlinedeliberation.org/wp-content/uploads/assets/SIGCHI2015_online%20deliberation_final.pdf"
                >
                    Design for Online Deliberative Processes and Technologies: Towards a
                    Multidisciplinary Research Agenda
                </a>
                . In <em>Proceedings of CHI 2015 (Workshop)</em>, Seoul, South Korea.
            </li>
            <li>
                Menon, S. &amp; Zhang, W. (2014).<u> </u>
                <a
                    href="http://onlinedeliberation.org/wp-content/uploads/assets/CeDEM2014.pdf"
                >
                    A value-based design approach for online deliberation
                </a>
            . In M. M. Skoric, P. Parycek, &amp; M. Sachs (Eds.), In    <em>Proceedings of CeDEM Asia 2014</em>, pp.81-96. Hong Kong, China.
            </li>
            <li>
                Zhang, W. &amp; Chang, L. (2014).
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/perceived_speech_conditions_of_everyday_talk_r3.doc"
                >
                    Perceived Speech Conditions and Disagreement of Everyday Talk: A
                    Proceduralist Perspective
                </a>
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/perceived_speech_conditions_of_everyday_talk_r3.doc"
                >
                    of
                </a>
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/perceived_speech_conditions_of_everyday_talk_r3.doc"
                >
                    Citizen Deliberation
                </a>
                .<strong> </strong><em>Communication Theory, 24</em>(2), 124-145. [slides]
            </li>
            <li>
                Chang, L., Jacobson, T., &amp; Zhang, W. (2013).
                <a href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/joc_round3.pdf">
                    A Communicative Action Approach to Evaluating Citizen Support for a
                    Government’s Smoking Policies
                </a>
                <em>. Journal of Communication, 63</em>
                (6), 1153-1174. [slides]
            </li>
            <li>
                Zhang, W., Cao, X., &amp; Trah, M. N. (2013).
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/structural_features_and_deliberative_quality_uploaded.pdf"
                >
                    The structural features and the deliberative quality of online
                    discussions
                </a>
                . <em>Telematics &amp; Informatics, 30</em>(2), 74-86. [slides]
            </li>
            <li>
                Zhang, W. (2010).
                <a
                    href="https://www.weiyuzhang.net/uploads/2/2/2/7/222747/technical_capital_and_online_deliberation.pdf"
                >
                    Technical capital and participatory inequality in eDeliberation: An
                    actor-network analysis
                </a>
                . <em>Information, Communication &amp; Society, 13</em>(7), 1019-1039.
               = [slides]
            </li>
            
            </ol>

            <h2 className="subtitle">Tools</h2>
            <ol className="online-deliberation-tools">
                <li>
                    <h3 className="h3title">Platform Demo</h3>
                    <video src="video/Tutorial Video(with opening).mp4" width="80%" height="auto" controls="controls"/>
                </li>
                <li>
                    <h3 className="h3title">Graph Editor</h3>
                    <a href="/online-deliberation/Report-on-Preliminary-Findings.pdf" download><Button className="download-report">Download</Button></a>
                    <img className="project-img" src={picture5}></img>
                </li>

                <li>
                    <h3 className="h3title">Policy Maker Interface Demo</h3>
                    <a href="/online-deliberation/PolicyMakers-Guide-website.pdf" download><Button className="download-report">Download</Button></a>
                    <img className="project-img" src={picture6}></img>
                </li>

                <li>
                    <h3 className="h3title">Sentiment Analysis Demo</h3>
                    <a href="/online-deliberation/Demographic on Sentiment.pdf" download><Button className="download-report">Download</Button></a>
                    <img className="project-img" src={picture7}></img>
                </li>
            </ol>

            <h2 className="subtitle">Partner Institutions</h2>
            <p>
                This research was funded by Singapore’s Ministry of Education Tier 2 grant (MOE2013-T2-1-105). 
                Any opinions, findings and conclusions or recommendations expressed on this website are those of the 
                authors and do not necessarily reflect the views of the funder.
            </p>

            <img className="partner-img" src="online-deliberation/Ministry_of_Education_(Singapore)_logo.png"></img>
            <img className="partner-img" src="online-deliberation/NUS HCI LAB.png"></img>
            <img className="partner-img" src="online-deliberation/IPS.png"></img>
            <img className="partner-img" src="online-deliberation/NPTD.png"></img>




        </Col>
        </Container>
    );
  }
}