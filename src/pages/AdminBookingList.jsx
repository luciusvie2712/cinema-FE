import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance'
import Sidebar from '../components/Admin/Sidebar'
import '../assets/style/AdminBookingList.scss'

const AdminBookingList = () => {
  const [bookings, setBookings] = useState([])
  const fetchBookings = async () => {
    try {
      const res = await axiosInstance.get('/api/booking')
      setBookings(res.data)
    } catch (err) {
      console.error('Lỗi lấy danh sách vé:', err)
    }
  }
  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <div className="admin-booking__container">
        <Sidebar />
        <div className="admin-booking">
            <h2 className="admin-booking__title">Danh sách vé đã đặt</h2>
            <div className="admin-booking__table-wrapper">
                <table className="admin-booking__table">
                <thead className="admin-booking__table-head">
                    <tr>
                    <th className="admin-booking__header">Người đặt</th>
                    <th className="admin-booking__header">Phim</th>
                    <th className="admin-booking__header">Suất chiếu</th>
                    <th className="admin-booking__header">Ghế</th>
                    <th className="admin-booking__header">Tổng tiền</th>
                    <th className="admin-booking__header">Trạng thái</th>
                    </tr>
                </thead>
                <tbody className="admin-booking__table-body">
                    {bookings.map((b, idx) => (
                    <tr key={idx} className="admin-booking__row">
                        <td className="admin-booking__cell">{b.user?.name} ({b.user?.email})</td>
                        <td className="admin-booking__cell">{b.showtime?.movie?.title}</td>
                        <td className="admin-booking__cell">
                        {new Date(b.showtime?.date).toLocaleDateString()} - {b.showtime?.time}
                        </td>
                        <td className="admin-booking__cell">{b.seats.join(', ')}</td>
                        <td className="admin-booking__cell">{b.totalPrice.toLocaleString()} VND</td>
                        <td className="admin-booking__cell">{b.paymentStatus}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AdminBookingList
