import React from "react";
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import anh1 from '../assets/image/AmDuongLo.webp';
import anh2 from '../assets/image/CuoiMaGiaiHan.webp';
import anh3 from '../assets/image/HuyetAnTruyHanh.webp';
import anh4 from '../assets/image/LatMat8.webp';
import anh5 from '../assets/image/LuoiHaiTuThan.webp';
import anh6 from '../assets/image/anh1.webp';
import anh7 from '../assets/image/anh2.webp';
import anh8 from '../assets/image/NgheSieuKhoNoi.png';
import anh9 from '../assets/image/ThamTuKien.webp';
import anh10 from '../assets/image/OanLinhNhapXac.webp';
import '../assets/style/SlideMovie.scss';
import '../assets/themify-icons/themify-icons.css';


const SlideMovieShowing = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies/showing')
        setMovies(response.data)
        setLoading(false)
      } catch (err) {
        setError('Khong the tai danh sach phim')
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])
  if (loading) return <div>Dang tai ....</div>
  if (error) return <div>{error}</div>

  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  
  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll);
      checkScroll(); 
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="movie-carousel-container">
      <h1 className="title">Phim hot đang chiếu </h1>
      
      <div className="carousel-wrapper">
        {showLeftButton && (
          <button className="nav-button left-button" onClick={scrollLeft}>
            <i className="ti-angle-left"></i>
          </button>
        )}
        
        <div className="movie-carousel" ref={sliderRef}>
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <div className="poster-phim"> 
                <img className="logo" src={movie.posterUrl} alt={movie.title} />
                  <div className="age-tag">18+</div>
                  <div className="play-icon">
                    <i className="ti-control-play icon"></i>
                  </div>
              </div>
              <h2 className="name">{cinema.title}</h2>
              <p className="address">{cinema.genre}</p>
              <p className="star-rating">★★★★★ {cinema.avgRating}  sao</p>
            </div>
          ))}
        </div>
        
        {showRightButton && (
          <button className="nav-button right-button" onClick={scrollRight}>
            <i className="ti-angle-right"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default SlideMovieShowing;