import React, { Component } from "react";

class FAQ extends Component {
    state = { };

    FAQs = props => {
        return (
            <div id={`FAQ${props.key}`}>
                <h3>{ props.question }</h3>
                <p>{props.answer}</p><br/>
            </div>
        );
    };

    render () {
        return (
            <div>
                <h1>FAQ</h1>
                <div>
                    { (Object.values(...this.state)).map((fact, i) => {
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
