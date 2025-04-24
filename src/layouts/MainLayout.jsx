import React, { useState, useEffect } from "react";
import Header from "../components/MainHeader.jsx";
import Footer from "../components/MainFooter.jsx";
import AuthModal from "../components/AuthModal/AuthModal.jsx"
import "../assets/style/MainLayout.scss"

const MainLayout = ({ children }) => {
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [authMode, setAuthMode] = useState('login')
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    useEffect(() => {
        const userFromStorage = localStorage.getItem('user');
        if (userFromStorage) {
          setLoggedInUser(JSON.parse(userFromStorage));
        }
      }, []);
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLoggedInUser(null);
        alert('Đăng xuất thành công');
    };
    


    const handleOpenAuth = (mode) => {
        setAuthMode(mode)
        setShowAuthModal(true)
    }

    return (
        <div className="main-layout">
            <Header className="header"  onAuthClick={handleOpenAuth} user={loggedInUser} onLogout={handleLogout}/>
            {showAuthModal && (
                <AuthModal 
                    mode={authMode}
                    onClose={() => setShowAuthModal(false)}
                    onSwitchMode={(mode) => setAuthMode(mode)}
                    setLoggedInUser={setLoggedInUser}
                />
            )}
            <div className="main-content">{children}</div>
            <Footer className="footer" />
        </div>
    )
}

export default MainLayout;