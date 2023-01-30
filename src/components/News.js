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
import { Helmet } from 'react-helmet';

export default class News extends React.Component {

    constructor() {
        super();
        this.state = {
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
        "cultural-publics-news-content",
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
        <Helmet>
            <title>News | CivicTech Lab</title>
        </Helmet>

        <Col xs={12} md={10} lg={8} className="news-width">
            <h1 className="news-title">What's New</h1>

            <ToggleButtonGroup className="button-list" type="checkbox" value={value} onChange={this.handleChange}>
                <ToggleButton className="civic-tech-news civic-tech-button" value={1} active>Civic Tech</ToggleButton>
                <ToggleButton className="citizen-science-news citizen-science-button" value={2} active>Citizen Science</ToggleButton>
                <ToggleButton className="online-deliberation-news online-deliberation-button" value={3} active>Online Deliberation</ToggleButton>
                <ToggleButton className="cultural-publics-news cultural-publics-button" value={4} active>Cultural Publics</ToggleButton>
                <ToggleButton className="youth-engagement-news youth-engagement-button" value={5} active>Youth Engagemnet</ToggleButton>
            </ToggleButtonGroup>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["gov-tech", "events", "presentations"]} date="November 23, 2022" title="Invited Talk on “Online Deliberation Singapore”">
                <p>
                Dr. Weiyu Zhang joined a panel “From mini publics to maxi publics” at the D³ Congress (Online Congress on Digital Democracy) to present the Online Deliberation Singapore project. 
                Along with experts from Czech Republic, Finland, and Germany, the panel discusses how to scale high-quality deliberation with digital means. Dr Zhang made the following 
                suggestions for the digital turn of the Deliberation Wave: 

                <ul>
                    <li>
                    Random sampling of population supplemented by purposive sampling of minority groups
                    </li>
                    <li>
                    Leveraging existing technology (e.g., Zoom)
                    </li>
                    <li>
                    Integrating outcomes of online deliberation into institution of policy making
                    </li>
                </ul>
                </p>
                <img className="project-img" src="/news/picture19.png" />            
            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["gov-tech", "events", "presentations"]} date="Oct 26, 2022" title="Keynote Speech for the Asia Foundation">
                <p>
                In this keynote address for <a href='https://www.linkedin.com/company/the-asia-foundation/'>The Asia Foundation</a> online event, <b>At the Intersection: Smart <a href='https://www.linkedin.com/feed/hashtag/?keywords=inclusive&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6999192501983084544'>#Inclusive</a> Cities in Southeast Asia</b>, 
                Dr Weiyu Zhang used the evolving <a href='https://www.linkedin.com/feed/hashtag/?keywords=tracetogether&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6999192501983084544'>#tracetogether</a> technology 
                to illustrate the need to involve citizens (non-experts) in <a href='https://www.linkedin.com/feed/hashtag/?keywords=smartcity&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6999192501983084544'>#smartcity</a> initiatives. Dr Zhang made the following three major points:                

                <ol>
                    <li>
                    Smart cities are not smart if they are not inclusive. This is not just a moral judgment. It is a practical strategy.
                    </li>
                    <li>
                    Being inclusive means including people starting from the problem formulation stage. The majority and minority groups have different views on what the problem is.
                    </li>
                    <li>
                    Let us use the two-step <a href='https://www.linkedin.com/feed/hashtag/?keywords=deliberation&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6999192501983084544'>#deliberation</a> method to be inclusive. Local CSOs such as the Penang Women’s Development Corporation are already doing the first step!
                    </li>
                </ol>
                
                Watch the 8-minute video here: 
                <br/>
                <a href='https://lnkd.in/gG_8Dcqf'>https://lnkd.in/gG_8Dcqf </a>

                </p>
                <img className="project-img" src="/news/picture18.png" />            
            
            </NewsComponent>

            
            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["gov-tech", "events", "presentations"]} date="July 28, 2022" title="Invited Talk for A*Star">
                <p>
                Dr. Weiyu Zhang delivered an invited talk on “Civic Tech: An interdisciplinary field” to the HTPO colleagues at A*Star. In this talk, Dr Zhang shared how technology can serve civic purposes. 
                A vivid discussion with A*Star scholars about how social sciences can contribute to our understanding of technology was held.
                </p>
                <img className="project-img" style={{height:'500px', width:'auto'}} src="/news/picture17.png" />            
            </NewsComponent>

            <NewsComponent className="citizen-science-news" class="citizen-science-news-content" tag="Citizen Science" subtags={["civic-tech", "events", "presentations"]} date="July 20, 2022" title="CivicTech Lab @ic2s2 2022">
                <p>
                The CivicTech Lab, in particular the team of Ms Huazhi Qin, Dr. Subhayan Mukerjee and 
                Dr. Weiyu Zhang, presented at the 2022 International Conference on Computational Social 
                Science (<a href='https://twitter.com/hashtag/ic2s2?src=hashtag_click'>ic2s2</a>) The study analyzes Facebook public pages’ posts on Covid-19 vaccines and 
                found that topics from topic modeling can be seen as sub-issues in Networked Agenda Setting; 
                approach vs withdrawal emotion may be better to understand sentiments’ impact on liking a post.
                </p>
                <img className="project-img" src="/news/picture16.png" />         

            </NewsComponent>

            <NewsComponent className="citizen-science-news" class="citizen-science-news-content" tag="Citizen Science" subtags={["civic-tech", "gov-tech", "events", "presentations"]} date="May 26-30, 2022" title="CivicTech Lab @ICA Annual Conference 2022">
                <p>
                The CivicTec Lab has a fruitful year at the annual conference of International Communication Association, 
                to be held in Paris, France. We have FIVE papers accepted for presentation.
                <ol>
                    <li>Zhang, W., Wang, R., & Liu, H. (May 2022). The Influence of Moral Framing on Likes: Examining Covid Vaccination Posts by American Facebook Public Pages. <a href='https://www.youtube.com/watch?v=NKLvntYxA4w'>[video]</a></li>
                    <li>Zhang, W & Cheng, Y. (May 2022). Are Moral Foundations Universal? Theoretical Lessons from Developing m the Chinese Moral Foundation Dictionary <a href='https://www.youtube.com/watch?v=fih7aodH_pM'>[video]</a></li>
                    <li>Chen, Z. (May 2022). From the Trivial to the Tremendous: How Communication Technologies Shape the Organizing Mechanism of Online Activism. (top student paper)</li>
                    <li>Xi, Y. (May 2022). Adaptive Agency: The Satire Genre and the Origin of Satirical Thoughts in Contemporary China. (top student paper)</li>
                    <li>Xi, Y. (May 2022). The Historical Review of Satire Making and Sharing in China.</li>
                </ol>
                <b>Congratulations to ABD Mr. Yipeng Xi for his top paper awarded by the Language and Social Interaction Division. This award is one of the highest ranked papers of the division!</b>
                </p>
                <br/>
                <img className="project-img" style={{width:'250px'}} src="/news/picture14.png" />            
                <br/>
                <p>
                <b>Congratulations to ABD Mr Zhuo Chen, and his top student paper awarded by the Communciation and Technology Division. This is his second time to win a top student paper award. His first award was from the Political Communication Division of ICA in 2019.</b>
                </p>
                <br/>
                <img className="project-img" src="/news/picture15.png" />         

            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["civic-tech", "events", "FOSS", "community"]} date="April 8-9, 2022" title="CivicTech Lab @FOSSASIA Summit 2022">
                <p>
                The CivicTech Lab was honored to be the community partner for Free and Open Source Software Asia (FOSSASIA) Summit 2022! Our lab director Prof. Weiyu Zhang delivered a talk on “Civic Tech: An Asian Perspective” 
                and organized two interdisciplinary and cross-ectoral panels.
                <br />
                <br />
                <b>Panel one: “When Open Science Meets Open Source”</b>
                </p>
                <img className="project-img" src="/news/picture12.png" />            
                <p>
                The development of open science aligns with open source software and hardware in both 
                philosophy and practice. By keeping open, engineers can share codes and scientists can share 
                research design. There is a layer of ethical concern in keeping our works open – so that 
                transparency is ensured. However, there are costs and challenges in keeping open. Open codes 
                and data need storage spaces. Human labor is necessary to keep the open information in order. 
                How to keep codes secure and how to protect research subjects’ privacy in such open practices 
                need to be carefully thought through and painstakingly implemented. This panel brough both 
                scientists and FOSS practitioners into one virtual room, exchanging experience and inspiring 
                each other to address common concerns. The panelists discussed the principles and values 
                behind open science, as well as the barriers and challenges associated with open science.
                <br />
                Watch the panel recording HERE ! (starting from 2:40:00)
                <br />
                <br />
                <b>Panel two “Open Ethics”</b>
                </p>
                <img className="project-img" src="/news/picture13.png" />            
                <p>
                Transformative technology offers tremendous opportunities but raises ethical concerns and the 
                potential for harm. Technologies such as AI have been found to be potentially harming fairness, 
                accountability, transparency, ethics, and safety. Robotics introduces ethical challenges to the 
                very basic definition of being human. Moreover, the organizations around developing such 
                technologies need to build up their own ethics. Commercial entities have to take their social 
                responsibility to develop tech4good. Government agencies have to make policies and regulations 
                that confine the harm. Users have to reach the consensus about ethical usage of technology.
                <br />
                The FOSS community has a unique position in this global debate over tech ethics. Our panelists 
                talked about the ethical challenges such as data privacy and sovereignty related to Cloud 
                services, the root of ethical challenges being no clear agreement among people, and 
                weaponization of robotics. The open nature of FOSS requires licensing and monitoring of the 
                usage of the FOSS technology.   
                <br />
                Watch the panel recording <a href='https://www.youtube.com/watch?v=75dAcDSRrC8'>HERE</a> ! (starting from 06:20:00)
                </p>
            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["gov-tech", "events", "civic education", "AI education", "AI ethics"]} date="21 February 2022 and 1 May 2022" title="Presentation on “Civic AI Education”">
                <p>
                Dr. Weiyu Zhang delivered a presentation on “Civic AI Education: Embedding Civic Values in Learning Computer 
                Science” at the “NUS Symposium on Artificial Intelligence Education”. AI Education has focused on advancing 
                technologies but lagged in embedding civic values in the learning. Civic AI Education highlights the procedure 
                leading to the AI outcomes, by centering on a deliberation framework that emphasizes the participation of diverse 
                citizens who embrace civic values in the entire process of AI design, implementation and monitoring. The topics 
                covered in Civic AI Education include, but are not limited to, data privacy, data security, transparent AI, 
                explainable AI, AI fairness (or biases), and AI auditing.
                <br />
                <br />
                Watch the talk <a href='https://www.youtube.com/watch?v=8dK3dUKA4sg'>HERE</a>!
                <br />
                <br />
                A provocation paper based on the talk was accepted and presented at the 4th Annual Symposium on HCI Education 
                (EduCHI’22), April 30–May 1, 2022. Read the full paper <a href='https://educhi2022.hcilivingcurriculum.org/wp-content/uploads/2022/04/educhi2022-final12.pdf'>HERE</a> !
                </p>
                <img className="project-img" src="/news/picture11.png" />            
            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["gov-tech", "events", "Japan", "Singapore", "Asia"]} date="28 January 2022" title="HKBU Publlic lecture on “Civic Tech: An Asian Perspective”">
                <p>
                Dr. Weiyu Zhang delivered an invited public lecture on “Civic Tech: An Asian Perspective”, as a wrap up of 
                the two-year seed grant on Civic Tech in Asia. The public lecture covers our review of the field based on 
                ACM library literature and present two Asian case studies on Japan and Singapore.
                <br />
                <br />
                Watch the lecture <a href='https://www.youtube.com/watch?v=gXPuubrOtUo&feature=youtu.be'>HERE</a>!
                </p>
                <img className="project-img" src="/news/picture10.png" />            
            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["gov-tech", "events", "China", "Japan", "Singapore", "Indonesia", "Asia", "FOSS"]} date="17 November 2021" title="The 1st ICT4Good Asia workshop">
                <p>
                The inaugural ICT4Good/Asia Workshop, jointly hosted by the Civic Tech Lab, the Department of Communications 
                and New Media, and the Singapore Research Nexus at the National University of Singapore, was held on November 17, 
                2021. This workshop brings together researchers and practitioners pursuing ICT4Good in Asia to discuss the interdisciplinary 
                and cross-sectoral development of the field. The morning panels feature academic topics such as educating computer science 
                students about the civic, educating Singaporean youth about the technological, studying civic tech in human-computer interaction, 
                and developing civic tech in Japan and Taiwan. The afternoon panels gather ICT4Good practitioners in one virtual room, discussing 
                the various potentials of ICT4Good as a social movement, an industry, and a governance paradigm.
                </p>
                <img className="project-img" src="/news/picture9.png" />            
            </NewsComponent>

            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics" date="18 July 2021" subtags={["events", "India", "China", "Singapore", "Japan"]} title="IAMCR’s CPT co-organized the 1st CNM books week with CCA">
            <p>
            With the help of Dr. Jack Linchuan Qiu, the CPT section of IAMCR co-organized, along with Chinese 
            Communication Association, the Inaugural CNM Books Week at the National U of Singapore in mid-July 
            2021. The full event series covered 7 books, of which CCA co-branded 3 events on: The Other Digital 
            China (Jing Wang, 2019); Prototype Nation (Silvia Lindtner, 2020); and The Singapore Perspectives: 
            Politics (Natalie Pang and Shamil Zainuddin, 2021). All 7 talks’ e-posters can be accessed here:  <a href="https://www.dropbox.com/s/gnk8lqni6c8x2t5/Posters.pdf?dl=0">https://www.dropbox.com/s/gnk8lqni6c8x2t5/Posters.pdf?dl=0</a>
            </p>
                <img className="project-img" src="/news/picture7.png" />
            </NewsComponent>

            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics" date="27 June 2021" subtags={["presentations", "China"]} title="Presentation on “Traffic media in China”">
            <p>
            Dr. Weiyu Zhang delivered a presentation on “Traffic media: How algorithmic imaginations and practices change content production,” 
            during the 18th Chinese Internet Research Conference co-hosted by RMIT, Deakin Univ., QUT, USC Anneberg, and NUS. 
            </p> <br />
            <video src="video/3D_Weiyu_Zhang (with opening).mp4" width="80%" height="auto" controls="controls"/>

            </NewsComponent>

            <NewsComponent className="citizen-science-news" class="citizen-science-news-content" tag="Citizen Science" subtags={["op-ed", "presentations", "China"]} date="26 June 2021" title="Presentation on “Multiple Discourses of Gene Editing on Social Media”">
                <p>
                PhD student Xing Zhang made a presentation on “Multiple Discourses of Gene Editing on Social Media: 
                A Case Study of Chinese Gene-Edited Human Babies,” during the 18th Chinese Internet Research Conference 
                co-hosted by RMIT, Deakin Univ., QUT, USC Anneberg, and NUS. 
                </p>
                <video src="video/CIRC 2021_Xing(with opening).mp4" width="80%" height="auto" controls="controls"/>
            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["op-ed", "Singapore", "poland", "brazil"]} date="9 June 2021" title="Op-ed on “Online deliberation is civic tech”">
                <p>
                In this op-ed, Dr. Weiyu Zhang argues that “Deliberation needs to be both a means and an end to 
                designing civic technologies. As a means, civic technologists can learn about how citizens understand 
                a piece of technology through deliberation; as an end, only technological design that has involved 
                citizens in a deliberative process can have their social legitimacy. Deliberation should be central 
                in not only discussing but also designing critical technologies such as gene editing and artificial 
                intelligence.”
                </p>
                <img className="project-img" src="civic-tech/picture2.png" />            
            </NewsComponent>

            
            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics" date="27 May 2021" subtags={["presentations", "China", "Hong Kong"]} title="Presentation on “Cultural Identities in Hong Kong”">
            <p>
            PhD student Yipeng Xi made a presentation on “Nested Cultural Identities in Hong Kong’s Anti-Extradition 
            Law Amendment Bill Movement: A Semantic Network Analysis,” during the 71st Annual International Communication Association Conference. 
            </p> <br />
            <video src="video/The expression of cultural identities in Anti-ELABM (with opening).mp4" width="80%" height="auto" controls="controls"/>

            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["presentations", "Singapore"]} date="12 May 2021" title="Presentation on “The history of Civic Tech in Singapore” ">
                <p>
                Dr. Weiyu Zhang accepted the invitation from FASS, NUS’s Singapore Research Nexus 
                and made a presentation on “The history of Civic Tech in Singapore.” The virtual 
                event happened on May 12th, 2021 and attracted audiences from academia, government 
                agencies, and the public. [video]
                </p>
                <img className="project-img" src="civic-tech/picture4.png"/> 
                {/* <video src="Weiyu Zhang _ The history of Civic Tech in Singapore- An Actor-Network Analysis(with opening).mp4" width="80%" height="auto" controls="controls"/> */}

            </NewsComponent>
            
            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics" subtags={["presentations", "singapore"]}date="28 October 2020" title="IPS forum on Internet and Media Use in Singapore’s General Election 2020">
                <p>
                <a
                    href="https://lkyspp.nus.edu.sg/ips/news/details/ips-online-forum-on-internet-and-media-use-in-general-election-2020"
                >
                    A forum on <strong>
                        Internet and Media Use in Singapore’s General Election 2020
                    </strong>
                </a> was held online on October 8<sup>th</sup>, 2020
                    and open to the public. The research team was led by Dr. Carol Soon
                    from Institute of Policy Studies, NUS. The study was reported and
                    covered in local media: <a href="https://www.todayonline.com/singapore/ips-post-ge2020-forum-older-voters-catch-digital-use-parties-missed-crucial-online-signals">
                    TodayOnline ,</a> <a href="https://www.channelnewsasia.com/news/singapore/ge2020-swing-voters-pap-opposition-party-ips-survey-13230088">
                    Channel News Asia ,
                </a> <a href="https://mothership.sg/2020/10/swing-voters-ge2020/">Mothership ,</a> <a href="https://mp.weixin.qq.com/s/DSOOUADKhytd5c6ZfHTwHQ">Zaobao WeChat.</a>
                </p>
                <img className="project-img" src="cultural-publics/picture3.png" />
            </NewsComponent>




            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["presentations"]} date="15 October 2020" title="Presentation on “CivicTech For And By Citizens”">
                <p>
                In this position paper, a group of Singapore-based civic tech researchers argues that “While we 
                are progressing well towards the goal of ‘for the citizens,’ ‘by the citizens’ remains largely absent.” 
                </p>
                <img className="project-img" src="civic-tech/picture3.png" />
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" subtags={["workshop", "Singapore"]} date="5 February 2020" title="Workshop on “Civic learning in the social media era”">
                <p>Scholars from Univ of Sydney and National Univ of Singapore co-presented a workshop on “Civic learning in the social media era” on 5 February, 2020.  </p>
                <img className="project-img" src="/news/picture5.png" />
            </NewsComponent>

            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics" date="24 September 2019" subtags={["presentations", "China"]} title="A series of 9 book talks on 'Fandom Publics in the Making'">
            <p>
                    A series of 9 book talks on "Fandom Publics in the Making" were made in either English or Chinese at various universities.
                    <br /><a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab website/cultural publics/fandom publics in the making.ppt?d=wff3b9fbe0cda4b148a1dd9d61fcfeef6">[slides]</a>
                    <a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab%20website/cultural%20publics/%E6%BC%94%E8%AE%B2%E8%AF%BE%E4%BB%B6.ppt?d=w3be71faad4404ab6b7f37bc5c34ea6dd">【演讲课件】</a>
                    <ul>
                        <li>City University of Hong Kong, March 31st, 2017</li>
                        <li>University of Virginia, March 21st, 2017</li>
                        <li>Chinese University of Hong Kong, January 18th, 2017</li>
                        <li>Leiden University, November 9th, 2016</li>
                        <li>Royal Holloway University, September 20th, 2016</li>
                        <li>2019年9月24日 -- 广西艺术学院</li>
                        <li>2019年7月2日 -- 南京师范大学</li>
                        <li>2018年9月25日 -- 南方科技大学</li>
                        <li>2017年4月1日 -- 中山大学</li>
                    </ul>
                </p>
                <img className="project-img" src="cultural-publics/picture7.png" style={{height:"300px", width:"auto"}}/>
                <img className="project-img" src="cultural-publics/picture8.png" style={{height:"300px", width:"auto"}}/>
                <img className="project-img" src="cultural-publics/picture9.png" style={{height:"300px", width:"auto"}}/>
                <br />
                <img className="project-img" src="cultural-publics/picture10.png" style={{height:"300px", width:"auto"}}/>
                <img className="project-img" src="cultural-publics/picture11.png" style={{height:"300px", width:"auto"}}/>
            </NewsComponent>


            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics" subtags={["conferences", "China", "Singapore"]} date="28 June 2019" title="17th Chinese Internet Research Conference (CIRC) held in Singapore!">
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


            <NewsComponent className="online-deliberation-news" class="online-deliberation-news-content" tag="Online Deliberation" subtags={["conferences", "singapore"]} date="24 June 2017" title="Deliberation and Decision Making (DDM2017) held in Singapore!">
            <p>
            Deliberation and Decision Making (DDM2017): An Interdisciplinary Conference on Civic Tech was held in June, 2017 in Singapore. 
            The conference led to the publication of a symposium <a href="https://delibdemjournal.org/article/id/988/">“Online Deliberation 
            and #CivicTech” featured in the Journal of Deliberative Democracy. 
            </a>
            </p>
            <img className="project-img" src="online-deliberation/4.png"></img>
            </NewsComponent>


            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics" subtags={["interviews", "China"]} date="2 June 2016" title="Interview with Penn Annenberg on the crowdsourced translation of the book 'FandomPublics in the Making'">
                    <p>
                    Dr. Weiyu Zhang had an <a href="https://www.asc.upenn.edu/news-events/news/annenberg-student-and-alumna-collaborate-crowdsource-book-translation">
                        interview</a> with Penn Annenberg on the crowdsourced translation of the book "Fandom
                        Publics in the Making" was published in May 2016. The translation
                        project was a collaboration with the then Annenberg PhD student, and
                        now <a href="http://www.com.cuhk.edu.hk/en-GB/people/teaching-staff/fang-kecheng">Dr. Kecheng Fang</a>.
                    </p>
                    <img className="project-img" src="cultural-publics/picture5.png" style={{width:"250px"}}/>
                    <img className="project-img" src="cultural-publics/picture6.png" style={{width:"250px"}}/>
            </NewsComponent>

            <NewsComponent className="online-deliberation-news" class="online-deliberation-news-content" tag="Online Deliberation" subtags={["workshop", "south korea"]} date="31 May 2015 " title="SIG on “online deliberation processes and technologies” held in CHI 2015">
            <p>
            Scholars from Canada, UK, US, Poland and Singapore co-organized a workshop on “design for online deliberation 
            processes and technologies” during the 2015 CHI in Seoul, South Korea. This was the first time when the social 
            scientists and computer scientists gathered in one room to tackle the challenge of online deliberation.
            </p>
            <img className="project-img" src="/news/picture4.png"></img>
            </NewsComponent>

            <NewsComponent className="cultural-publics-news" class="cultural-publics-news-content" tag="Cultural Publics"  subtags={["presentations", "china"]} date="30 June 2014" title="Keynote speech on “celebrity activism on Weibo”">
                <p>Dr. Weiyu Zhang gave a keynote speech on “celebrity activism on Weibo” at the 2014 Chinese Internet 
                Research Conference (CIRC) , held at Hong Kong Polytech University. <a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab website/cultural publics/celebrity activism on weibo_2.ppt?d=wb7c70e7d45ad456abf30041734fe5968">[slides]</a></p>
                <img className="project-img" src="cultural-publics/picture12.png" style={{width:"400px"}}/>
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" subtags={["presentations", "south africa", "Asia" ]} date="21 July 2012" title="Panel on “Youth, ICTs, And Civil Engagement in Asia: A Comparative Approach”">
                <p>The team of researchers collectively presented at a panel  during the 2012 International Association 
                of Media and Communication Research Conference, held in Durban, South Africa. </p>
                <img className="project-img" src="youth-engagement/picture4.png" />
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" subtags={["presentations", "south korea"]} date="18 August 2011" title="Keynote lecture for the 22nd International Youth Forum">
                <p>Dr. Weiyu Zhang was invited to deliver a keynote lecture at the 22nd International Youth Forum, Ministry of 
                Gender Equality and Family and National Council of Youth Organizations in South Korea. 
                The talk is titled “Change, Youth, Failure, Excellence.”  <a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab website/youth engagement/Change%2C Youth%2C Failure%2C Excellence.ppt?d=w357b922ba8d24c198fbf40bb543aa809">[slides]</a>
                <a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab website/youth engagement/A talk prepared for the 22nd International Youth Forum.doc?d=w7a02169826d244b781a751ca8fada929">[transcript]</a> </p>
                <img className="project-img" src="/news/picture2.png" />
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" subtags={["presentations", "Asia"]} date="8 July 2010" title="Presentation on “Youth Engagement and ICTs in Asia” ">
                <p>Dr. Weiyu Zhang was invited to speak at the Joint Summer School by Chinese University of Communication, 
                Chinese University of Hong Kong, University of Westminster and University of Pennsylvania, Chinese University of 
                Communication. The talk is titled “Youth Engagement and ICTs in Asia: A Comparative Approach.” <a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab website/youth engagement/CUC presentation.pptx?d=w69a02116c063402c92d238392373d1d4">[slides]</a>
                </p>
                <img className="project-img" src="/news/picture1.png" />
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" subtags={["presentations", "Asia"]} date="24 June 2010" title="Panel on “Youth, ICTs and Political Engagement in Asia” ">
                <p>The team of researchers collectively presented at a panel during the 19th AMIC Annual Conference 
                “Technology and Culture: Communication Connectors and Dividers”, held in Singapore.  <a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab website/youth engagement/intro_amic.pptx?d=w273876f4d20f40228f8f99c9743da6ba">[slides]</a>   </p>
                <img className="project-img" src="youth-engagement/picture3.png" />
            </NewsComponent>

            <NewsComponent className="youth-engagement-news" class="youth-engagement-news-content" tag="Youth Engagement" subtags={["workshop", "India"]} date="31 March 2010" title="Participation in an International Workshop on ICTs and Development">
                <p>Dr. Weiyu Zhang was invited to participate in an International Workshop on ICTs and Development, 
                held in IIT Dehli, India. </p>
                <img className="project-img" src="youth-engagement/picture2.png" />
            </NewsComponent>

            <NewsComponent className="civic-tech-news" class="civic-tech-news-content" tag="Civic Tech" subtags={["presentations", "Philippines"]} date="30 September 2009" title="Talk on “Pushing democracy: Prospects for media and technology”">
                <p>    
                Dr. Weiyu Zhang delivered an invited talk on e-democracy as part of a conference 
                “Peace, Human Rights, Good Governance: East Asian Democracies at the Crossroads”, 
                hosted by The Philippine Center for Investigative Journalism. The presentation is 
                titled “Pushing democracy: Prospects for media and technology.” <a href="https://nusu-my.sharepoint.com/personal/cnmzw_nus_edu_sg/Documents/civictechlab website/civic tech/Pushing Democracy.ppt?d=wc758c1a0c9d848f98f874b10c4c1c850">[slides]</a> 
                </p>
                <img className="project-img" src="civic-tech/picture5.png" style={{height:"300px", width:"auto"}}/>
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
                src="/news/690cafe534f955156ebd1ac6364dfff4.jpg"
                alt=""
            />
            <div className="news-content">
                <Row>
                <span className= {this.props.className}><span className="news-tags">#{this.props.tag}</span></span>
                <span className="news-date">{this.props.date}</span>

                </Row>
                <div className="subTags">
                {this.props.subtags && this.props.subtags.map(tag => (
                    <span>#{tag} </span>
                ))}
                </div>
                <h2 className="news-title">{this.props.title}</h2>
                <div>{this.props.children}</div>
            </div>
        </div>
        </Container>
      );
    }
}