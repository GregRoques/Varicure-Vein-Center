import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./Login";

class Admin extends Component {
    render () {
        if (this.props.userId === null && this.props.idToken === null) {
            return (
                <div>
                    <Login />
                </div>
            );
        } else {
            return (
                <div>
                    Not Quite Here Yet.
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        idToken: state.auth.idToken
    };
};

export default connect(mapStateToProps, null)(Admin);
