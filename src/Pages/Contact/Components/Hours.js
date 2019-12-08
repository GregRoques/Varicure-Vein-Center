import React from "react";
import { connect } from "react-redux";
import cssHours from "./CSS/hours.module.css";

const Hours = props => {
    const dayNum = (new Date()).getDay();
    return (
        <div className={ cssHours.hoursGrid }>
            <div className={ cssHours.weekDays }>
                <div className={ cssHours.header }>
                    { props.isEnglish === "e" ? "Hours" : "Horas" }
                </div>
                <div className= { dayNum === 1 || dayNum === 2 || dayNum === 3 || dayNum === 4 ? cssHours.highlightDate : null } >
                    { props.isEnglish === "e"
                        ? <div>Monday – Thursday <br/> 8 a.m. – 6 p.m.</div>
                        : <div>Lunes– Jueves <br/> 8 a.m. – 6 p.m.</div>
                    }
                </div> <br/>
                <div className= { dayNum === 5 ? cssHours.highlightDate : null }>
                    { props.isEnglish === "e"
                        ? <div>Friday<br/> 9 a.m. – 3 p.m.</div>
                        : <div>Viernes<br/> 9 a.m. – 3 p.m.</div>
                    }
                </div> <br/>
                <div className= { dayNum === 6 || dayNum === 0 ? cssHours.highlightDate : null }>
                    { props.isEnglish === "e"
                        ? <div>Saturday – Sunday<br/> Closed</div>
                        : <div>Sábado – Domingo<br/>Cerrado</div>
                    }
                </div>
            </div>
            <div className= { cssHours.seperator}>
                <div className={ cssHours.header }>
                    { props.isEnglish === "e" ? "Connect" : "Connecto" }
                </div>
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
                <a href="https://www.facebook.com/VaricureMiami" target="_blank" rel="noopener noreferrer">
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

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Hours);
