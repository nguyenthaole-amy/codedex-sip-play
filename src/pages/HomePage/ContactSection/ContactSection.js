import React from "react";
import logo from "../../img/logo(1).png";
import "./ContactSection.css";

function ContactSection() {
    return (
        <div className="contact-container">
            {/* <img className="logo" src={logo} alt="logo" height="50px" /> */}
            <div className="contact-name">Sip & Play</div>
            <div className="contact-info">
                Email: <a href="mailto:example@gmail.com">example@gmail.com</a> <br />
                South Hadley, MA, 01075 <br />
            </div>
        </div>
    )
}

export default ContactSection;