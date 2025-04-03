import React from "react";
import Header from "../components/MainHeader.jsx";
import Footer from "../components/MainFooter.jsx";
import "../assets/style/MainLayout.scss"

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Header className="header" />
            <div className="main-content">{children}</div>
            <Footer className="footer" />
        </div>
    )
}

export default MainLayout;