import React, { Component } from "react";
import axios from "axios";

class FAQ extends Component {
    state = {
        question: [],
        answer: []
    };

    componentDidMount () {
        this.getBio();
    };

    getBio = () => {
        const language = this.props.isEnglish ? "e" : "s";
        axios.get(`http://localhost:2000/bio/?${language}`)
            .then(res => {
                this.setState({
                    question: [...res.question],
                    answer: [...res.answer]
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    question: "Loading Error",
                    answer: "Please try back again later."
                });
            });
    };

    FAQs = props => {
        return (
            <div id={`Bio${props.key}`}>
                <h3>{ props.question }</h3>
                <p>{props.answer}</p><br/>
            </div>
        );
    };

    render () {
        console.log();
        return (
            <div>
                <h1>Staff</h1>
                <div>
                    { (this.state).map((fact, i) => {
                        return (
                            <this.FAQs
                                key={ i }
                                question={ fact.question }
                                answer={ fact.answer }
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
};

export default FAQ;
