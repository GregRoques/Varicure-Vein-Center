import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Layout from "./Layout/HOC/Layout";
import cssApp from "./app.module.css";
import axios from "axios";
import Home from "./Pages/Home/Home";
import Services from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Admin from "./Pages/Admin/Login";

class App extends Component {
    state ={
        customerReview: null
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

    componentDidMount () {
        this.userReviews();
    }

    NoPage = () => {
        return <Redirect push to= { Home }/>;
    };

    render () {
        return (
            <div className = { cssApp.body }>
                <Switch>
                    <Route exact path = "/admin-login" component= { Admin } />
                    <Layout>
                        <Route
                            exact path= "/"
                            render={() => <Home {...this.state.customerReview} />} />
                        <Route exact path= "/services" component= { Services } />
                        <Route exact path= "/contact" component= { Contact } />
                        <Route component= { this.NoPage } />
                    </Layout>
                </Switch>
            </div>
        );
    }
};

export default withRouter(App);
