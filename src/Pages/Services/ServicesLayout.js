import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cssServices from "./services.module.css";

const selections = {
    e: ["About", "Faq", "Results"],
    s: ["Acerca", "Faq", "Resultados"]
};

class ServicesLayout extends Component {
    state = {
        selected: "About",
        language: "e"
    }

    componentDidMount () {
        this.getSelected();
    };

    getSelected = () => {
        const serviceSelection = window.location.href.split("/services/").pop();
        const formattedSelection = serviceSelection.charAt(0).toUpperCase() + serviceSelection.substring(1);
        this.setState({
            selected: formattedSelection,
            language: this.props.isEnglish
        });
    }

    Options = ({ display, listNum }) => {
        return (
            <span className={cssServices.optionText} key={ listNum } onClick={() => this.info(display)}>
                <Link to={`/services/${selections.e[listNum].toLowerCase()}`}>{ this.state.language === "e" ? display : selections.s[listNum] }</Link>
            </span>
        );
    };

    info = option => {
        this.setState({
            selected: option
        });
    };

    render () {
        return (
            <div className={cssServices.body}>
                <div className={cssServices.selector}>
                    { selections[this.state.language].map((option, i) => {
                        return (
                            <this.Options
                                display={ option }
                                listNum={ i }
                            />
                        );
                    })}
                </div>
                <div className={cssServices.currentSelection}>
                    <div key= {this.state.selected } className={cssServices.fadeIn}>
                        <div className={ cssServices.compTitle } >{ selections[this.state.language][selections.e.indexOf(this.state.selected)] }</div>
                        { this.props.children }
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

export default connect(mapStateToProps, null)(ServicesLayout);
