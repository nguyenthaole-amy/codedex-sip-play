import React, { useEffect, useState } from "react";
import "./ClockSection.css";
import banner from "./Screenshot 2024-07-10 215717.png"
// import styled, { keyframes } from 'styled-components';

function Banner() {

    return (
        <>
            <div className="clockContainer">
                <img src={banner} className="banner" alt="banner"></img>
            </div>
        </>
    )
}

export default Banner