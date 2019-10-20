import React, { Component } from "react";
import axios from "axios";

class FAQ extends Component {
    state = {
        name: [],
        title: null,
        bio: null
    };

    componentDidMount () {
        this.getBio();
    };

    getBio = () => {
        const language = this.props.isEnglish;
        axios.get(`http://localhost:2000/staff/${language}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    title: res.data.title,
                    bio: res.data.bio
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    bio: "Loading error, please check back later."
                });
            });
    };

    render () {
        return (
            <div>
                <h1>Staff</h1>
                <div>
                    <h3>{ this.state.name }, { this.state.title }</h3>
                    <p>{this.state.bio}</p><br/>
                </div>
            </div>
        );
    }
};

export default FAQ;
