import React from "react";
import { Link } from "react-router-dom";
import cssHeader from "../headerFooter.module.css";

const header = () => {
    return (
        <div className={ cssHeader.headerContainer }>
            <div >
                <Link to="/"><img className={ cssHeader.VClogo } src="/logos/siteLogo.png"/></Link>
            </div>

        </div>
    );
};

export default header;
