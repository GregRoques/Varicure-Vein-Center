import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cssServices from "./services.module.css";

const selections = {
    e: ["About", "Faq", "Results"],
    s: ["Acerca", "Faq", "Resultados"]
};

const ServicesLayout = props => {
    const Options = ({ display, listNum }) => {
        return (
            <span className={cssServices.optionText} key={ listNum }>
                <Link to={`/services/${selections.e[listNum].toLowerCase()}`}>{ props.isEnglish === "e" ? display : selections.s[listNum] }</Link>
            </span>
        );
    };

    return (
        <div className={cssServices.body}>
            <div className={cssServices.selector}>
                { selections[props.isEnglish].map((option, i) => {
                    return (
                        <Options
                            display={ option }
                            listNum={ i }
                        />
                    );
                })}
            </div>
            <div className={cssServices.currentSelection}>
                <div className={cssServices.fadeIn}>
                    { props.children }
                </div>
            </div>
            <div className={cssServices.mainPageBottom}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(ServicesLayout);
