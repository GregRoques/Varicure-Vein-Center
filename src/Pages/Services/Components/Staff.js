import React, { Component } from "react";
import cssServices from "../services.module.css";
import axios from "axios";

class Staff extends Component {
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

    isBio = () => {
        return (
            <div className={ cssServices.doctor }>
                <img className={cssServices.staffImages} alt="Dr. Reuben Gurvich" title="Dr. Reuben Gurvich" src="/Reuben.jpg"/>
                <h3>{ this.state.name }</h3>
            </div>
        );
    }

    render () {
        const { name, title, bio } = this.state;
        return (
            <div>
                <h1 className={ cssServices.compTitle } >Staff</h1>
                <div className={cssServices.staffBorder}>
                    { name && title
                        ? this.isBio()
                        : null }
                    <p>{ bio }</p>
                    { name && title
                        ? <img
                            className={cssServices.image2Border }
                            alt="VariCure Vein Center – 9595 N Kendall Dr., Miami"
                            title="VariCure Vein Center – 9595 N Kendall Dr., Miami"
                            src="/hq.jpg"
                        />
                        : null }
                </div>
            </div>
        );
    }
};

export default Staff;
