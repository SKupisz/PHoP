import React from "react";

export default class Contact extends React.Component{
    render(){
        return(
            <div className="contact-container">
                <header className="contact-header">Contact us</header>
                <section className="contact-table">
                    <div className="contact-table-item">Facebook</div>
                    <div className="contact-table-item">Github</div>
                    <div className="contact-table-item">E-mail</div>
                </section>
            </div>
        );
    }
}