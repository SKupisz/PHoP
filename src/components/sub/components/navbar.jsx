import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="main-navbar">
                <Link to="/">
                    <button className="nav-item main-site-item">Main site</button>
                </Link>
                <Link to="/slider">
                    <button className="nav-item slider-item">Slider</button>
                </Link>
                <Link to="/contact">
                    <button className="nav-item contact-item">Contact</button>
                </Link>                
            </nav>
        );
    }
}