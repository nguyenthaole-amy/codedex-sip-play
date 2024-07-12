import React from "react";
import logo from "../../pages/img/logo(1).png";
import { NavLinks } from "./NavLinks";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <div className="logo">Sip & Play</div>
            <ul className="links-menu">
                {NavLinks.map((items, index) => {
                    return (
                        <li key={index} className="links">
                            <a className={items.cName} href={items.url} target={items.target}>{items.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;