import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout/HOC/Layout";
import Home from "./Pages/Home";
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
                        <Route component = { this.NoPage } />
                    </Switch>
                </Layout>
            </div>
        );
    }
};

export default App;
