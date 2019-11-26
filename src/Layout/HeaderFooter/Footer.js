import React from "react";
import cssFooter from "./CSS/footer.module.css";
import { mapSelector } from "../../Functions/MapSelector";

const dayNum = (new Date()).getDay();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const today = days[dayNum];
let time;

if (dayNum === 5) {
    time = "9a – 3p";
} else if (dayNum === 6 || dayNum === 0) {
    time = "Closed";
} else {
    time = "8a – 6p";
};

const Footer = props => {
    const cssJoin = [props.background, cssFooter.grid];
    return (
        <div className={ cssFooter.footerContainer }>
            <div className={cssJoin.join(" ")}>
                <div>
                    <span className={ cssFooter.visibleBig } ><a href="tel:305-284-8090">(305) 284-8090</a></span>
                    <span className={ cssFooter.visibleSmall }><a href="tel:305-284-8090">Call</a></span>
                </div>
                <div title="Open Map" className={ cssFooter.address } onClick ={() => mapSelector("www.google.com/maps/place/9595+N+Kendall+Dr,+Miami,+FL+33176/@25.6880755,-80.3506089,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9c73c861e9189:0xeb40d00fad0dec28!8m2!3d25.6880755!4d-80.3484202")} >
                    <span className={ cssFooter.visibleBig }>9595 N.Kendall Dr. • Miami</span>
                    <span className={ cssFooter.visibleSmall }>Map</span>
                </div>
                <div>
                    <span className={ cssFooter.visibleBig }> {today}: <span className={ time === "Closed" ? cssFooter.closed : null }>{time}</span></span>
                    <span className={ cssFooter.visibleSmall }><a href="mailto:info@vericure.com">Email</a></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
