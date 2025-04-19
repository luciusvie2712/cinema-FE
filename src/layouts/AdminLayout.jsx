import React from "react";
import AdminSideBar from "../components/AdminSidebar";
import "../assets/style/AdminLayout.scss";

const AdminLayout = (children) => {
    return (
        <div className="amdin-layout-container">
            <AdminSideBar className="sidebar" />
            <div className="main-content">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;