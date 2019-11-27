import React from "react";
import cssMap from "./CSS/map.module.css";
import { connect } from "react-redux";

const map = props => {
    return (
        <div >
            <div className={cssMap.header}>
                { props.isEnglish === "e" ? "Directions" : "Direcciones" }
            </div>
            <iframe title="9595 N.Kendall Dr., Miami" className={cssMap.mapBody} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.4936270180046!2d-80.35060888498064!3d25.68807548367014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c73c861e9189%3A0xeb40d00fad0dec28!2s9595%20N%20Kendall%20Dr%2C%20Miami%2C%20FL%2033176!5e0!3m2!1sen!2sus!4v1568052164994!5m2!1sen!2sus"></iframe>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(map);
