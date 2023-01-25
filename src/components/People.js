import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./People.css";
import logo from "../assets/logo.png";
import * as Icon from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';

export default class People extends React.Component {
  render() {
    return (
        <Container className="people">
        <Col xs={12} md={10} lg={10} className="people-width">
        <h1>Current Team</h1>
            <Row xs={1} sm={2} md={2} lg={3}>
                <Col><Person name="Dr. Weiyu Zhang" img="weiyu.png" styles={{objectPosition: '10% 20%', width:'auto'}} link="http://www.weiyuzhang.net/"
                position="Founder & Director; currently Associate Professor, Department of Communications and New Media, National University of Singapore."></Person></Col>

                <Col><Person name="Ng Chin Seang" img="chinseang.png" position="Research Assistant, undergrad student, Mathematics, NUS"></Person></Col>
                <Col><Person name="Haodong Liu" img="haodong.png" position="Research Intern, Master graduate, City University of Hong Kong  "></Person></Col>
                <Col><Person name="Huazhi Qin" img="huazhi.png" position="Research Intern, Master graduate, Georgetown University "></Person></Col>

                <Col><Person name="Tong Tong" img="tongtong.png" position="Visiting PhD Student, Tsinghua University"></Person></Col>
                <Col><Person name="Dong Wang" img="dongwang.jpg" position="Visiting PhD Student, University of Science and Technology of China"></Person></Col>
                <Col><Person name="Cheng Yixiang" img="yixiang.png" position="Research Intern, Master Graduate, Chinese University of Hong Kong"></Person></Col>
                <Col><Person name="Wenli Hu" img="wenli.png" position="Research Intern, Master graduate, Hong Kong Baptist University"></Person></Col>
                <Col><Person name="Tan Si Min, Odele" img="odele.png" position="Research Assistant, Undergrad Student, Urban Studies"></Person></Col>
                <Col><Person name="Charlene Chan Mun Yee" img="charlene.png" position="Research Assistant, Undergrad Student, NUS Data science and Analytics"></Person></Col>

            </Row>
            <br/>
            <h1>Alumni</h1>
            <Row xs={1} sm={2} md={2} lg={3}>

                <Col><Person name="Dr. Anfan Chen" img="anfan.png" link="https://www.researchgate.net/profile/Anfan-Chen" position="Visiting PhD Student, Tsinghua University, 2019; currently PostDoc Researcher at Chinese University of Hong Kong (CUHK)"></Person></Col>
                <Col><Person name="Ximing Liu" img="ximing.png" link="https://www.linkedin.com/in/ximing-liu-951543b8/?originalSubdomain=cn" position="Master Graduate, 2019; currently Market Researcher at Tencent"></Person></Col>
 
                <Col><Person name="Dr. Sanju Menon" img="sanju.png" link="https://www.linkedin.com/in/sanjumenonp/" position="PhD Graduate, 2018; currently Data Scientist (Cognitive Automation) at UBS"></Person></Col>
                <Col><Person name="Jingjing Liang" img="jingjing.png" position="Master Graduate, 2018; currently taking a break"></Person></Col>
                <Col><Person name="Tian Yang" img="tianyang.png" link="https://www.asc.upenn.edu/people/graduate-student/tian-yang" position="Master Graduate, 2017; currently doctoral candidate at University of Pennsylvania"></Person></Col>

                <Col><Person name="Dr. Gulizar Haciyakupoglu" img="gulizar.png" link="https://www.rsis.edu.sg/profile/gulizar-haciyakupoglu/"  position="PhD Graduate, 2016; currently Research Fellow at Nanyang Technological University "></Person></Col>
                <Col><Person name="Lize Zhang" img="lize.png" position="Master Graduate, 2016; currently Founder of Peach Says "></Person></Col>
                <Col><Person name="Dr. Simon Perrault" img="simon.png" link="https://istd.sutd.edu.sg/people/faculty/simon-perrault#biography" position="Postdoc Researcher, 2014-2015; currently Assistant Professor, Singapore University of Technology and Design"></Person></Col>
 
                <Col><Person name="Jodie Luu" img="jodie.png" link="https://www.nus.edu.sg/celc/staff/jodieluu.html" position="Master Graduate, 2013; currently Lecturer at National University of Singapore "></Person></Col>
                <Col><Person name="Catherine Candano" img="catherine.png" position="Master Graduate, 2012; currently Head, Strategic Data Partnerships Development, Google Asia Pacific"></Person></Col>
                <Col><Person name="Lingzi Zhang" img="lingzi.png" link="https://www.linkedin.com/in/lizziezhang/" position="Master Graduate, 2012; currently Product Director at Ola Chat"></Person></Col>
                <Col><Person name="Manjiang He" img="manjiang.png" link="https://www.linkedin.com/in/manjianghe/" position="Research Assistant, Master student, LKYSPP, NUS"></Person></Col>
                <Col><Person name="Zhuo Chen" img="zhuochen.png" position="PhD Candidate "></Person></Col>
                <Col><Person name="Yipeng Xi" img="yipeng.png" position="PhD Candidate "></Person></Col>
                <Col><Person name="Chuyao Wang" img="chuyao.png" position="Research Intern, Master Student, Hong Kong University of Science and Technology"></Person></Col>
                <Col><Person name="Nuriyah Fatin" img="nuriyah.png" position="Research Assistant, undergrad student, CNM, NUS"></Person></Col>

            </Row>

            
        </Col>
        </Container>
    );
  }
}

function Person(props) {
    if(props.link) {
        return (
            <div className="person">
              <a href={props.link}><h4>{props.name}</h4></a>
              <img src={'./people/' + props.img} style={props.styles} />
              <p>{props.position}</p>
              <div className="person-footer">
                  <small className="text-muted"><a href={props.link}>Website</a></small>
              </div>
            </div>
        )
    } else {
        return (
            <div className="person">
              <a href={props.link}><h4>{props.name}</h4></a>
              <img src={'./people/' + props.img} style={props.styles}/>
              <p>{props.position}</p>
              <div className="person-footer">
                  <small className="text-muted"><a href={props.link}>Website not Available</a></small>
              </div>
            </div>
        )
    }


                // <Card>
                //     <Card.Img variant="top" src={this.props.img}/>
                //     <Card.Body>
                //     <Card.Title>{this.props.name}</Card.Title>
                //     <Card.Text>
                //     An interdisciplinary, cross-sectoral and collaborative approach to tackling civic challenges. 
                //     </Card.Text>
                //     </Card.Body>
                //     <Card.Footer>
                //     <small className="text-muted" show={this.props.link}><a href={this.props.link}>Website</a></small>
                //     </Card.Footer>
                // </Card>
  }