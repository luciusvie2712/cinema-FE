import React, { useState } from 'react';
import axiosInstance from '../../../axiosInstance'
import '../../assets/style/AuthModal.scss'

const AuthModal = ({ mode, onClose, onSwitchMode, setLoggedInUser }) => {
    const [step, setStep] = useState('email')
    const [form, setForm] = useState({
        email: '',
        fullName: '',
        password: '',
        phone: ''
    })
    const [error, setError] =useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
      try {
          const res = await axiosInstance.post('/api/auth/login', {
              email: form.email,
              password: form.password
          });

          const { token, role, fullName } = res.data;
          const user = { email: form.email, role, fullName };
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('fullName', fullName);
          localStorage.setItem('user', JSON.stringify(user));
          setLoggedInUser(user);

          alert('Đăng nhập thành công');
          onClose();

          if (role === 'admin') {
              window.location.href = '/Manager';
          } else {
              window.location.reload();
          }
      } catch (err) {
          setError(err.response?.data?.message || 'Lỗi đăng nhập');
      }
    };
    const handleRegister = async () => {
      try {
          await axiosInstance.post('/api/auth/register', form);
          alert('Đăng ký thành công');
          onSwitchMode('login');
      } catch (err) {
          setError(err.response?.data?.message || 'Lỗi đăng ký');
      }
    };

    const handleForgotPassword = async () => {
      try {
          await axiosInstance.post('/api/auth/forgot-password', { email: form.email });
          alert('Đã gửi mã xác thực đến email');
          setStep('code');
      } catch (err) {
          setError(err.response?.data?.message || 'Lỗi khi gửi email');
      }
    };
    const handleVerifyCode = async () => {
      try {
          const res = await axiosInstance.post('/api/auth/verify-code', {
              email: form.email,
              code: form.code
          });
          alert('Mã xác thực đúng. Nhập mật khẩu mới.');
          setStep('newPassword');
      } catch (err) {
          setError(err.response?.data?.message || 'Sai mã xác thực');
      }
    };
      
    const handleResetPassword = async () => {
      try {
          await axiosInstance.post('/api/auth/reset-password', {
              email: form.email,
              code: form.code,
              newPassword: form.newPassword
          });
          alert('Đặt lại mật khẩu thành công!');
          onSwitchMode('login');
          setStep('email');
      } catch (err) {
          setError(err.response?.data?.message || 'Lỗi đặt lại mật khẩu');
      }
    };

    const handleSubmit = () => {
      if (mode === 'register') {
          handleRegister();
      } else if (mode === 'login') {
          handleLogin();
      } else if (mode === 'forgot') {
          if (step === 'email') handleForgotPassword();
          else if (step === 'code') handleVerifyCode();
          else if (step === 'newPassword') handleResetPassword();
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
                  forgot: {
                      email: 'Quên Mật Khẩu',
                      code: 'Nhập Mã Xác Thực',
                      newPassword: 'Đặt Lại Mật Khẩu'
                  }[step],
                  reset: 'Đặt Lại Mật Khẩu',
              }[mode]}
          </h2>

          {mode === 'register' && (
              <>
                  <input type="text" name="fullName" placeholder="Họ tên" value={form.fullName} onChange={handleChange} />
                  <input type="text" name="phone" placeholder="Số điện thoại" value={form.phone} onChange={handleChange} />
              </>
          )}

          {(mode === 'login' || (mode === 'forgot' && step === 'email') || mode === 'register') && (
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          )}

          {(mode === 'login' || mode === 'register') && (
              <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} />
          )}

          {(mode === 'forgot' && step === 'code') && (
              <input type="text" name="code" placeholder="Mã xác thực" value={form.code} onChange={handleChange} />
          )}

          {(mode === 'forgot' && step === 'newPassword') && (
              <input type="password" name="newPassword" placeholder="Mật khẩu mới" value={form.newPassword} onChange={handleChange} />
          )}

          {error && <p className="error">{error}</p>}

          <button className='btn-submit' onClick={handleSubmit} disabled={loading}>
              {loading ? 'Đang xử lý...' : {
                  login: 'Đăng Nhập',
                  register: 'Đăng Ký',
                  forgot: {
                      email: 'Gửi Mã Xác Thực',
                      code: 'Xác Nhận Mã',
                      newPassword: 'Đặt Lại Mật Khẩu'
                  }[step],
                  reset: 'Đặt Lại Mật Khẩu',
              }[mode]}
          </button>

          {mode === 'login' && (
              <>
                  <p className="switch-mode">Chưa có tài khoản? <span onClick={() => onSwitchMode('register')}>Đăng ký</span></p>
                  <p className="switch-mode"><span onClick={() => onSwitchMode('forgot')}>Quên mật khẩu?</span></p>
              </>
          )}

          {(mode === 'register' || mode === 'forgot') && (
              <p className="switch-mode"><span onClick={() => onSwitchMode('login')}>← Quay lại đăng nhập</span></p>
          )}
        </div>
      </div>
    );    
}

export default AuthModal