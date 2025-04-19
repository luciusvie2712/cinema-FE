import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const FormRegister = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const { login } = useAuth()

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:3000/api/auth/register", {
                username,
                email,
                password
            })
            const { user, token } = res.data
            localStorage.setItem("token", token)
            login(user)

            navigate(location.state?.from || "/", {replace: true})
        } catch (err) {
            setError(err.res?.data?.message || "Register is faile")
        }
    }

    return (
        <div className="container-register">
            <form onSubmit={handleRegister}>
                
            </form>
        </div>
    )
}

export default FormRegister;