import React from "react"
import '../assets/style/MainHeader.scss'
import Logo from '../assets/image/logo-cinema.jpeg'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const MainHeader = () => {
    const { user, logOut } = useAuth()

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

            {user ? (
                <div className="display-account">
                    <img src={user.avatar} alt="avatar" className="account-avt"/>
                    <span>{user.username} ({user.role})</span>
                    {user.role === "admin" && <Link to="/admin" style={{ marginLeft: "10px" }}>Quản lý</Link>}
                    <button onClick={logOut} className="account__btn-logout">Đăng xuất</button>
                </div>
            ) : (
                <div className="header__account">
                    <div className="account-option__item">
                        <div className="account-option__item__icon"></div>
                        <a href="http://localhost:5173/Login" className="account-option__text login">
                            ĐĂNG NHẬP 
                        </a>
                    </div>
                    <div className="account-option__item">
                        <div className="account-option__item__icon"></div>
                        <a href=""className="account-option__text register">
                            ĐĂNG KÝ
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainHeader;