import React from "react"
import '../assets/style/MainHeader.scss'
import Logo from '../assets/image/logo-cinema.jpeg'
const MainHeader = () => {
    return (
        <div className="container-header">
            <div className="header__navigation">
                <div className="navigation__logo">
                    <a href="http://localhost:5173/">
                        <img src={Logo} className="header-logo" />
                    </a>
                </div>
                <div className="navigation__navbar">
                    <ul className="navbar">
                        <li className="navbar-option"><a href="http://localhost:5173/ShowsTime">LỊCH CHIẾU</a></li>
                        <li className="navbar-option"><a href="http://localhost:5173/">PHIM CHIẾU</a></li>
                        <li className="navbar-option">TIN TỨC & KHUYẾN MÃI</li>
                        <li className="navbar-option">VÉ CỦA TÔI</li>
                        <li className="navbar-option">BLOG PHIM</li>
                    </ul>
                </div>
            </div>
            <div className="header__account">
                <div className="account-option__item">
                    <div className="account-option__item__icon"></div>
                    <p className="account-option__text login">
                        ĐĂNG NHẬP /
                    </p>
                </div>
                <div className="account-option__item">
                    <div className="account-option__item__icon"></div>
                    <p className="account-option__text register">
                        ĐĂNG KÝ
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;