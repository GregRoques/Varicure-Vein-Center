import React from "react";
import cssHome from "./home.module.css";

const Home = props => {
    console.log(props);
    return props.review && props.name ? (
        <div className={ cssHome.userReview }>
            "{props.review}" – {props.url ? <a href={props.url} target="_blank">{props.name}</a> : props.name }
        </div>
    ) : (
        <div>
            We Take Care of the Spiders
        </div>
    );
};

export default Home;
