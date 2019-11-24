import React from "react";
import cssModal from "./CSS/modal.module.css";

const Modal = ({ isOpen, close, isEnglish, languageToggle, isFadeOut }) => {
    return isOpen ? (
        <div className = { !isFadeOut ? cssModal.modalPositionOpen : cssModal.modalPositionClose }>
            <div className = { cssModal.modalContainer }>
                <span className={ cssModal.serviceParent } >
                    { isEnglish === "e" ? "Services" : "Servicios" }
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/faq") }>
                    • FAQ
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/results") }>
                    { isEnglish === "e" ? "• Results" : "• Resultados" }
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/staff") }>
                    { isEnglish === "e" ? "• Staff" : "• Personal" }
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/services/treatments") }>
                    { isEnglish === "e" ? "• Treatments" : "• Tratos" }
                </span>
                <span className={ cssModal.parent } onClick={ () => close("/contact") }>
                    { isEnglish === "e" ? "Contact" : "Contacto" }
                </span>
                <span className={ cssModal.parent } onClick={ languageToggle }>
                    { isEnglish === "e" ? "English" : "Español" }
                </span>
            </div>
        </div>
    ) : null;
};

export default Modal;
