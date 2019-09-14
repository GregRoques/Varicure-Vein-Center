import React from "react";
import cssHours from "./CSS/hours.module.css";

const Hours = () => {
    const dayNum = (new Date()).getDay();
    return (
        <div className={ cssHours.hoursGrid }>
            <div className={ cssHours.weekDays }>
                <div className={ cssHours.header }>Hours</div>
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
            <div className= { cssHours.seperator}>
                <div className={ cssHours.header }>Connect</div>
                <div className={ cssHours.connectGrid }>
                    <div>
                        <a href="tel:305-284-8090">
                            <img alt="305-284-8090" className={ cssHours.connectContact } src="/icons/phone.png"/>
                            <br/>
                            (305) 284-8090
                        </a>
                    </div>
                    <div>
                        <a href="mailto:info@vericure.com">
                            <img alt="info@vericure.com" className={ cssHours.connectContact } src="/icons/email.png"/>
                            <br/>
                            info@vericure.com
                        </a>
                    </div>
                </div>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" className={ cssHours.connectSocial } src="/icons/Facebook.png"/>
                </a>
                <a href="https://www.yelp.com/biz/varicure-vein-center-miami-2" target="_blank" rel="noopener noreferrer">
                    <img alt="Yelp" className={ cssHours.connectSocial } src="/icons/yelp.png"/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img alt="Google Business" className={ cssHours.connectSocial } src="/icons/Google.png"/>
                </a>
            </div>
        </div>
    );
};

export default Hours;
