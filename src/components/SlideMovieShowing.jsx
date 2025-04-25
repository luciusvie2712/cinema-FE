import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import "../assets/style/SlideMovie.scss";
import "../assets/themify-icons/themify-icons.css";

const SlideMovieShowing = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get("/api/movie/showing");
        setMovies(response.data);
      } catch (err) {
        setError("Không thể tải danh sách phim");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
      const slider = sliderRef.current;
    
      const checkScroll = () => {
        if (!slider) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = slider;
        const tolerance = 5 // Độ dung sai để tránh trường hợp số thập phân
        
        setShowLeftButton(scrollLeft > tolerance);
        
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - tolerance);
      };
    
      if (slider) {
        slider.addEventListener("scroll", checkScroll);

        const resizeObserver = new ResizeObserver(checkScroll);
        resizeObserver.observe(slider);
        checkScroll();
        
        return () => {
          slider.removeEventListener("scroll", checkScroll);
          resizeObserver.disconnect();
        };
      }
    }, [movies]);

    const scrollSlider = (direction) => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const scrollAmount = direction === "left" ? -slider.clientWidth : slider.clientWidth;
        
        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-carousel-container">
      <h1 className="title">Phim hot đang chiếu</h1>
      <div className="carousel-wrapper">
        {showLeftButton && (
          <button className="nav-button left-button" onClick={() => scrollSlider("left")}>
            <i className="ti-angle-left"></i>
          </button>
        )}

        <div className="movie-carousel" ref={sliderRef}>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Link className="movie-card" key={movie._id} to={`/discription/${movie._id}`}>
                <div className="poster-phim">
                  <img
                    className="logo"  
                    src={movie.posterUrl || "default.jpg"}
                    alt={movie.title || "No Title"}
                  />
                  <div className="age-tag">18+</div>
                  <div className="play-icon">
                    <i className="ti-control-play icon"></i>
                  </div>
                </div>
                <h2 className="name">{movie.title || "Untitled"}</h2>
                <p className="address">{movie.genre || "Unknown Genre"}</p>
                <p className="star-rating">{movie.avgRating || "0"} / 5 sao</p>
              </Link>
            ))
          ) : (
            <div>Không có phim nào đang chiếu.</div>
          )}
        </div>

        {showRightButton && (
          <button className="nav-button right-button" onClick={() => scrollSlider("right")}>
            <i className="ti-angle-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default SlideMovieShowing;
