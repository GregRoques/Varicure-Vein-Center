import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "";
import cssLogin from "./AdminCSS/login.module.css";

class Login extends Component {
    state={
        email: "",
        password: ""
    };

    changedHandler = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmitHandler = e => {
        e.preventDefault();
        // const { email, password } = this.state;
        // this.props.onAuth(email, password);
    };

    render () {
        return (
            <div className={ cssLogin.loginBody}>
                <div className={cssLogin.logInPosition}>
                    <form className={cssLogin.logInForm} onSubmit={e => this.onSubmitHandler(e)}>
                        <img className={cssLogin.logo} alt="VeriCure-logo" src="/logos/smallLogo.png"/><br/>
                        <input
                            className={cssLogin.inputText}
                            type="email"
                            placeholder="EMAIL"
                            id = "email"
                            onChange={this.changedHandler}
                            value={this.state.email}
                        /> <br/>
                        <input
                            className={cssLogin.inputText}
                            type="password"
                            placeholder="PASSWORD"
                            id = "password"
                            onChange={this.changedHandler}
                            value={this.state.password}
                        /> <br/>
                        <button className={cssLogin.inputSubmit} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onAuth: (email, password) => dispatch(actions.auth(email, password))
//     };
// };

// export default connect(null, mapDispatchToProps)(Login);

export default Login;
