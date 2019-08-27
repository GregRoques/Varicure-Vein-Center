import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Layout from "./Layout/HOC/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import cssApp from "./app.module.css";

class App extends Component {
    NoPage = () => {
        return <Redirect push to= { Home }/>;
    };

    render () {
        return (
            <div className = { cssApp.body }>
                <Layout>
                    <Switch>
                        <Route exact path= "/" component= { Home } />
                        <Route exact path= "/about" component= { About } />
                        <Route component = { this.NoPage } />
                    </Switch>
                </Layout>
            </div>
        );
    }
};

export default withRouter(App);
