
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentCancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert('Bạn đã hủy thanh toán. Vé không được đặt.');
    setTimeout(() => navigate('/discription/:id'), 2000); // Quay về trang chủ sau 3s
  }, [navigate]);

  return (
    <div className="payment-status-page">
      <h2>Thanh toán đã bị hủy</h2>
      <p>Bạn sẽ được chuyển về trang chủ trong giây lát...</p>
    </div>
  );
};

export default PaymentCancel;
