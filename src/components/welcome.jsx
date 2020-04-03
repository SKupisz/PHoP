import React from "react";
import ReactHtmlParser from "react-html-parser";

export default class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.base = require("./sub/data/welcome.json");

        this.first = this.base["first"];
        this.second = this.base["second"];
        this.third = this.base["third"];
    }
    render(){
        return(
            <div className="welcome-container">
                <section className="short-describe">
                    <header className="describe-header">{this.first["header"]}</header>
                    <div className="describe-content">{this.first["content"]}</div>
                </section>
                <section className="short-describe right">
                    <header className="describe-header">{this.second["header"]}</header>
                    <div className="describe-content">{this.second["content"]}</div>
                </section>
                <section className="short-describe center">
                    <header className="describe-header">{this.third["header"]}</header>
                    <div className="describe-content">{ReactHtmlParser(this.third["content"])}</div>
                </section>
            </div>
        );
    }
}