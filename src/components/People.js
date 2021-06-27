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
        <Col xs={12} md={10} lg={8} sclassName="people-width">
        <h1>Current Team</h1>
            <Row xs={1} md={2} lg={4} >
                <Col><Person name="Dr. Weiyu Zhang" img="weiyu.png" position="Founder & Director; currently Associate Professor, Department of Communications and New Media, National University of Singapore."></Person></Col>
                <Col><Person name="Zhuo Chen" img="zhuochen.png" position="PhD Candidate "></Person></Col>
                <Col><Person name="Yipeng Xi" img="yipeng.png" position="PhD Candidate "></Person></Col>
                <Col><Person name="Manjiang He" img="manjiang.png" position="Research Assistant, Master student, LKYSPP, NUS"></Person></Col>
            </Row>

            <Row>
                <Col><Person name="Ng Chin Seang" img="chinseang.png" position="Research Assistant, undergrad student, Mathematics, NUS"></Person></Col>
                <Col><Person name="Haodong Liu" img="haodong.png" position="Research Intern, Master graduate, City University of Hong Kong  "></Person></Col>
                <Col><Person name="Tong Tong" img="tongtong.png" position="Visiting PhD Student, Tsinghua University "></Person></Col>
                <Col><Person name="Anfan Chen" img="anfan.png" position="Visiting PhD Student, Tsinghua University, 2019; currently PostDoc Researcher at Chinese University of Hong Kong (CUHK)"></Person></Col>
            </Row>

            <Row>
                <Col><Person name="Ximing Liu" img="ximing.png" position="Master Graduate, 2019; currently Market Researcher at Tencent"></Person></Col>
                <Col><Person name="Dr. Sanju Menon" img="sanju.png" position="PhD Graduate, 2018; currently Data Scientist (Cognitive Automation) at UBS"></Person></Col>
                <Col><Person name="Jingjing Liang" img="jingjing.png" position="Master Graduate, 2018; currently taking a break"></Person></Col>
                <Col><Person name="Tian Yang" img="tianyang.png" position="Master Graduate, 2017; currently doctoral candidate at University of Pennsylvania"></Person></Col>
            </Row>

            <Row>
                <Col><Person name="Gulizar Haciyakupoglu" img="gulizar.png" position="PhD Graduate, 2016; currently Research Fellow at Nanyang Technological University "></Person></Col>
                <Col><Person name="Lize Zhang" img="lize.png" position="Master Graduate, 2016; currently Founder of Peach Says "></Person></Col>
                <Col><Person name="Dr. Simon Perrault" img="simon.png" position="Postdoc Researcher, 2014-2015; currently Assistant Professor, Singapore University of Science and Technology"></Person></Col>
                <Col><Person name="Jodie Luu" img="jodie.png" position="Master Graduate, 2013; currently Lecturer at National University of Singapore "></Person></Col>
            </Row>

            <Row>
                <Col><Person name="Catherine Candano" img="catherine.png" position="Master Graduate, 2012; currently Head, Strategic Data Partnerships Development, Google Asia Pacific"></Person></Col>
                <Col><Person name="Lingzi Zhang" img="lingzi.png" position="Master Graduate, 2012; currently Product Director at Ola Chat"></Person></Col>
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
            <h4>{this.props.name}</h4>
            <img src={this.props.img} />
            <p>{this.props.position}</p>
          </div>
      );
    }
  }