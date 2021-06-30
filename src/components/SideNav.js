import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from "react-bootstrap";
import StickyBox from "react-sticky-box";

export default class SideNav extends React.Component {
    render() {
      return (
          <Container className="sideNav">
            <StickyBox />

          </Container>
      );
    }
}
  