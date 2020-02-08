import React, { Component } from "react";
import cssApp from "./app.module.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectReviews } from "./Redux/Actions/Reviews";
import Layout from "./Layout/HOC/Layout";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
// import Reviews from "./Pages/Reviews/Reviews";
// import Admin from "./Pages/Admin/Admin";

class App extends Component {
    componentDidMount () {
        this.userReviews();
    };

    userReviews = () => {
        this.props.Reviews();
    };

    NoPage = () => {
        return <Redirect push to= { Home }/>;
    };

    serviceAbout = () => {
        return <Redirect push to="/services/about"/>;
    }

    render () {
        return (
            <div className = { cssApp.body }>
                <Layout>
                    <Switch>
                        <Route exact path= "/" component= { Home }/>} />
                        <Route exact path= "/contact" component= { Contact } />
                        <Route exact path= "/services" component= { this.serviceAbout } />
                        <Route exact path= "/services/:param" component= { Services } />
                        {/* <Route exact path= "/reviews" component= { Reviews } /> */}
                        <Route component= { this.NoPage } />
                    </Switch>
                </Layout>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        Reviews: () => dispatch(selectReviews())
    };
};

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(App);
