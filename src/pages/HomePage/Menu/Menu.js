import React, { useState, useEffect } from "react";
import './Menu.css';
import CanCanvas from "./Can";


function Menu() {
    // const can = useGLTF("./ghana_organics_can_drink/scene.gltf");

    return (
        <>
            <div className="menu-container">
                <div className="title">Menu</div>
                <hr />
                <div className="menu">
                    Coffee
                    {<CanCanvas />}
                </div>
            </div >
        </>
    )
}

export default Menu;