import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Gửi yêu cầu cập nhật trạng thái booking sau khi thanh toán thành công
    const confirmPayment = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/booking/confirm-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        });

        const data = await res.json();
        if (res.ok) {
          alert('Thanh toán thành công. Vé đã được xác nhận!');
        } else {
          alert(`Có lỗi xảy ra: ${data.message}`);
        }
      } catch (error) {
        console.error(error);
        alert('Đã xảy ra lỗi trong quá trình xác nhận thanh toán');
      } finally {
        setTimeout(() => navigate('/discription/:id'), 2000); // Quay về trang chủ sau 3s
      }
    };

    confirmPayment();
  }, [navigate]);

  return (
    <div className="payment-status-page">
      <h2>Thanh toán thành công!</h2>
      <p>Đang xác nhận vé và chuyển hướng về trang chủ...</p>
    </div>
  );
};

export default PaymentSuccess;