import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/style/MainHeader.scss';

const MainHeader = ({ onAuthClick, user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('RẠP PHIM');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook này sẽ lấy đường dẫn hiện tại

  const navItems = [
    { label: 'RẠP PHIM', path: '/' },
    { label: 'VÉ CỦA TÔI', path: '/my-ticket' },
    { label: 'BLOG PHIM', path: '/blog-phim' }
  ];

  // Cập nhật activeTab khi location thay đổi
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    if (activeItem) {
      setActiveTab(activeItem.label);
    }
  }, [location, navItems]);

  return (
    <header className="cinene-header">
      <div className="header-top">
        <div className="container">
          <div className="logo-container">
            <Link to="/" className="logo">
              <span className="logo-c">C</span>
              <span className="logo-i">I</span>
              <span className="logo-n">N</span>
              <span className="logo-e">E</span>
              <span className="logo-n2">M</span>
              <span className="logo-e2">E</span>
            </Link>
          </div>

          <div className="auth-buttons">
            {user ? (
              <div className="user-info">
                <span className="user-name">👤 {user.fullName}</span>
                <button className="logout-btn" onClick={onLogout}>
                  ĐĂNG XUẤT
                </button>
              </div>
            ) : (
              <>
                <button className="auth-btn login-btn" onClick={() => onAuthClick('login')}>
                  <span className="btn-icon">👤</span>
                  <span className="btn-text">ĐĂNG NHẬP</span>
                </button>
                <button className="auth-btn register-btn" onClick={() => onAuthClick('register')}>
                  <span className="btn-icon">✍️</span>
                  <span className="btn-text">ĐĂNG KÝ</span>
                </button>
              </>
            )}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`header-bottom ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <nav className="main-nav">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={activeTab === item.label ? 'active' : ''}
                  onClick={() => setActiveTab(item.label)}
                >
                  <Link to={item.path}>
                    {item.label}
                    <span className="nav-underline"></span>
                    <span className="nav-hover-effect"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="header-decoration">
        <div className="film-strip"></div>
        <div className="spotlight"></div>
      </div>
    </header>
  );
};

export default MainHeader;
