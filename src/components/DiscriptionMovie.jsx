import React, { useEffect, useState } from 'react';
import '../assets/style/DiscriptionMovie.scss';
import { FaPlay } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DiscriptionMovie = ({ movie, user }) => {
  const [showtimes, setShowtimes] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [seatData, setSeatData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('pay-online');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [showModal, setShowModal] = useState(false); // ✅ Thêm dòng này

  useEffect(() => {
    if (movie?._id) {
      fetch(`http://localhost:5000/api/showtime/${movie._id}`)
        .then(res => {
          if (!res.ok) {
            console.error('Không thể lấy dữ liệu suất chiếu');
            throw new Error('Không thể lấy dữ liệu suất chiếu');
          }
          return res.json();
        })
        .then(data => setShowtimes(data))
        .catch(error => console.error(error));
    }
  }, [movie]);
  
  useEffect(() => {
    setTotalPrice(selectedSeats.length * 50000);
  }, [selectedSeats]);

  useEffect(() => {
    if (selectedShowtime) {
      setSeatData(selectedShowtime.seats || []);
      setSelectedSeats([]);
    }
  }, [selectedShowtime]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = async () => {
    if (!selectedShowtime || selectedSeats.length === 0) {
      return alert('Chọn đầy đủ thông tin');
    }
  
    const res = await fetch('http://localhost:5000/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        showtimeId: selectedShowtime._id,
        seats: selectedSeats,
        paymentMethod
      })
    });
  
    const data = await res.json();
    if (res.ok) {
      setSeatData((prevSeats) =>
        prevSeats.map((seat) =>
          selectedSeats.includes(seat.seatNumber)
            ? { ...seat, status: 'booked' }
            : seat
        )
      );
  
      if (paymentMethod === 'pay-online') {
        const qr = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Thanh+toan+${totalPrice}+VND+-+Ma+ve+${data.newBooking.ticketCode}`;
        setQrCodeUrl(qr);
      } else {
        alert(`Đặt vé thành công\nMã vé: ${data.newBooking.ticketCode}`);
        setShowModal(false);
      }
    } else {
      alert(data.message);
    }
  };

  const openModal = () => {
    if (!user || !user.email) {
      return alert('Bạn cần đăng nhập để đặt vé');
    }
    setShowModal(true);
  };

  const handleSelectShowtime = (value) => {
    const st = showtimes.find(st => `${st.date}|${st.time}` === value);
    setSelectedShowtime(st);
  };

  if (!movie) return <div>Đang tải phim...</div>;

  return (
    <div className="movie-detail-banner">
      <div className="poster">
        <img src={movie.posterUrl} alt={movie.title} className="poster-img" />
        <div className="age-tag">16+</div>
        <div className="play-button"><FaPlay /></div>
      </div>

      <div className="info">
        <h1 className="title">{movie.title}</h1>
        <p className="subtitle">{movie.releaseDate?.slice(0, 10)} · {movie.duration} phút</p>
        <div className="rating">
          <FaStar className="star-icon" />
          <span>{movie.avgRating?.toFixed(1) || 'Chưa có đánh giá'}</span>
        </div>
        <div className="content">
          <span className="label">Nội dung:</span>
          <span>{movie.description}</span>
        </div>
        <div className="extra">
          <p><b>Ngày chiếu:</b> {new Date(movie.releaseDate).toLocaleDateString('vi-VN')}</p>
          <p><b>Thể loại:</b> {movie.genre.join(', ')}</p>
        </div>
        <button className="book-button" onClick={openModal}>ĐẶT VÉ NGAY</button>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="booking-modal"
        overlayClassName="booking-overlay"
      >
        <h2>Chọn suất chiếu và ghế ngồi</h2>
        <select
          value={selectedShowtime ? `${selectedShowtime.date}|${selectedShowtime.time}` : ''}
          onChange={(e) => handleSelectShowtime(e.target.value)}
        >
          <option value="">-- Chọn suất chiếu --</option>
          {showtimes.map((st, index) => (
            <option key={index} value={`${st.date}|${st.time}`}>
              {new Date(st.date).toLocaleDateString('vi-VN')} - {st.time}
            </option>
          ))}
        </select>

        <div className="seat-grid">
          {seatData.map(seat => {
            const isSelected = selectedSeats.includes(seat.seatNumber);
            const isBooked = seat.status === 'booked';

            return (
              <div
                key={seat.seatNumber}
                className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
                onClick={() => !isBooked && toggleSeat(seat.seatNumber)}
              >
                {seat.seatNumber}
              </div>
            );
          })}
        </div>

        <div className="price-summary">
          <p>Tổng số ghế: {selectedSeats.length}</p>
          <p>Giá mỗi vé: 50.000 VND</p>
          <h3>Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VND</h3>
        </div>

        <button
          className="confirm-button"
          onClick={handleBooking}
          disabled={!selectedShowtime || selectedSeats.length === 0}
        >
          XÁC NHẬN ĐẶT VÉ
        </button>
      </Modal>
    </div>
  );
};

export default DiscriptionMovie;
