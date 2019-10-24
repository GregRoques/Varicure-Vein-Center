import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./Login";
import UpdateHOC from "./UpdateHOC";

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
                    <UpdateHOC/>
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
