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
    state ={
        customerReviews1: {
            homePagePic: 0,
            review: "We Take Care of the Spiders",
            url: null,
            name: null,
            social: null
        }
    };

    componentDidMount () {
        this.props.onTryAutoSignUp();
        this.userReviews();
    };

    userReviews = () => {
        const number = Math.floor(Math.random() * 3);
        axios.get("http://localhost:2000/reviews")
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
                        <Route exact path= "/services" component = { Services }/>
                        <Route exact path= "/contact" component= { Contact } />
                        <Route exact path = "/admin-login" component= { Admin } />
                        <Route component= { this.NoPage } />
                    </Switch>
                </Layout>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(authCheckState())
    };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
