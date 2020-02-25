import React from "react";
import { Link } from "react-router-dom";
import { mapSelector } from "../../Functions/MapSelector";
import cssModal from "./CSS/modal.module.css";

const Modal = ({ isOpen, close, isEnglish, languageToggle, isFadeOut }) => {
    return isOpen ? (
        <div className = { !isFadeOut ? cssModal.modalPositionOpen : cssModal.modalPositionClose }>
            <div className = { !isFadeOut ? cssModal.modalContainer : cssModal.modalDisappear}>
                <span className={ cssModal.parent } onClick={ languageToggle }>
                    { isEnglish === "e" ? "¿Español?" : "English?" }
                </span>
                <span className={ cssModal.subService  } onClick={ () => close("close")}>
                    <Link to= "/">{ isEnglish === "e" ? "• Home" : "• Principal" }</Link>
                </span>
                <span className={ cssModal.subService  } onClick={ () => close("close")}>
                    <Link to= "/services/about">{ isEnglish === "e" ? "• About Us" : "• Quienes somos" }</Link>
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/faq")} >
                    <Link to= "/services/faq">{ isEnglish === "e" ? "• FAQ" : "• Preguntas" }</Link>
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/results") } >
                    <Link to= "/services/results">{ isEnglish === "e" ? "• Results" : "• Fotos" }</Link>
                </span>
                <span className={ cssModal.subService} onClick={ () => close("/contact") }t>
                    <Link to= "/contact">{ isEnglish === "e" ? "• Contact" : "• Informacion" }</Link>
                </span>
                
                <div className = {cssModal.modalContact }>
                    <div><a href="tel:305-284-8090">
                        <b>(305) 284-8090</b>
                    </a></div>

                    <div title="Open Map" onClick ={() => mapSelector("www.google.com/maps/place/9595+N+Kendall+Dr,+Miami,+FL+33176/@25.6880755,-80.3506089,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9c73c861e9189:0xeb40d00fad0dec28!8m2!3d25.6880755!4d-80.3484202")} >
                        9595 N.Kendall Dr. • Miami
                    </div>
                        
                    <div><a href="mailto:info@varicure.com?subject=New%20Question%20for%20Dr.%20Gurvich">
                        info@varicure.com
                    </a></div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Modal;
