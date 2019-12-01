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
        window.scrollTo(0, 0);
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
                    bio: "Loading error, please check back later.\nError de carga, por favor vuelva más tarde."
                });
            });
    };

    isBio = () => {
        return (
            <div className={ cssServices.doctor }>
                <div className={ cssServices.bioGrid }>
                    <div>
                        <img className={cssServices.staffImages} alt="Dr. Reuben Gurvich" title="Dr. Reuben Gurvich" src="/Reuben.jpg"/>
                    </div>
                    <div>
                        <h3>{ this.state.name }</h3>
                        <p>{ this.state.bio }</p>
                    </div>
                </div>
            </div>
        );
    }

    officeLocation = () => {
        return (
            <div className ={ cssServices.officeLocation }>
                <h3> Visit Us Today!</h3>
                <img
                    className={cssServices.image2Border }
                    alt="VariCure Vein Center – 9595 N Kendall Dr., Miami"
                    title="VariCure Vein Center – 9595 N Kendall Dr., Miami"
                    src="/hq.jpg"
                />
                <div>9595 N.Kendall Dr. • Miami</div>

            </div>
        );
    }

    render () {
        const { name, title, bio } = this.state;
        return (
            <div>
                <div className={ cssServices.staffBorder }>
                    { name && title
                        ? this.isBio()
                        : null }
                    { !name && !title ? <div>{ bio }</div> : null }
                    { name && title
                        ? this.officeLocation()
                        : null }
                </div>
            </div>
        );
    }
};

export default Staff;
