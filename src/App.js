import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import cssApp from "./app.module.css";
import axios from "axios";

import { connect } from "react-redux";
import { authCheckState } from "./Redux/Actions/Auth";

import { api } from "./Aux/apiLink";
import Layout from "./Layout/HOC/Layout";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
// import Admin from "./Pages/Admin/Admin";

class App extends Component {
    state = {
        customerReviews1: {
            homePagePic: 0,
            englishReview: "We Take Care of the Spiders",
            spanishReview: "Cuidamos de las arañas",
            url: null,
            name: null,
            social: null
        }
    };

    componentDidMount () {
        this.userReviews(true);
        this.props.onTryAutoSignUp();
    };

    userReviews = (newPic) => {
        let number;
        newPic ? number = Math.floor(Math.random() * 3) : number = this.state.customerReviews1.homePagePic;
        axios.get(`${api}reviews`)
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
                        <Route exact path= "/contact" component= { Contact } />
                        <Route exact path= "/services" component= { Services } />
                        <Route exact path= "/services/:param" component= { Services } />
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
