import React, { useState, useEffect } from 'react';
import '../assets/style/SearchMovie.scss';
import axiosInstance from '../../axiosInstance'
import { all } from 'axios';

const SearchMovie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [focused, setFocused] = useState(false);
  const [genres, setGenres] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (searchTerm || genres || status) {
      const fetchMovies = async () => {
        try {
          const response = await axiosInstance.get(`/api/movie/search`, {
            params: { q: searchTerm, genre: genres, status: status }
          });
          setFilteredMovies(response.data);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
      fetchMovies();
    } else {
      const getAllMovie = async () => {
        const allMovies = await axiosInstance.get('/api/movie/')
        setFilteredMovies(allMovies.data)
      }
      getAllMovie()
    }
  }, [searchTerm, genres, status]);

  return (
    <div className="dark-movie-app">
      <div className="search-header">
        <h1>Tìm phim chiếu rạp trên <span className="momo-text">CINEME</span></h1>
        <div className={`search-container ${focused ? 'focused' : ''}`}>
          <input
            type="text"
            placeholder="Nhập tên phim..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {searchTerm && (
            <button 
              className="clear-btn"
              onClick={() => setSearchTerm('')}
            >
              ×
            </button>
          )}
        </div>

        <div className="filters">
          <select onChange={(e) => setGenres(e.target.value)} value={genres}>
            <option value="">Chọn thể loại</option>
            <option value="Khoa Học Viễn Tưởng">Khoa Học Viễn Tưởng</option>
            <option value="Hành Động">Hành Động</option>
            <option value="Kinh Dị">Kinh Dị</option>
            <option value="Hài Hước">Hài Hước</option>
          </select>

          <select onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="">Tất cả trạng thái</option>
            <option value="showing">Đang chiếu</option>
            <option value="coming">Sắp chiếu</option>
            <option value="ended">Đã kết thúc</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <div className="movie-card" key={movie._id}>
            <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
            <div className="movie-content">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-description">{movie.description}</p>
              <p><strong>Thể loại:</strong> {movie.genre.join(', ')}</p>
              <p><strong>Khởi chiếu:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
              <p><strong>Kết thúc:</strong> {new Date(movie.endDate).toLocaleDateString()}</p>
              <p><strong>Trạng thái:</strong> {movie.status === 'showing' ? 'Đang chiếu' : movie.status === 'coming' ? 'Sắp chiếu' : 'Đã kết thúc'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
