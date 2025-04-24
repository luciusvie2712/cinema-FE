import { useState, useEffect } from 'react';
import axios from 'axios';
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
    format: ''
  });

  useEffect(() => {
    fetchShowtimes();
    fetchMovies();
  }, []);

  const fetchShowtimes = async () => {
    const res = await axios.get('http://localhost:5000/api/showtimes');
    setShowtimes(res.data);
  };

  const fetchMovies = async () => {
    const res = await axios.get('http://localhost:5000/api/movies');
    setMovies(res.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/showtimes', form);
    fetchShowtimes();
    setForm({ movieId: '', theater: '', date: '', time: '', format: '' });
  };

  return (
    <div className="showtime-manager">
        <Sidebar />
        <div className="showtime-manager__content">
            <div className="inner-content">
                <h2>Quản lý suất chiếu</h2>
                <form onSubmit={handleSubmit} className="form">
                    <select name="movieId" value={form.movieId} onChange={handleInputChange}>
                    <option value="">Chọn phim</option>
                    {movies.map((movie) => (
                        <option key={movie._id} value={movie._id}>{movie.title}</option>
                    ))}
                    </select>
                    <input type="text" name="theater" placeholder="Rạp" value={form.theater} onChange={handleInputChange} />
                    <input type="date" name="date" value={form.date} onChange={handleInputChange} />
                    <input type="time" name="time" value={form.time} onChange={handleInputChange} />
                    <input type="text" name="format" placeholder="Định dạng (2D/3D)" value={form.format} onChange={handleInputChange} />
                    <button type="submit">Thêm suất chiếu</button>
                </form>
                <table className="showtime-table">
                    <thead>
                    <tr>
                        <th>Phim</th>
                        <th>Rạp</th>
                        <th>Ngày</th>
                        <th>Giờ</th>
                        <th>Định dạng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {showtimes.map((st) => (
                        <tr key={st._id}>
                        <td>{movies.find(m => m._id === st.movie)?.title || 'N/A'}</td>
                        <td>{st.theater}</td>
                        <td>{new Date(st.date).toLocaleDateString()}</td>
                        <td>{st.time}</td>
                        <td>{st.format}</td>
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