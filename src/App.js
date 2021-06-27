import logo from './logo.svg';
import React, { Component }  from 'react';
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


import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
