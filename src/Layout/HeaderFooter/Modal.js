import React from "react";
import cssModal from "./CSS/modal.module.css";

const Modal = ({ isOpen, close, isEnglish, languageToggle, isFadeOut }) => {
    return isOpen ? (
        <div className = { cssModal.modalPosition }>
            <div className = { !isFadeOut ? cssModal.modalContainerIn : cssModal.modalContainerOut }>
                { isEnglish ? "Services" : "Servicios" }
                <ul>
                    <li><div onClick={ close("/services/faq") }>
                        { isEnglish ? "FAQ" : "Servicios" }
                    </div></li>
                    <li><div onClick={ close("/services/results") }>
                        { isEnglish ? "Results" : "Servicios" }
                    </div></li>
                    <li><div onClick={ close("/services/staff") }>
                        { isEnglish ? "Staff" : "Servicios" }
                    </div></li>
                    <li>< div onClick={ close("/services/treatments") }>
                        { isEnglish ? "Treatments" : "Servicios" }
                    </div></li>
                </ul>
                <div onClick={ close("/contact") }>
                    { isEnglish ? "Contact" : "Contacto" }
                </div>
                <span onClick={ languageToggle }>
                    { isEnglish === "e" ? "English" : "Español" }
                </span>
            </div>
        </div>
    ) : null;
};

export default Modal;
