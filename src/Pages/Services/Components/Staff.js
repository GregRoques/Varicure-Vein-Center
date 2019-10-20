import React, { Component } from "react";
import axios from "axios";

class FAQ extends Component {
    state = {
        name: null,
        title: null,
        bio: null
    };

    componentDidMount () {
        this.getBio();
    };

    getBio = () => {
        const language = this.props.isEnglish ? "e" : "s";
        axios.get(`http://localhost:2000/bio/?${language}`)
            .then(res => {
                this.setState({
                    name: res.name,
                    title: res.title,
                    bio: res.bio
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    bio: "Loading error, please check back later."
                });
            });
    };

    Bio = props => {
        return (
            <div id={`Bio${props.key}`}>
                <h3>{ props.question }</h3>
                <p>{props.answer}</p><br/>
            </div>
        );
    };

    render () {
        return (
            <div>
                <h1>Staff</h1>
                <div>
                    { (this.state).map((fact, i) => {
                        return (
                            <this.Bio
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
