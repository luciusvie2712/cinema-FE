import React from "react";
import '../assets/style/AdminSideBar.scss';
import Logo from '../assets/image/logo-cinema.jpeg';

const AdminSideBar = () => {
    return (
        <div className="admin-side-bar">
            <div className="side-bar-left">
                <div className="side-bar__logo">
                    <img src={Logo} />
                </div>
                <div className="side-bar__menu">
                    <ul className="side-bar__menu-list">
                        <li className="side-bar__menu-item">Home</li>
                        <li className="side-bar__menu-item">Movie</li>
                        <li className="side-bar__menu-item">Promotion</li>
                        <li className="side-bar__menu-item">Booking</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminSideBar;