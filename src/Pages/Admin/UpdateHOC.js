import React, { Component } from "react";
import { connect } from "react-redux";

// css
import updateHocCSS from "./entries.module.css";

// actions
import { logOut } from "../../Actions/Auth";

class Entries extends Component {
    state = {
        currentCategory: "Contacts",
        language: "e",
        isModalOpen: false
    }

    categoryHandler = e => {
        this.setState({
            category: e.target.value
        });
    };

    languageHandler = e => {
        this.setState({
            language: e.target.value
        });
    };

    Display = option => {
        const displayProps = [
            this.state.language,
            this.state.isModalOpen,
            this.closeModal
        ];
        return option === "Personal Data" ? <PersonalData props={[...displayProps]}/>
            : option === "Treatments" ? <Treatments props={[...displayProps]}/>
                : option === "Reviews" ? <Review props={[...displayProps]}/>
                    : option === "FAQs" ? <FAQ props={[...displayProps]}/>
                        : option === "Staff" ? <Staff props={[...displayProps]}/>
                            : null;
    };

    openModal = () => {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    }

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
                </div>
                <this.Display option={this.state.currentCategory}/>
                <div className={updateHocCSS.buttonPosition}>
                    <button className={updateHocCSS.publishButtons} onClick={() => this.submitHandler()}>Submit</button>
                    { this.state.category !== "Personal Data" || this.state.category !== "Staff" ? <button className={updateHocCSS.publishButtons} onClick={() => this.openModal()}>Update Existing</button> : null }
                    <button className={updateHocCSS.publishButtons} onClick={() => this.props.LogOut()}>Log Out</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        idToken: state.auth.idToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LogOut: () => dispatch(logOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
