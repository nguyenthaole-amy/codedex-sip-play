import React, { useEffect } from "react";
import "./HomePage.css";
import { useLocation } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Banner from "./Banner/Banner";
import ContactSection from "./ContactSection/ContactSection";
import Menu from "./Menu/Menu"
// import styled, { keyframes } from 'styled-components';

function HomePage() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    console.log("Credit: https://stackoverflow.com/questions/40280369/use-anchors-with-react-router")

    useEffect(() => {
        document.title = "Sip & Play"
    })

    return (
        <>
            <div className="mainPage">
                <div className="banner">{<Banner />}</div>
                <div id="calendar" className="calendar">{<Calendar />}</div>
                <div id="menu" className="menu">{<Menu />}</div>
                <div id="contact" name="contact">{<ContactSection />}</div>
            </div>
        </>
    )
}

export default HomePage;