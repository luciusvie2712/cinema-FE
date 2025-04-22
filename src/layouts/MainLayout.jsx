import React, { useState } from "react";
import Header from "../components/MainHeader.jsx";
import Footer from "../components/MainFooter.jsx";
import AuthModal from "../components/AuthModal/AuthModal.jsx"
import "../assets/style/MainLayout.scss"

const MainLayout = ({ children }) => {
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [authMode, setAuthMode] = useState('login')

    const handleOpenAuth = (mode) => {
        setAuthMode(mode)
        setShowAuthModal(true)
    }

    return (
        <div className="main-layout">
            <Header className="header"  onAuthClick={handleOpenAuth} />
            {showAuthModal && (
                <AuthModal 
                    mode={authMode}
                    onClose={() => setShowAuthModal(false)}
                    onSwitchMode={(mode) => setAuthMode(mode)}
                />
            )}
            <div className="main-content">{children}</div>
            <Footer className="footer" />
        </div>
    )
}

export default MainLayout;