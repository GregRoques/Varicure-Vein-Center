import React, { Component } from "react";
// import cssAbout from "/about.module.css";
// import Staff as "./Components/Staff";
// import Conditions as "./Components/Conditions";
// import Treatments as "./Components/Treatments";
// import Results as "./Components/Results";

class About extends Component {
    state = {
        selected: "Treatments"
    }

    selected = props => {
        this.setState({
            selected: props
        });
    }

    options = props => {
        props.map((option, i) => {
            return (
                <li key={i} onClick={option => this.selected(option)}>
                    {this.state === option ? `<b>${option}</b>` : option }
                </li>
            );
        });
    };

    render () {
        const options = ["Treatments", "Conditions", "Results", "Staff"];

        return (
            <div>
                <div>
                    <ul>
                        <this.options props={ options } />
                    </ul>
                </div>
                <div key= {this.state.selected }>
                    <this.state.selected />
                </div>
            </div>
        );
    };
};

export default About;
