import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Welcome from "./welcome.jsx";
import Slider from "./slider.jsx";
import Contact from "./contact.jsx";

import Navbar from "./sub/components/navbar.jsx";

import "../css/main.scss";

export default class Main extends React.Component{
    render(){
        return(
            <Router>
                <div className="main-container">
                    <Navbar/>
                    <header className="welcome-header">History of Poland in paintings</header>
                    <Route exact path = "/" component = {Welcome}/>
                    <Route path = "/slider" component = {Slider}/>
                    <Route exact path="/contact" component = {Contact}/>
                </div>
            </Router>
        );
    }
}