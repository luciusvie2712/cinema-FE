import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/style/AuthModal.scss'

const AuthModal = ({ mode, onClose, onSwitchMode }) => {
    const [form, setForm] = useState({
        email: '',
        fullName: '',
        password: '',
        phone: ''
    })
    const [error, setError] =useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        try {
            if (mode === 'register') {
                const res = await axios.post('http://localhost:5000/api/auth/register', form)
                alert('Dang ky thanh cong')
                onSwitchMode('login')
            } else {
                const res = await axios.post('http://localhost:5000/api/auth/login', {
                    email: form.email,
                    password: form.password
                })

                const { token, role } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('role', role)
                localStorage.setItem('fullName', form.email)

                alert('Dang nhap thanh cong')
                onClose()

                if (role === 'admin') {
                    window.location.href = '/Manager'
                } else {
                    window.location.reload()
                }
            }
        } catch (error) {
            setError(error.response?.date?.message || 'He thong xay ra loi')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <button className="close-btn" onClick={onClose}>✖</button>
    
            <h2>{mode === 'login' ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
    
            {mode === 'register' && (
              <>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ tên"
                  value={form.fullName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={form.phone}
                  onChange={handleChange}
                />
              </>
            )}
    
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
    
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={form.password}
              onChange={handleChange}
            />
    
            {error && <p className="error">{error}</p>}
    
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? 'Đang xử lý...' : (mode === 'login' ? 'Đăng Nhập' : 'Đăng Ký')}
            </button>
    
            <p className="switch-mode">
              {mode === 'login' ? (
                <>
                  Chưa có tài khoản?{' '}
                  <span onClick={() => onSwitchMode('register')}>Đăng ký</span>
                </>
              ) : (
                <>
                  Đã có tài khoản?{' '}
                  <span onClick={() => onSwitchMode('login')}>Đăng nhập</span>
                </>
              )}
            </p>
          </div>
        </div>
    );
}

export default AuthModal