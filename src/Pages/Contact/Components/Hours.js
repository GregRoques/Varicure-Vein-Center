import React from "react";
import { connect } from "react-redux";
import cssHours from "./CSS/hours.module.css";

const Hours = props => {
    const dayNum = (new Date()).getDay();
    return (
        <div className={ cssHours.hoursGrid }>
            <div className= { cssHours.seperator}>
                <div className={ cssHours.header }>
                    <div className={cssHours.contactBig}>{ props.isEnglish === "e" ? "Call Us" : "Llámanos" }</div>
                    <div className={cssHours.contactSmall}>{ props.isEnglish === "e" ? "Contact" : "Informacion" }</div>
                </div>
                <div className={ cssHours.connectGrid }>
                    <div className={ cssHours.hitEmWithTheFlex}>
                        <a href="tel:305-284-8090">
                            <img alt="305-284-8090" className={ cssHours.connectContact } src={"/myImages/phone.png"}/>
                            <br/>
                            (305) 284-8090
                        </a>
                    </div>
                    <div className={ cssHours.hitEmWithTheFlex}>
                        <a href="mailto:info@varicureveincenter.com?subject=Question for Dr. Gurvich">
                            <img alt="info@varicureveincenter.com" className={ cssHours.connectContact } src="/myImages/email.png"/>
                            <br/>
                            info@varicure.com
                        </a>
                    </div>
                </div>
                <a href="https://www.facebook.com/VaricureMiami" target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" className={ cssHours.connectSocial } src="/myImages/FacebookBox.png"/>
                </a>
                <a href="https://www.instagram.com/varicuremiami" target="_blank" rel="noopener noreferrer">
                    <img alt="Insta" className={ cssHours.connectSocial } src="/myImages/InstaBox.png"/>
                </a>
                {/* <a href="" target="_blank" rel="noopener noreferrer">
                    <img alt="Google Business" className={ cssHours.connectSocial } src="/myImages/Google.png"/>
                </a> */}
            </div>
            <div className={ cssHours.weekDays }>
                <div className={ cssHours.header }>
                    { props.isEnglish === "e" ? "Hours" : "Horas" }
                </div>
                <div className= { dayNum === 1 || dayNum === 2 || dayNum === 3 || dayNum === 4 ? cssHours.highlightDate : null } >
                    { props.isEnglish === "e"
                        ? <div>Monday – Thursday <br/> 9 a.m. – 5 p.m.</div>
                        : <div>Lunes– Jueves <br/> 9 a.m. – 5 p.m.</div>
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
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Hours);
