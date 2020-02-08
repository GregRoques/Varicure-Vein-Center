import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import ServicesLayout from "./ServicesLayout";
import Faq from "./Components/FAQ";
import About from "./Components/About";
import Results from "./Components/Results";

class Services extends Component {
    NoSelection = () => {
        return <Redirect push to="/services/about"/>;
    };

    render () {
        return (
            <div>
                {this.props.match.params.param !== "about" && this.props.match.params.param !== "faq" && this.props.match.params.param !== "results"
                    ? this.NoSelection()
                    : null
                }
                <ServicesLayout>
                    <Switch>
                        <Route exact path="/services/about/" component={ About } />
                        <Route exact path="/services/faq/" component={ Faq } /> />
                        <Route exact path="/services/results/" component={Results} />
                    </Switch>
                </ServicesLayout>
            </div>
        );
    }
}

export default withRouter(Services);
