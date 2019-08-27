import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Footer-HOC/Layout";

class App extends Component {
    NoPage = () => {
        return <Redirect push to= { Home }/>;
    };

    render () {
        return (
            <Layout>
                <Switch>
                    <Route exact path= "/" component= { Home } />
                    <Route component = { this.NoPage } />
                </Switch>
            </Layout>
        );
    }
};

export default App;
