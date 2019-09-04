import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Layout from "./Layout/HOC/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import cssApp from "./app.module.css";
import axios from "axios";

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
                <Layout>
                    <Switch>
                        <Route
                            exact path= "/"
                            render={() => <Home {...this.state.customerReview} />} />
                        <Route exact path= "/about" component= { About } />
                        <Route component = { this.NoPage } />
                    </Switch>
                </Layout>
            </div>
        );
    }
};

export default withRouter(App);
