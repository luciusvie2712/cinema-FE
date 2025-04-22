import React, { useState } from 'react';
import '../assets/style/DiscriptionMovie.scss';
import anh1 from '../assets/image/AmDuongLo.webp';
const DiscriptionMovie = () => {
  const movie = {
    title: "Âm Dương Lô",
    posterUrl: anh1,
    ageRating: "18+",
    meta: [
      { label: "Hải, Kinh Di", checked: false },
      { label: "119'", checked: false },
      { label: "Việt Nam", checked: true },
      { label: "VN", checked: false }
    ],
    director: "Bùi Văn Hải",
    cast: "Tiến Luật, Ngô Kiến Huy, NSND Hồng Văn, NSUT Hữu Châu, NSUT Đại Nghĩa, Thanh Hương, Hoàng Mèo, Nghệ sĩ Phi Phụng, Phan Vũ",
    releaseDate: "Thứ Sáu, 18/04/2025",
    description: "Âm Dương Lộ xoay quanh Trọng Nhân (Bạch Công Khanh thủ vai), trong một tình huống bất đắc dĩ, phải hành nghề tài xế xe cứu thương. Chuyến xe đầu tiên của Nhân là chở một xác chết về vùng núi hẻo lánh. Cùng với nhà báo tập sự Phong (Tuấn Dũng thủ vai), Trọng Nhân chứng kiến nhiều hiện tượng tâm linh kỳ bí. Cũng từ đây, anh phát hiện ra bí mật động trời mà ba mình đang cất giấu.",
    theater: {
      name: "",
      address: "271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM",
      showtimes: ["11:10", "14:00", "16:50", "19:30", "21:45"]
    }
  };

  const [selectedTime, setSelectedTime] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const handleBooking = () => {
    if (selectedTime) {
      alert(`Đặt thành công ${ticketCount} vé xem ${movie.title} lúc ${selectedTime}`);
    }
  };

  return (
    <div className="movie-detail">
      <div className="movie-content">
        <div className="movie-poster-container">
          <div className="poster-wrapper">
            <img 
              src={movie.posterUrl} 
              alt={movie.title}
              className="movie-poster"
            />
            <div className="poster-overlay">
              <span className="play-icon">▶</span>
            </div>
          </div>
          
          <div className="movie-tags">
            {movie.meta.map((item, index) => (
              <span 
                key={index} 
                className={`tag ${item.checked ? 'active' : ''}`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="movie-info-container">
          <div className="movie-header">
            <h1 className="movie-title">
              {movie.title}
              <span className="age-rating">{movie.ageRating}</span>
            </h1>
          </div>

          <div className="movie-details">
            <div className="detail-section">
              <h2 className="section-title">MÔ TẢ</h2>
              <p><strong>Đạo diễn:</strong> {movie.director}</p>
              <p><strong>Diễn viên:</strong> {movie.cast}</p>
              <p><strong>Khởi chiếu:</strong> {movie.releaseDate}</p>
            </div>

            <div className="detail-section">
              <h2 className="section-title">NỘI DUNG PHIM</h2>
              <p className="synopsis">{movie.description}</p>
            </div>
          </div>

          <div className="showtime-section">
            <h2 className="section-title">LỊCH CHIẾU</h2>
            <div className="theater-info">
              <h3>{movie.theater.name}</h3>
              <p className="theater-address">{movie.theater.address}</p>
            </div>

            <div className="time-grid">
              {movie.theater.showtimes.map((time) => (
                <button
                  key={time}
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="booking-section">
        <div className="booking-form">
          <h2 className="booking-title">ĐẶT VÉ</h2>
          
          <div className="form-group">
            <label htmlFor="ticketCount">Số lượng vé:</label>
            <select
              id="ticketCount"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <button
            className={`book-button ${!selectedTime ? 'disabled' : ''}`}
            onClick={handleBooking}
            disabled={!selectedTime}
          >
            ĐẶT VÉ NGAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscriptionMovie;