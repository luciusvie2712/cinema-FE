import { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import '../assets/style/ShowtimeManager.scss';
import Sidebar from '../components/Admin/Sidebar';

function ShowtimeManager() {
  const [showtimes, setShowtimes] = useState([]);
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    movieId: '',
    theater: '',
    date: '',
    time: '',
    format: '',
    seatCount: '',
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchShowtimes();
    fetchMovies();
  }, []);

  const fetchShowtimes = async () => {
    try {
      const res = await axiosInstance.get('/api/showtime');
      setShowtimes(res.data);
    } catch (error) {
      console.error('Lỗi lấy danh sách suất chiếu:', error);
    }
  };

  const fetchMovies = async () => {
    try {
      const res = await axiosInstance.get('/api/movie');
      setMovies(res.data);
    } catch (error) {
      console.error('Lỗi lấy danh sách phim:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axiosInstance.put(`/api/showtime/${editingId}`, form);
      } else {
        await axiosInstance.post('/api/showtime', {
          ...form,
          seatCount: parseInt(form.seatCount),
        });
      }
      fetchShowtimes();
      setForm({ movieId: '', theater: '', date: '', time: '', format: '', seatCount });
      setEditingId(null);
    } catch (error) {
      console.error('Lỗi khi thêm/cập nhật suất chiếu:', error);
    }
  };

  const handleEdit = (showtime) => {
    setForm({
      movieId: showtime.movie._id,
      theater: showtime.theater,
      date: showtime.date?.split('T')[0] || '',
      time: showtime.time,
      format: showtime.format,
    });
    setEditingId(showtime._id);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Bạn có chắc muốn xoá suất chiếu này không?');
    if (!confirm) return;
  
    try {
      await axiosInstance.delete(`/api/showtime/${id}`);
      fetchShowtimes();
    } catch (error) {
      console.error('Lỗi xoá suất chiếu:', error);
    }
  };

  return (
    <div className="showtime-manager">
      <Sidebar />
      <div className="showtime-manager__content">
        <div className="inner-content">
          <h2>Quản lý suất chiếu</h2>
          <form onSubmit={handleSubmit} className="form">
            <select name="movieId" value={form.movieId} onChange={handleInputChange} required>
              <option value="">Chọn phim</option>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>{movie.title}</option>
              ))}
            </select>
            <input type="text" name="theater" placeholder="Rạp" value={form.theater} onChange={handleInputChange} required />
            <input type="date" name="date" value={form.date} onChange={handleInputChange} required />
            <input type="time" name="time" value={form.time} onChange={handleInputChange} required />
            <input type="text" name="format" placeholder="Định dạng (2D/3D)" value={form.format} onChange={handleInputChange} required />
            <input type="number" name="seatCount" placeholder="Số lượng ghế" value={form.seatCount} onChange={handleInputChange} min="1"/>
            <button type="submit">{editingId ? 'Cập nhật suất chiếu' : 'Thêm suất chiếu'}</button>
          </form>

          <table className="showtime-table">
            <thead>
              <tr>
                <th>Phim</th>
                <th>Rạp</th>
                <th>Ngày</th>
                <th>Giờ</th>
                <th>Định dạng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {showtimes.map((st) => (
                <tr key={st._id}>
                  <td>{st.movie?.title}</td>
                  <td>{st.theater}</td>
                  <td>{new Date(st.date).toLocaleDateString('vi-VN')}</td>
                  <td>{st.time}</td>
                  <td>{st.format}</td>
                  <td>
                    <button onClick={() => handleEdit(st)}>Sửa</button>
                    <button onClick={() => handleDelete(st._id)}>Xoá</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowtimeManager;
