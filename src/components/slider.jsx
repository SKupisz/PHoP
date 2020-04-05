import React from "react";
import ReactDOM from "react-dom";
import {Route,Link} from "react-router-dom";

import GiveTheImageElement from "./sub/jsx/returnThePainting.jsx";

import Matejko_Christianization_of_Poland from "../images/Matejko_Christianization_of_Poland.jpg";
import saint_wojciech from "../images/saint_wojciech.png";
import Typing from "react-typing-animation";

export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.leftRef = React.createRef();
        this.centerRef = React.createRef();
        this.rightRef = React.createRef();

        this.linkRightRef = React.createRef();
        this.linkLeftRef = React.createRef();
        this.footerRef = React.createRef();
        this.nowStatus = 1;
        this.state = {
            title: "Zaprowadzenie Chrześcijaństwa by Jan Matejko",
            itemLeft: null,
            itemCenter: Matejko_Christianization_of_Poland,
            itemRight: saint_wojciech
        };

        this.changeToLeft = this.changeToLeft.bind(this);
        this.changeToRight = this.changeToRight.bind(this);
        this.initialize = this.initialize.bind(this);

        this.returningTheName = new GiveTheImageElement("Chrobry_in_Kiev");

        this.base = require("./sub/data/data.json");

        this.initialize();
    }
    initialize(){
        let helper = document.location.href;
        for(let i = 0 ; i < 4; i++){
            helper = helper.substr(helper.indexOf("/")+1);
        }
        if(helper == ""){
            helper = "1";
        }
        if(!(helper == "" || helper == "1" || parseInt(helper) == "NaN")){
            helper = parseInt(helper);
            if(helper > 0 && helper <= this.base["quantity"]){
                this.nowStatus = helper;
                if(helper == this.base["quantity"]){
                    this.state.itemRight = null;
                }
                else{
                    this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus+1)][0]);
                    this.state.itemRight = this.returningTheName.returnTheImage();
                }
                this.returningTheName.changeTheName(this.base["order"]["n"+this.nowStatus][0]);
                this.state.title = this.base["order"]["n"+this.nowStatus][1];
                this.state.itemCenter = this.returningTheName.returnTheImage();
                this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus-1)][0]);
                this.state.itemLeft = this.returningTheName.returnTheImage();
                console.log(this.state.itemLeft);
            }
        }
    }
    changeToLeft(){
        if(this.nowStatus-1 > 0){
            this.nowStatus--;
            if(this.state.itemRight != null){
                this.rightRef.current.classList.remove("hidden");
                this.rightRef.current.classList.add("fading-out");
            }

            
            this.centerRef.current.classList.add("fading-out");
            this.leftRef.current.classList.add("fading-out");
            this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus+1)][0]);
            setTimeout(function(){
                if(this.state.itemRight != null){
                    this.rightRef.current.classList.remove("fading-out");
                }
                this.setState({itemRight: this.returningTheName.returnTheImage()}, ()=>{

                    this.returningTheName.changeTheName(this.base["order"]["n"+this.nowStatus][0]);
                    let helper = this.base["order"]["n"+this.nowStatus][1];

                    setTimeout(function(){
                        this.centerRef.current.classList.remove("fading-out");
                        this.footerRef.current.classList.remove("fading-text-out");
                        this.setState({title: helper, itemCenter: this.returningTheName.returnTheImage()},() => {
                            if(this.nowStatus == 1){
                                this.leftRef.current.classList.add("fading-out");
                            }
                            else{
                                this.leftRef.current.classList.remove("hidden");
                                this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus-1)][0]);
                                this.setState({itemLeft: this.returningTheName.returnTheImage()}, ()=>{});
                                setTimeout(function(){
                                    this.leftRef.current.classList.remove("fading-out");
                                }.bind(this),100);
                
                            }

                        });
                    }.bind(this),100);
                });
            }.bind(this),800);


            this.linkLeftRef.current.href = "/slider/"+(this.nowStatus);
            this.linkRightRef.current.href = "/slider/"+(this.nowStatus+1);
        }
    }

    changeToRight(){
        if(this.nowStatus < this.base["quantity"]){
            this.nowStatus++;
            if(this.state.itemLeft != null){
                this.leftRef.current.classList.remove("hidden");
            }
            this.rightRef.current.classList.add("fading-out");
            this.centerRef.current.classList.add("fading-out");
            if(this.state.itemLeft != null){
                this.leftRef.current.classList.add("fading-out");
            }
            this.footerRef.current.classList.add("fading-text-out");

            this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus-1)][0]);
            
            setTimeout(function(){
                if(this.state.itemLeft != null){
                    this.leftRef.current.classList.remove("fading-out");
                }
                this.setState({itemLeft: this.returningTheName.returnTheImage()}, () => {
                    this.returningTheName.changeTheName(this.base["order"]["n"+this.nowStatus][0]);
                    let helper = this.base["order"]["n"+this.nowStatus][1];
                   
                    setTimeout(function(){
                        this.centerRef.current.classList.remove("fading-out");
                        this.footerRef.current.classList.remove("fading-text-out");
                        this.setState({title: helper, itemCenter: this.returningTheName.returnTheImage()},() => {
                            if(this.nowStatus == this.base["quantity"]){
                                this.rightRef.current.classList.add("fading-out");
                            }
                            else{
                                this.rightRef.current.classList.remove("hidden");
                                this.returningTheName.changeTheName(this.base["order"]["n"+(this.nowStatus+1)][0]);
                                this.setState({itemRight: this.returningTheName.returnTheImage()}, ()=>{});
                                setTimeout(function(){
                                    this.rightRef.current.classList.remove("fading-out");
                                }.bind(this),100);
                
                            }
                        });
                    }.bind(this),100);

                });
            }.bind(this),800);

            


            this.linkLeftRef.current.href = "/slider/"+(this.nowStatus);
            this.linkRightRef.current.href = "/slider/"+(this.nowStatus+1); 
        }
    }
    render(){
        return(
            <section className="slider-container">
            <Link to = {"/slider/"+(this.nowStatus-1)} ref = {this.linkLeftRef}>
                <div className="side-img-container left">
                {this.state.itemLeft == null ? "": <img src={this.state.itemLeft} alt="next-image" className="next-image" ref = {this.leftRef} onClick = {() => {this.changeToLeft()}}/>}
                </div>
            </Link>
            <div className="img-main-container">
                <img src = {this.state.itemCenter} className = "image-container" ref = {this.centerRef} />
                <footer className="image-title" ref={this.footerRef}>
                    <span className="typing-content" ref = {this.titleRef}>{this.state.title}</span>
                </footer>
                <div className="buttons-container">
                    <Link to = {"/slider/"+((this.nowStatus-1) < 1 ? "": (this.nowStatus-1))} ref = {this.linkLeftRef}>
                        <button className = "resp-changing" onClick = {() => {this.changeToLeft()}}>{"<"}</button>
                    </Link>
                    <Link to = {"/slider/"+((this.nowStatus+1) > this.base["quantity"] ? "": (this.nowStatus+1))} ref = {this.linkRightRef}>
                        <button className = "resp-changing" onClick = {() => {this.changeToRight()}}>{">"}</button>
                    </Link>
                </div>

            </div>
            <Link to = {(this.nowStatus == this.base["quantity"] ? "": "/slider/"+(this.nowStatus+1))} ref = {this.linkRightRef}>
                <div className="side-img-container right" ref = {this.rightContainerRef}>
                {this.state.itemRight == null ? "": <img src={this.state.itemRight} alt="next-image" className="next-image" ref = {this.rightRef} onClick = {() => {this.changeToRight()}}/>}
                </div>         
            </Link>           
        </section>
        );
    }
}