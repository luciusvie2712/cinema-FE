import React from "react"
import '../assets/style/MainHeader.scss'
import Logo from '../assets/image/logo-cinema.jpeg'
const MainHeader = () => {
    return (
        <div className="container-header">
            <div className="header__navigation">
                <div className="navigation__logo">
                    <img src={Logo} className="header-logo" />
                </div>
                <div className="navigation__navbar">
                    <ul className="navbar">
                        <li className="navbar-option">PHIM ĐANG CHIẾU</li>
                        <li className="navbar-option">PHIM SẮP CHIẾU</li>
                        <li className="navbar-option">TIN TỨC & ƯU ĐÃI</li>
                        <li className="navbar-option">VÉ CỦA TÔI</li>
                    </ul>
                </div>
            </div>
            <div className="header__account">
                <div className="account-option__item">
                    <div className="account-option__item__icon"></div>
                    <p className="account-option__text login">
                        ĐÂNG NHẬP /
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