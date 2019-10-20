import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import cssApp from "./app.module.css";
import axios from "axios";

import { connect } from "react-redux";
import { authCheckState } from "./Redux/Actions/Auth";

import Layout from "./Layout/HOC/Layout";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Admin from "./Pages/Admin/Admin";

class App extends Component {
    state = {
        customerReviews1: {
            homePagePic: 0,
            review: "We Take Care of the Spiders",
            url: null,
            name: null,
            social: null
        },
        language: "e"
    };

    componentDidMount () {
        this.userReviews(this.props.isEnglish, true);
        this.props.onTryAutoSignUp();
    };

    componentDidUpdate (prevProps) {
        if (prevProps.isEnglish !== this.props.isEnglish) {
            this.userReviews(this.props.isEnglish, false);
        }
    }

    userReviews = (isEnglish, isNew) => {
        const language = isEnglish;
        const newPic = isNew;
        let number;
        newPic ? number = Math.floor(Math.random() * 3) : number = this.state.customerReviews1.homePagePic;
        axios.get(`http://localhost:2000/reviews/${language}`)
            .then(res => {
                this.setState({
                    customerReviews1: {
                        homePagePic: number,
                        ...res.data[0]
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    NoPage = () => {
        return <Redirect push to= { Home }/>;
    };

    render () {
        return (
            <div className = { cssApp.body }>
                <Layout>
                    <Switch>
                        <Route
                            exact path= "/"
                            render={() => <Home { ...this.state.customerReviews1 } />} />
                        <Route
                            exact path= "/services"
                            render={() => <Services { ...this.state.language} />} />
                        <Route exact path= "/contact" component= { Contact } />
                        <Route exact path = "/admin-login" component= { Admin } />
                        <Route component= { this.NoPage } />
                    </Switch>
                </Layout>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
