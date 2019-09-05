import React from "react";
import cssFooter from "./footer.module.css";

const footer = () => {
    const dayNum = (new Date()).getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const today = days[dayNum];
    let time;

    if (dayNum === 5) {
        time = "9a – 3p";
    } else if (dayNum === 6 || dayNum === 7) {
        time = "Closed";
    } else {
        time = "9a – 5p";
    };

    return (
        <div className={ cssFooter.footerContainer }>
            <div className={cssFooter.grid}>
                <div>
                    <a href="tel:305-284-8090">(305) 284-8090</a>
                </div>
                <div>
                    <a href="https://www.google.com/maps/place/9595+N+Kendall+Dr,+Miami,+FL+33176/@25.6880755,-80.3506089,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9c73c861e9189:0xeb40d00fad0dec28!8m2!3d25.6880755!4d-80.3484202" target="_blank" rel="noopener noreferrer">9595 N.Kendall Dr. • Miami</a>
                </div>
                <div>
                    {today}: <span className={ time === "Closed" ? cssFooter.closed : null }>{time}</span>
                </div>
            </div>
        </div>
    );
};

export default footer;
