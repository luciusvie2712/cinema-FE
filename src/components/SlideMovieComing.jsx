import { useRef, useState, useEffect } from 'react';
import '../assets/style/SlideMovie.scss';
import anh1 from '../assets/image/AmDuongLo.webp';
import anh2 from '../assets/image/CuoiMaGiaiHan.webp';
import anh3 from '../assets/image/HuyetAnTruyHanh.webp';
import anh4 from '../assets/image/LatMat8.webp';
import anh5 from '../assets/image/LuoiHaiTuThan.webp';
import anh6 from '../assets/image/NhiemVuBatKhaThi.webp';
import anh7 from '../assets/image/MatVuPhuHo.webp';
import anh8 from '../assets/image/NgheSieuKhoNoi.png';
import anh9 from '../assets/image/ThamTuKien.webp';
import anh10 from '../assets/image/OanLinhNhapXac.webp';
import '../assets/themify-icons/themify-icons.css';
import { useNavigate } from 'react-router-dom';
const cinemaList = [
  {
    id: 1,
    name: "Âm Dương Lô",
    address: "Vincom Center, Quận 1, TP.HCM",
    website: "http://localhost:5173/", 
    image: anh1,
    age: "18+",
    rating:"5"
    
  }, 
  {
    id: 2,
    name: "Cưới Ma Giải Hạn",
    address: "Emart Gò Vấp, TP.HCM",
    website: "http://localhost:5173/",
    image: anh2,
    age: "18+",
    rating:"5"
  },
  {
    id: 3,
    name: "Huyết Án Truy Hành",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh3,
    age: "12+",
   rating:"5"
  },
  {
    id: 4,
    name: "Lật Mặt 8",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh4,
    age: "18+",
    rating:"5"
  },
  {
    id: 5,
    name: "Lưỡi Hái Tử Thần",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh5,
    age: "18+",
    rating:"5"
  },
  {
    id: 6,
    name: "Oán Linh Nhập Xác",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh10,
    age: "18+",
    rating:"5"
  },
  {
    id: 7,
    name: "Thám Tử Kiên",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh9,
    age: "18+",
    rating:"5"
  },
  {
    id: 8,
    name: "Nghề Siêu Khó Nói",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh8,
    age: "18+",
    rating:"5"
  },
  {
    id: 9,
    name: "Mật Vụ Phụ Hồ",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh7,
    age: "18+",
    rating:"5"
  },
  {
    id: 10,
    name: "Nhiệm Vụ Bất Khả Thi ",
    address: "116 Nguyễn Du, Quận 1, TP.HCM",
    website: "http://localhost:5173/",
    image: anh6,
    age: "18+",
    rating:"5"
  }
];

const SlideMovieComing = () => {
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
  
  const navigate = useNavigate () 


  
  return (
    <div className="movie-carousel-container">
      <h1 className="title">Danh sách phim hot trong tháng </h1>
      <div className="carousel-wrapper">
        {showLeftButton && (
          <button className="nav-button left-button" onClick={scrollLeft}>
            <i className="ti-angle-left"></i>
          </button>
        )}
        <div className="movie-carousel" ref={sliderRef}>
          {cinemaList.map((cinema) => (
            <div className="movie-card" key={cinema.id}>
              <div className="poster-phim"> 
                <img className="logo" src={cinema.image} alt={cinema.name} onClick={()=>  navigate('/MovieComing')} />
                  <div className="age-tag">{cinema.age}</div>
                  <div className="play-icon">
                    <i className="ti-control-play icon"></i>
                  </div>
              </div>
              <h2 className="name">{cinema.name}</h2>
              <p className="address">{cinema.address}</p>
              <p className="star-rating">★★★★★ {cinema.rating}  sao</p>
              <a
                className="link"
                href={cinema.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Truy cập website thông tin phim
              </a>
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
};

export default SlideMovieComing;