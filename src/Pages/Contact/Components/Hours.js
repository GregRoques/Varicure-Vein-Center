import React from "react";
import cssHours from "./hours.module.css";

const Hours = () => {
    const dayNum = (new Date()).getDay();
    return (
        <div className={ cssHours.hoursGrid }>
            <div>
                <div className= { dayNum === 1 || dayNum === 2 || dayNum === 3 || dayNum === 4 ? cssHours.highlightDate : null } >
                Monday – Thursday <br/> 9 a.m. – 5 p.m.
                </div> <br/>
                <div className= { dayNum === 5 ? cssHours.highlightDate : null }>
                Friday <br/>
                9 a.m. – 3 p.m.
                </div> <br/>
                <div className= { dayNum === 6 || dayNum === 0 ? cssHours.highlightDate : null }>
                Saturday – Sunday <br/>
                Closed
                </div>
            </div>
        </div>

    );
};

export default Hours;
