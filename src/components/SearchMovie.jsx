  import React, { useState } from 'react';
  import '../assets/style/SearchMovie.scss'
  const SearchMovie = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [focused, setFocused] = useState(false);

    const movies = [
      { 
        title: "MARSON", 
        originalTitle: "Điệp Viên Anh Việt Dép ", 
        genres: ["Khoa Học Viễn Tưởng", "Hành Động"],
        releaseDate: "17.12.2021"
      },
      { 
        title: "Hành Động", 
        originalTitle: "Điệp Viên Trí Max",
        genres: ["Gây Cấn", "Hình Sự"],
        releaseDate: "24.11.2021"
      },
      { 
        title: "Kinh dị", 
        originalTitle: "Âm Dương Lô",
        genres: ["Kinh dị", "Hành Động"],
        releaseDate: "17.12.2021"
      },
      { 
        title: "Hoạt hình", 
        originalTitle: "Doremon", 
        genres: ["Hài Hước", "Vui Nhộn"],
        releaseDate: "17.12.2021"
      },
      { 
        title: "Tình cảm", 
        originalTitle: "Yêu Vì Tiền Điên Vì Tình", 
        genres: ["Khoa Học Viễn Tưởng", "Lôi Cuốn"],
        releaseDate: "17.12.2021"
      },
      { 
        title: "Cổ trang", 
        originalTitle: "Thám Tử Kiên ", 
        genres: ["Khoa Học Viễn Tưởng", "Hành Động"],
        releaseDate: "17.12.2021"
      },
    ];

    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (movie.originalTitle && movie.originalTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
      <div className="dark-movie-app">
        <div className="search-header">
          <h1>Tìm phim chiếu rạp trên <span className="momo-text">CINENE</span></h1>
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
        </div>

        <div className="movies-grid">
          {filteredMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <div className="movie-header">
                <h2>{movie.title}</h2>
                <span className="release-date">{movie.releaseDate}</span>
              </div>
              {movie.originalTitle && <p className="original-title">{movie.originalTitle}</p>}
              <div className="genres-container">
                {movie.genres.map((genre, i) => (
                  <span key={i} className="genre-tag">{genre}</span>
                ))}
              </div>
              <div className="movie-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default SearchMovie;