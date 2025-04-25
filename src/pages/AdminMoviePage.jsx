import { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance'
import '../assets/style/AdminMoviePage.scss'
import Sidebar from '../components/Admin/Sidebar';

const Loader = () => <div className="loader">Đang tải...</div>;

export default function MovieManager() {
  const [movies, setMovies] = useState([])
  const [form, setForm] = useState({
    title: '',
    genre: '',
    description: '',
    posterUrl: '',
    bannerUrl: '',
    releaseDate: '',
    endDate: ''
  })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovies = async () => {
    setLoading(true)
    try {
      const res = await axiosInstance.get('/api/movie/')
      setMovies(res.data)
    } catch (err) {
      setError("Có lỗi khi tải danh sách phim.")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (editingId) {
        await axiosInstance.put(`/api/movie/admin-movie/${editingId}`, form)
      } else {
        await axiosInstance.post('/api/movie/admin-movie', form)
      }
      setForm({
        title: '', genre: '', description: '', posterUrl: '', bannerUrl: '', releaseDate: '', endDate: ''
      })
      setEditingId(null)
      await fetchMovies();
    } catch (err) {
      console.error("Lỗi khi thêm/cập nhật phim:", err.response?.data || err.message)
      setError(err.response?.data?.message || "Có lỗi khi thêm hoặc cập nhật phim.")
    }

    setLoading(false)
  }

  const handleEdit = (movie) => {
    setForm(movie)
    setEditingId(movie._id)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xoá phim này?')) {
      try {
        await axiosInstance.delete(`/api/movie/admin-movie/${id}`)
        await fetchMovies()
      } catch (err) {
        setError("Có lỗi khi xóa phim.")
      }
    }
  }

  return (
    <div className="movie-manager">
        <Sidebar />
        <div className="movie-manager__content">
            <h2>Quản lý phim</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit} className="movie-form">
                <input name="title" value={form.title} onChange={handleChange} placeholder="Tên phim" required />
                <input name="genre" value={form.genre} onChange={handleChange} placeholder="Thể loại" required />
                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Mô tả" />
                <input name="posterUrl" value={form.posterUrl} onChange={handleChange} placeholder="Poster URL" />
                <input name="bannerUrl" value={form.bannerUrl} onChange={handleChange} placeholder="Banner URL" />
                <input type="date" name="releaseDate" value={form.releaseDate} onChange={handleChange} placeholder="Ngày phát hành" />
                <input type="date" name="endDate" value={form.endDate} onChange={handleChange} placeholder="Ngày kết thúc (nếu có)" />
                <button type="submit">{loading ? 'Đang xử lý...' : (editingId ? 'Cập nhật' : 'Thêm mới')}</button>
            </form>

            <div className="movie-list">
                {loading ? <Loader /> : movies.map((movie) => (
                <div className="movie-card" key={movie._id}>
                    <img src={movie.posterUrl} alt={movie.title} />
                    <div className="info">
                    <h4>{movie.title}</h4>
                    <p>{movie.genre}</p>
                    <p>{movie.status}</p>
                    <div className="actions">
                        <button onClick={() => handleEdit(movie)}>Sửa</button>
                        <button onClick={() => handleDelete(movie._id)}>Xoá</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
