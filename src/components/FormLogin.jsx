import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";


const FromLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/login", email, password)
            login(res.data.user)
            localStorage.setItem("token", res.data.token)

            // Neu la admin se chuyen sang trang admin
            if (res.data.user.role === "admin"){
                navigate("/Manager", {replace: true})
            } else { // Neu la user chuyen ve trang truoc do (neu co) hoac trang chu
                navigate(location.state?.from || "/", { relative: true })
            }
        } catch (err) {
            setError(err.response?.data?.error || "Lỗi đăng nhập!")
        }
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-title">ĐĂNG NHẬP</div>
                <div className="login-form">
                    <form onSubmit={handleLogin} className="login-form__content">
                        <input type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className="login-form__btn">Đăng Nhập</button>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default FromLogin;