import React, { Component } from "react";
import { connect } from "react-redux";
import cssServices from "./services.module.css";
import Faq from "./Components/FAQ";
import About from "./Components/About";
import Results from "./Components/Results";

class Services extends Component {
    state = {
        selected: "About Us",
        language: "e"
    }

    componentDidMount () {
        if (this.props.match.params.param) {
            this.getServiceLink();
        }
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
        const serviceSelection = this.props.match.params.param;
        const formattedSelection = serviceSelection.charAt(0).toUpperCase() + serviceSelection.substring(1);
        if (formattedSelection === "Results" || formattedSelection === "Faq") {
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
        let display;
        this.props.isEnglish === "e"
            ? display = option
            : option === "About Us"
                ? display = "Acerca"
                : option === "Results"
                    ? display = "Resultados"
                    : display = option;

        return (
            <span className={cssServices.optionText} key={ listNum } onClick={() => this.info(option)}>
                { this.state.selected === option ? <span className={cssServices.optionTextSelected}>{ display }</span> : <span>{ display }</span> }
            </span>
        );
    };

    Display = ({ option, language }) => {
        const components = [<About isEnglish={language}/>, <Faq isEnglish={language}/>, <Results isEnglish={language}/>];
        return components[option];
    };

    info = option => {
        this.setState({
            selected: option
        });
    };

    render () {
        const options = ["About Us", "Faq", "Results"];
        let display;
        this.props.isEnglish === "e"
            ? display = this.state.selected
            : this.state.selected === "About Us"
                ? display = "Acerca"
                : this.state.selected === "Results"
                    ? display = "Resultados"
                    : display = this.state.selected;
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
                        <h1 className={ cssServices.compTitle } >{ display }</h1>
                        <this.Display
                            language={this.state.language}
                            option={ options.indexOf(this.state.selected) }
                        />
                    </div>
                </div>
                <div className={cssServices.mainPageBottom}/>
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
