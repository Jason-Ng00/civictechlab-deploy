import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from "react-bootstrap";
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
                <Col><Person name="Dr. Weiyu Zhang" img="weiyu.png" link="http://www.weiyuzhang.net/"
                position="Founder & Director; currently Associate Professor, Department of Communications and New Media, National University of Singapore."></Person></Col>
                <Col><Person name="Zhuo Chen" img="zhuochen.png" position="PhD Candidate "></Person></Col>
                <Col><Person name="Yipeng Xi" img="yipeng.png" position="PhD Candidate "></Person></Col>

                <Col><Person name="Manjiang He" img="manjiang.png" link="https://www.linkedin.com/in/manjianghe/" position="Research Assistant, Master student, LKYSPP, NUS"></Person></Col>
                <Col><Person name="Ng Chin Seang" img="chinseang.png" position="Research Assistant, undergrad student, Mathematics, NUS"></Person></Col>
                <Col><Person name="Haodong Liu" img="haodong.png" position="Research Intern, Master graduate, City University of Hong Kong  "></Person></Col>
                <Col><Person name="Huazhi Qin" img="huazhi.png" position="Research Intern, Master graduate, Georgetown University "></Person></Col>

                <Col><Person name="Tong Tong" img="tongtong.png" position="Visiting PhD Student, Tsinghua University "></Person></Col>
                
            </Row>
            <br/>
            <h1>Alumni</h1>
            <Row xs={1} sm={2} md={2} lg={3}>

                <Col><Person name="Anfan Chen" img="anfan.png" link="https://www.researchgate.net/profile/Anfan-Chen" position="Visiting PhD Student, Tsinghua University, 2019; currently PostDoc Researcher at Chinese University of Hong Kong (CUHK)"></Person></Col>
                <Col><Person name="Ximing Liu" img="ximing.png" link="https://www.linkedin.com/in/ximing-liu-951543b8/?originalSubdomain=cn" position="Master Graduate, 2019; currently Market Researcher at Tencent"></Person></Col>
 
                <Col><Person name="Dr. Sanju Menon" img="sanju.png" link="https://www.linkedin.com/in/sanjumenonp/" position="PhD Graduate, 2018; currently Data Scientist (Cognitive Automation) at UBS"></Person></Col>
                <Col><Person name="Jingjing Liang" img="jingjing.png" position="Master Graduate, 2018; currently taking a break"></Person></Col>
                <Col><Person name="Tian Yang" img="tianyang.png" link="https://www.asc.upenn.edu/people/graduate-student/tian-yang" position="Master Graduate, 2017; currently doctoral candidate at University of Pennsylvania"></Person></Col>

                <Col><Person name="Gulizar Haciyakupoglu" img="gulizar.png" link="https://www.rsis.edu.sg/profile/gulizar-haciyakupoglu/"  position="PhD Graduate, 2016; currently Research Fellow at Nanyang Technological University "></Person></Col>
                <Col><Person name="Lize Zhang" img="lize.png" position="Master Graduate, 2016; currently Founder of Peach Says "></Person></Col>
                <Col><Person name="Dr. Simon Perrault" img="simon.png" link="https://istd.sutd.edu.sg/people/faculty/simon-perrault#biography" position="Postdoc Researcher, 2014-2015; currently Assistant Professor, Singapore University of Science and Technology"></Person></Col>
 
                <Col><Person name="Jodie Luu" img="jodie.png" link="https://www.nus.edu.sg/celc/staff/jodieluu.html" position="Master Graduate, 2013; currently Lecturer at National University of Singapore "></Person></Col>
                <Col><Person name="Catherine Candano" img="catherine.png" position="Master Graduate, 2012; currently Head, Strategic Data Partnerships Development, Google Asia Pacific"></Person></Col>
                <Col><Person name="Lingzi Zhang" img="lingzi.png" link="https://www.linkedin.com/in/lizziezhang/" position="Master Graduate, 2012; currently Product Director at Ola Chat"></Person></Col>
            </Row>

            
        </Col>
        </Container>
    );
  }
}

class Person extends React.Component {
    render() {
      return (
          <div className="person">
            <a href={this.props.link}><h4>{this.props.name}</h4></a>
            <img src={this.props.img} />
            <p>{this.props.position}</p>
          </div>
      );
    }
  }