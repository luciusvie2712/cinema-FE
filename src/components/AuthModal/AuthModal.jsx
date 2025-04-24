import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/style/AuthModal.scss'

const AuthModal = ({ mode, onClose, onSwitchMode, setLoggedInUser }) => {
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

    const handleLogin = async () => {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
            email: form.email,
            password: form.password
        });
    
        const { token, role, fullName } = res.data;
        const user = { email: form.email, role, fullName};
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('fullName', fullName)
        localStorage.setItem('user', JSON.stringify(user));

        setLoggedInUser(user);
    
        alert('Đăng nhập thành công');
        onClose();
    
        if (role === 'admin') {
            window.location.href = '/Manager';
        } else {
            window.location.reload();
        }
    };
    const handleRegister = async () => {
        await axios.post('http://localhost:5000/api/auth/register', form);
        alert('Đăng ký thành công');
        onSwitchMode('login');
    };

    const handleForgotPassword = async () => {
        setError('');
        setLoading(true);
        try {
          const res = await axios.post('http://localhost:5000/api/auth/forgot-password', {
            email: form.email,
          });
          alert('Đã gửi email khôi phục mật khẩu!');
          onSwitchMode('login');
        } catch (error) {
          setError(error.response?.data?.message || 'Lỗi khi gửi email khôi phục');
        } finally {
          setLoading(false);
        }
      };
      
      const handleResetPassword = async () => {
        setError('');
        setLoading(true);
        try {
          const token = new URLSearchParams(window.location.search).get('token');
          const res = await axios.post('http://localhost:5000/api/auth/reset-password', {
            token,
            password: form.password,
          });
          alert('Đặt lại mật khẩu thành công!');
          onSwitchMode('login');
        } catch (error) {
          setError(error.response?.data?.message || 'Lỗi khi đặt lại mật khẩu');
        } finally {
          setLoading(false);
        }
      };
      
    
      const handleSubmit = () => {
        if (mode === 'register') {
          handleRegister();
        } else if (mode === 'login') {
          handleLogin();
        } else if (mode === 'forgot') {
          handleForgotPassword();
        } else if (mode === 'reset') {
          handleResetPassword();
        }
      };
      


      return (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <button className="close-btn" onClick={onClose}>✖</button>
      
            <h2>
              {{
                login: 'Đăng Nhập',
                register: 'Đăng Ký',
                forgot: 'Quên Mật Khẩu',
                reset: 'Đặt Lại Mật Khẩu',
              }[mode]}
            </h2>
      
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
      
            {(mode === 'login' || mode === 'register' || mode === 'forgot') && (
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            )}
      
            {(mode === 'login' || mode === 'register' || mode === 'reset') && (
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={form.password}
                onChange={handleChange}
              />
            )}
      
            {error && <p className="error">{error}</p>}
      
            <button className='btn-submit' onClick={handleSubmit} disabled={loading}>
              {loading ? 'Đang xử lý...' : {
                login: 'Đăng Nhập',
                register: 'Đăng Ký',
                forgot: 'Gửi Email Khôi Phục',
                reset: 'Đặt Lại Mật Khẩu',
              }[mode]}
            </button>
      
            {mode === 'login' && (
              <>
                <p className="switch-mode">
                  Chưa có tài khoản?{' '}
                  <span onClick={() => onSwitchMode('register')}>Đăng ký</span>
                </p>
                <p className="switch-mode">
                  <span onClick={() => onSwitchMode('forgot')}>Quên mật khẩu?</span>
                </p>
              </>
            )}
      
            {(mode === 'register' || mode === 'forgot' || mode === 'reset') && (
              <p className="switch-mode">
                <span onClick={() => onSwitchMode('login')}>← Quay lại đăng nhập</span>
              </p>
            )}
          </div>
        </div>
      );      
}

export default AuthModal