import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import '../assets/style/TicketDetails.scss'

const TicketDetails = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axiosInstance.get('/api/auth/me');
                setUser(userResponse.data);
                
                const bookingResponse = await axiosInstance.get('/api/booking/me');
                setBookings(bookingResponse.data);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu:", error);
            }
        };
        fetchData();
    }, []);

    const handleCancelBooking = async (bookingId) => {
        try {
            await axiosInstance.delete(`/api/bookings/cancel/${bookingId}`);
            setBookings(bookings.filter(booking => booking._id !== bookingId));
        } catch (error) {
            console.error("Không thể hủy vé:", error);
        }
    };

    return (
        <div className="ticket-details">
            <div className="user-info">
                <h3>Thông tin người dùng</h3>
                {user ? (
                    <div>
                        <p><strong>Tên:</strong> {user.fullName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Số điện thoại:</strong> {user.phone}</p>
                    </div>
                ) : (
                    <p>Đang tải thông tin người dùng...</p>
                )}
            </div>
            
            <div className="booking-info">
                <h3>Thông tin vé</h3>
                {bookings.length > 0 ? (
                    bookings.map(booking => (
                        <div key={booking._id} className="booking-item">
                            <p><strong>Mã vé:</strong> {booking.ticketCode}</p>
                            <p><strong>Suất chiếu:</strong> {booking.showtime.movie.title}</p>
                            <p><strong>Số ghế:</strong> {booking.seats.join(', ')}</p>
                            <p><strong>Tổng tiền:</strong> {booking.totalPrice} VND</p>
                            <p><strong>Trạng thái thanh toán:</strong> {booking.paymentStatus}</p>
                            {booking.paymentStatus === 'pending' && (
                                <button className="cancel-btn" onClick={() => handleCancelBooking(booking._id)}>Hủy vé</button>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="no-bookings">Chưa có vé nào.</p>
                )}
            </div>
        </div>
    );
};

export default TicketDetails;
