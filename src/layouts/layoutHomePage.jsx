import React from "react";
import Header from "../components/MainHeader.jsx";
import Footer from "../components/MainFooter.jsx";
import "../assets/style/MainLayout.scss"

const layoutHomePage = ({ children }) => {
    return (
        <div className="main-layout">
            <Header />
            <div className="main-content">{children}</div>
            <Footer />
        </div>
    )
}

export default layoutHomePage;