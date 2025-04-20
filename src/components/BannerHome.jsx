import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/BannerHome.scss';

const BannerHome = () => {
  const phrases = [
    "HÃY TẠM GÁC LẠI BỘN BỀ CUỘC SỐNG",
    "CÙNG NGƯỜI THÂN VÀ BẠN BÈ",
    "ĐẮM CHÌM VÀO KHÔNG GIAN ĐIỆN ẢNH TUYỆT VỜI"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fade, setFade] = useState(true);
  const [particles, setParticles] = useState([]);

  // Create floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Animate text phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="cinematic-banner">
     
      <div className="banner-background">
        <div className="bg-layer-1"></div>
        <div className="bg-layer-2"></div>
        <div className="bg-layer-3"></div>
      </div>

      
      {particles.map((particle) => (
        <div 
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.speed}s`,
            animationDelay: `${particle.delay}s`
          }}
        ></div>
      ))}

     
      <div className="banner-content">
        <div className={`banner-text ${fade ? 'fade-in' : 'fade-out'}`}>
          <h1>{phrases[currentPhrase]}</h1>
          <div className="text-underline"></div>
        </div>

        <Link 
          to="/movies" 
          className="cta-button"
          onMouseEnter={(e) => {
            e.currentTarget.querySelector('.button-effect').style.transform = 'scale(1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector('.button-effect').style.transform = 'scale(0)';
          }}
        >
          <span className="button-text">KHÁM PHÁ NGAY</span>
          <span className="button-icon">→</span>
          <span className="button-effect"></span>
        </Link>
      </div>

      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Cuộn xuống</span>
      </div>
    </div>
  );
};

export default BannerHome;