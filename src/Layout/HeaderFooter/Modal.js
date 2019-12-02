import React from "react";
import { Link } from "react-router-dom";
import cssModal from "./CSS/modal.module.css";

const Modal = ({ isOpen, close, isEnglish, languageToggle, isFadeOut }) => {
    return isOpen ? (
        <div className = { !isFadeOut ? cssModal.modalPositionOpen : cssModal.modalPositionClose }>
            <div className = { !isFadeOut ? cssModal.modalContainer : cssModal.modalDisappear}>
                <span className={ cssModal.parent } onClick={ () => close("close")}>
                    <Link to= "/">{ isEnglish === "e" ? "Home" : "Principal" }</Link>
                </span>
                <span className={ cssModal.serviceParent } onClick={ () => close("close")}>
                    <Link to= "/services/faq">{ isEnglish === "e" ? "Services" : "Servicios" }</Link>
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/faq")} >
                    <Link to= "/services/faq">• FAQ</Link>
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/results") } >
                    <Link to= "/services/results">{ isEnglish === "e" ? "• Results" : "• Resultados" }</Link>
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/treatments") } >
                    <Link to= "/services/treatments">{ isEnglish === "e" ? "• Treatments" : "• Tratos" }</Link>
                </span>
                <span className={ cssModal.parent } onClick={ () => close("/contact") }t>
                    <Link to= "/contact">{ isEnglish === "e" ? "Contact" : "Contacto" }</Link>
                </span>
                <span className={ cssModal.parent } onClick={ languageToggle }>
                    { isEnglish === "e" ? "Español" : "English" }
                </span>
            </div>
        </div>
    ) : null;
};

export default Modal;
