import React, { Component } from "react";
import { connect } from "react-redux";
import cssServices from "./services.module.css";
import Staff from "./Components/Staff";
import Faq from "./Components/FAQ";
import Treatments from "./Components/Treatments";
import Results from "./Components/Results";

class Services extends Component {
    state = {
        selected: "Staff",
        language: "e"
    }

    componentDidMount () {
        this.getServiceLink();
    };

    componentDidUpdate (prevProps) {
        if (window.location.pathname !== "/services") {
            this.getServiceLink();
        }
        if (prevProps.isEnglish !== this.props.isEnglish) {
            this.setState({
                language: this.props.isEnglish
            });
        }
    }

    getServiceLink = () => {
        const serviceSelection = (window.location.pathname).split("/services/").pop();
        const formattedSelection = serviceSelection.charAt(0).toUpperCase() + serviceSelection.substring(1);
        if (formattedSelection === "Treatments" || formattedSelection === "Results" || formattedSelection === "Faq" || formattedSelection === "Staff") {
            this.setState({
                selected: formattedSelection,
                language: this.props.isEnglish
            });
            window.history.pushState(null, null, `/services`);
        } else {
            window.history.pushState(null, null, `/services`);
            this.setState({
                language: this.props.isEnglish
            });
        }
    }

    Options = ({ option, listNum }) => {
        return (
            <span className={cssServices.optionText} key={ listNum } onClick={() => this.info(option)}>
                { this.state.selected === option ? <span className={cssServices.optionTextSelected}>{ option }</span> : <span>{ option }</span> }
            </span>
        );
    };

    Display = ({ option, language }) => {
        const components = [<Treatments isEnglish={language}/>, <Results isEnglish={language}/>, <Faq isEnglish={language}/>, <Staff isEnglish={language}/>];
        return components[option];
    };

    info = option => {
        this.setState({
            selected: option
        });
    };

    render () {
        const options = ["Treatments", "Results", "Faq", "Staff"];
        return (
            <div className={cssServices.body}>
                <div className={cssServices.selector}>
                    { options.map((option, i) => {
                        return (
                            <this.Options
                                option={ option }
                                listNum={ i }
                            />
                        );
                    })}
                </div>
                <div className={cssServices.currentSelection}>
                    <div key= {this.state.selected } className={cssServices.fadeIn}>
                        <this.Display
                            language={this.state.language}
                            option={ options.indexOf(this.state.selected) }
                        />
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Services);
