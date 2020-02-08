import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cssServices from "./services.module.css";

const selections = {
    e: ["About", "FAQ", "Results"],
    s: ["Quienes Somos", "FAQ", "Resultados"]
};

class ServicesLayout extends Component {
    state = {
        isBold: "",
    };

    componentDidMount () {
        const initialSelection = window.location.href.split("/services/").pop();
        this.isBoldFunction(initialSelection);
    };

    isBoldFunction = toBold => {
        this.setState({
            isBold: toBold
        })
    }

    Options = ({ display, listNum }) => {
        return (
            <span className={cssServices.optionText} key={ listNum }>
                <Link onClick={() => this.isBoldFunction(selections.e[listNum].toLowerCase())} className={this.state.isBold === selections.e[listNum].toLowerCase() ? cssServices.isBold : null} to={`/services/${selections.e[listNum].toLowerCase()}`}>{ this.props.isEnglish === "e" ? display : selections.s[listNum] }</Link>
            </span> 
        );
    };

    render(){
        return (
            <div className={cssServices.body}>
                <div className={cssServices.selector}>
                    { selections[this.props.isEnglish].map((option, i) => {
                        return (
                            <this.Options
                                display={ option }
                                listNum={ i }
                            />
                        );
                    })}
                </div>
                <div className={cssServices.currentSelection}>
                    <div className={cssServices.fadeIn}>
                        { this.props.children }
                    </div>
                </div>
                <div className={cssServices.mobileSpace}><p> blank </p></div>
                <div className={cssServices.mainPageBottom}/>
            </div>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(ServicesLayout);
