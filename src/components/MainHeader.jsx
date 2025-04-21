import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/MainHeader.scss';

const MainHeader = () => {
  const [activeTab, setActiveTab] = useState('PHIM ĐANG CHIẾU');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'LỊCH CHIẾU',
    'PHIM ĐANG CHIẾU',
    'TIN TỨC & KHUYẾN MÃI',
    'VÉ CỦA TÔI',
    'BLOG PHIM'
  ];

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
              <span className="logo-n2">N</span>
              <span className="logo-e2">E</span>
            </Link>
          </div>
          
          <div className="auth-buttons">
            <button className="auth-btn login-btn">
              <span className="btn-icon">👤</span>
              <span className="btn-text"><Link to='/Login'>ĐĂNG NHẬP</Link></span>
            </button>
            <button className="auth-btn register-btn">
              <span className="btn-icon">✍️</span>
              <span className="btn-text"><Link to='/Register'>ĐĂNG KÝ</Link></span>
            </button>
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
                  className={activeTab === item ? 'active' : ''}
                  onClick={() => setActiveTab(item)}
                >
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`}>
                    {item}
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