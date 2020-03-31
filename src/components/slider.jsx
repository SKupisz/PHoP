import React from "react";
import {Route,Link} from "react-router-dom";

import GiveTheImageElement from "./sub/jsx/returnThePainting.jsx";

import Matejko_Christianization_of_Poland from "../images/Matejko_Christianization_of_Poland.jpg";
import saint_wojciech from "../images/saint_wojciech.png";

export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.leftRef = React.createRef();
        this.centerRef = React.createRef();
        this.rightRef = React.createRef();

        this.rightContainerRef = React.createRef();

        this.linkRightRef = React.createRef();
        this.linkLeftRef = React.createRef();
        this.footerRef = React.createRef();
        this.nowStatus = 0;

        this.changeToLeft = this.changeToLeft.bind(this);
        this.changeToRight = this.changeToRight.bind(this);

        this.returningTheName = new GiveTheImageElement("Chrobry_in_Kiev");

        this.base = require("./sub/data.json");
    }
    changeToLeft(){
        if(this.nowStatus-1 >= 0){
            this.nowStatus--;
            this.rightRef.current.classList.remove("hidden");


            this.rightRef.current.classList.add("fading-out");
            this.centerRef.current.classList.add("fading-out");
            this.leftRef.current.classList.add("fading-out");
            setTimeout(function(){
                this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus+1)][0]);
                this.rightRef.current.src = this.returningTheName.returnTheImage();
                this.rightRef.current.classList.remove("fading-out");
            }.bind(this),800);

            setTimeout(function(){
                this.returningTheName.changeTheName(this.base["order"]["n"+this.nowStatus][0]);
                this.footerRef.current.innerHTML = this.base["order"]["n"+this.nowStatus][1];
                this.centerRef.current.src = this.returningTheName.returnTheImage();
                this.centerRef.current.classList.remove("fading-out");
            }.bind(this),900);


            if(this.nowStatus == 0){
                this.leftRef.current.classList.add("fading-out");
            }
            else{
                this.leftRef.current.classList.remove("hidden");
                setTimeout(function(){
                    this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus-1)][0]);
                    this.leftRef.current.src = this.returningTheName.returnTheImage();
                    this.leftRef.current.classList.remove("fading-out");
                }.bind(this),1000);

            }
            this.linkLeftRef.current.href = "/slider/"+(this.nowStatus);
            this.linkRightRef.current.href = "/slider/"+(this.nowStatus+1);
        }
    }
    changeToRight(){
        if(this.nowStatus < this.base["quantity"]){
            this.nowStatus++;
            this.leftRef.current.classList.remove("hidden");
            this.rightRef.current.classList.add("fading-out");
            this.centerRef.current.classList.add("fading-out");
            this.leftRef.current.classList.add("fading-out");
            setTimeout(function(){
                this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus-1)][0]);
                this.leftRef.current.src = this.returningTheName.returnTheImage();
                this.leftRef.current.classList.remove("fading-out");
            }.bind(this),800);

            

            setTimeout(function(){
                this.returningTheName.changeTheName(this.base["order"]["n"+this.nowStatus][0]);
                this.footerRef.current.innerHTML = this.base["order"]["n"+this.nowStatus][1];
                this.centerRef.current.src = this.returningTheName.returnTheImage();
                this.centerRef.current.classList.remove("fading-out");
            }.bind(this),900);

            if(this.nowStatus == this.base["quantity"]){
                this.rightRef.current.classList.add("fading-out");
            }
            else{
                this.rightRef.current.classList.remove("hidden");
                setTimeout(function(){
                    this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus+1)][0]);
                    this.rightRef.current.src = this.returningTheName.returnTheImage();
                    this.rightRef.current.classList.remove("fading-out");
                }.bind(this),1000);

            }
            this.linkLeftRef.current.href = "/slider/"+(this.nowStatus);
            this.linkRightRef.current.href = "/slider/"+(this.nowStatus+1); 
        }
    }
    render(){
        return(
            <section className="slider-container">
            <Link to = {"/slider/"+(this.nowStatus)} ref = {this.linkLeftRef}>
                <div className="side-img-container left">
                    <img src={""} alt="next-image" className="next-image hidden" ref = {this.leftRef} onClick = {() => {this.changeToLeft()}}/>
                </div>
            </Link>
            <div className="img-main-container">
                <img src = {Matejko_Christianization_of_Poland} className = "image-container" ref = {this.centerRef}/>
                <footer className="image-title" ref={this.footerRef}>Zaprowadzenie Chrześcijaństwa by Jan Matejko</footer>
            </div>
            <Link to = "/slider/2" ref = {this.linkRightRef}>
                <div className="side-img-container right" ref = {this.rightContainerRef}>
                    <img src={saint_wojciech} alt="next-image" className="next-image" ref = {this.rightRef} onClick = {() => {this.changeToRight()}}/>
                </div>         
            </Link>           
        </section>
        );
    }
}