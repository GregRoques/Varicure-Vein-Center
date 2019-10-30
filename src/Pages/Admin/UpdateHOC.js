import React, { Component } from "react";
import { connect } from "react-redux";

// css
import updateHocCSS from "./entries.module.css";

// actions
import { logOut } from "../../Actions/Auth";

class Entries extends Component {
    state = {
        currentCategory: "Contacts",
        language: "e"
    }

    categoryHandler = e => {
        this.setState({
            currentCategory: e.target.value
        });
    };

    languageHandler = e => {
        this.setState({
            language: e.target.value
        });
    };

    Display = option => {
        return option === "Personal Data" ? <PersonalData />
            : option === "Treatments" ? <Treatments />
                : option === "Reviews" ? <Review />
                    : option === "FAQs" ? <FAQ />
                        : option === "Staff" ? <Staff />
                            : null;
    };

    render () {
        return (
            <div>
                <div className={updateHocCSS.logOutTime}>
                    You will be logged out at <b>{localStorage.getItem("logOutTime")}</b>
                </div>
                <div className={updateHocCSS.buttonPosition}>
                    <select className={ updateHocCSS.shortForm } onChange={e => this.categoryHandler(e)}>
                        <option selected value="Personal Data">Download Contacts</option>
                        <option value="Staff">Edit Staff</option>
                        <option value="Treatments">Edit Treatments</option>
                        <option value="FAQs"> Edit FAQs </option>
                        <option value="Reviews"> Edit Reviews </option>
                    </select>
                    <select className={ updateHocCSS.shortForm } onChange={e => this.languageHandler(e)} >
                        <option selected value="e">English</option>
                        <option value="s">Spanish</option>
                    </select>
                    <button className={updateHocCSS.publishButtons} onClick={() => this.props.LogOut()}>Log Out</button>
                </div>
                <this.Display option={this.state.currentCategory}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        idToken: state.auth.idToken,
        language: state.isEnglish.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LogOut: () => dispatch(logOut())
    }; //need language dispatch
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
