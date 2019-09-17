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
        customerReview: null
    };

    componentDidMount () {
        this.props.onTryAutoSignUp();
        this.userReviews();
    };

    userReviews = () => {
        const number = Math.floor(Math.random() * 2);
        axios.get("http://localhost:2000/reviews")
            .then(res => {
                this.setState({
                    customerReview: {
                        ...res.data,
                        homePagePic: number
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
                            render={() => <Home {...this.state.customerReview} />} />
                        <Route exact path= "/services" component= { Services } />
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
