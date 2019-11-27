import React, { Component } from "react";
import cssServices from "../services.module.css";
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

    componentDidUpdate (prevProps) {
        if (prevProps.isEnglish !== this.props.isEnglish) {
            this.getBio();
        }
    }

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
        const { name, title, bio } = this.state;
        return (
            <div>
                <h1 className={ cssServices.compTitle } >Staff</h1>
                <div>
                    <h3>{ name }, { title }</h3>
                    <p>{ bio }</p><br/>
                </div>
            </div>
        );
    }
};

export default FAQ;
