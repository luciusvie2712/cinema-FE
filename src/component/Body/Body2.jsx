import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Body2.scss'
import cl33 from '../../assets/image/temp-1.jpeg';
function Body22() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return (
        <>
       
        <div className="slider-main22">
        <div className="header-slider22">Phim Đang Chiếu </div>
        <Slider {...settings}>
         
          <div className="img-slider22">
            <h3><img src={cl33} alt="" /></h3>
          </div>
          <div className='img-slider22'>
          <h3><img src={cl33} alt="" /></h3>
          </div>
          <div className='img-slider22'>
          <h3><img src={cl33} alt="" /></h3>
          </div>
          <div className='img-slider22'>
          <h3><img src={cl33} alt="" /></h3>
          </div>
          <div className='img-slider22'>
          <h3><img src={cl33} alt="" /></h3>
          </div>
          <div className='img-slider22'>
          <h3><img src={cl33} alt="" /></h3>
          </div>
        
        </Slider>
        </div>
        </>
      );
    }

export default Body22;