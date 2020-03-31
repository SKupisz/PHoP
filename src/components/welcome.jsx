import React from "react"

export default class Welcome extends React.Component{
    render(){
        return(
            <div className="welcome-container">
                <section className="short-describe">
                    <header className="describe-header">What is Polish paintings' slider?</header>
                    <div className="describe-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam nihil quos ex doloremque quis, accusamus neque suscipit vel culpa. Perferendis at minima in adipisci minus sequi deleniti doloribus eum.</div>
                </section>
                <section className="short-describe right">
                    <header className="describe-header">Why it has been created?</header>
                    <div className="describe-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam nihil quos ex doloremque quis, accusamus neque suscipit vel culpa. Perferendis at minima in adipisci minus sequi deleniti doloribus eum.</div>
                </section>
                <section className="short-describe center">
                    <header className="describe-header">Who runs this?</header>
                    <div className="describe-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam nihil quos ex doloremque quis, accusamus neque suscipit vel culpa. Perferendis at minima in adipisci minus sequi deleniti doloribus eum.</div>
                </section>
            </div>
        );
    }
}