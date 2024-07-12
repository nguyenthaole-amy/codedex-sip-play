import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";


function PagesWNav() {
    return (
        <React.Fragment>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                {/* <Route path="about" element={<AboutSection />}></Route>
                <Route path="projects" element={<ProjectSection />}></Route>
                <Route path="/test" element={<TestP />}></Route> */}
            </Routes>
            <Footer />
        </React.Fragment>
    );
}

export default PagesWNav;
