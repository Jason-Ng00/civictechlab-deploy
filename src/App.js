import logo from './logo.svg';
import React, { Component, useEffect, useState }  from 'react';
import { useLocation } from "react-router-dom";
import './App.css';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js"
import People from "./components/People.js"
import OnlineDeliberation from "./components/OnlineDeliberation.js"
import YouthEngagement from "./components/YouthEngagement.js"
import CivicTech from "./components/CivicTech.js"
import CitizenScience from "./components/CitizenScience.js"
import CulturalPublic from "./components/CulturalPublic.js"
import JoinUs from "./components/JoinUs.js"
import News from "./components/News.js"
import ScrollToTop from "./components/ScrollToTop.js"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div style={{height:"90px"}}></div>
      {/* <Router basename={process.env.PUBLIC_URL} className = "content"> */}
      <ScrollRestoration />
      <Switch>                
        <Route path='/home' component={Home}/>  
        <Route path='/people' component={People}/>               
        <Route path='/projects/youth-engagement' component={YouthEngagement}/>   
        <Route path='/projects/online-deliberation' component={OnlineDeliberation}/>   
        <Route path='/projects/civic-tech' component={CivicTech}/>   
        <Route path='/projects/citizen-science' component={CitizenScience}/>  
        <Route path='/projects/cultural-public' component={CulturalPublic}/>  
        <Route path='/join-us' component={JoinUs}/>  
        <Route path='/news' component={News}/>  
        <Route path='/' component={Home}/>            
      </Switch>
      {/* </Router> */}
      <ScrollToTop />
      <Footer></Footer>
    </div>
  );
}

export default App;
