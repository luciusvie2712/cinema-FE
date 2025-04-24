import React, { useEffect, useState } from 'react';
import '../assets/style/DiscriptionMovie.scss';
import { FaPlay } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DiscriptionMovie = ({ movie, user }) => {
  console.log("user hiện tại nè:", user);
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    if (movie?._id) {
      fetch(`/api/showtime/${movie._id}`)
        .then(res => res.json())
        .then(data => setShowtimes(data));
    }
  }, [movie]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = async () => {
    if (!selectedTime || selectedSeats.length === 0) return alert('Chọn đầy đủ thông tin');

    const [date, time] = selectedTime.split('|');
    const showtime = showtimes.find(st => st.date === date && st.time === time);

    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        showtimeId: showtime._id,
        seats: selectedSeats,
        paymentMethod: 'pay-later'
      })
    });

    const data = await res.json();
    if (res.ok) {
      alert(`Đặt vé thành công\nMã vé: ${data.newBooking.ticketCode}`);
      setShowModal(false);
    } else {
      alert(data.message);
    }
  };

  const openModal = () => {
    if (!user || !user.email) {
      console.log("User chưa đăng nhập");
      return alert('Bạn cần đăng nhập để đặt vé');
    }
    console.log("Modal sẽ được mở");
    setShowModal(true);
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
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">-- Chọn suất chiếu --</option>
          {showtimes.map((st, index) => (
            <option key={index} value={`${st.date}|${st.time}`}>
              {new Date(st.date).toLocaleDateString('vi-VN')} - {st.time}
            </option>
          ))}
        </select>

        <div className="seat-grid">
          {Array.from({ length: 40 }, (_, i) => {
            const seat = `A${i + 1}`;
            const isSelected = selectedSeats.includes(seat);
            return (
              <div
                key={seat}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </div>
            );
          })}
        </div>

        <button
          className="confirm-button"
          onClick={handleBooking}
          disabled={!selectedTime || selectedSeats.length === 0}
        >
          XÁC NHẬN ĐẶT VÉ
        </button>
      </Modal>
    </div>
  );
};


export default DiscriptionMovie;
