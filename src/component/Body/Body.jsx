import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cl1 from "../../assets/image/temp-1.jpeg"
import './Body.scss'
function Body() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return (
        <>
       
        <div className="slider-main">
        <div className="header-slider">Phim Đang Chiếu </div>
        <Slider {...settings}>
         
          <div className="img-slider">
            <h3><img src={cl1} alt="" /></h3>
          </div>
          <div className='img-slider'>
          <h3><img src={cl1} alt="" /></h3>
          </div>
          <div className='img-slider'>
          <h3><img src={cl1} alt="" /></h3>
          </div>
          <div className='img-slider'>
          <h3><img src={cl1} alt="" /></h3>
          </div>
          <div className='img-slider'>
          <h3><img src={cl1} alt="" /></h3>
          </div>
          <div className='img-slider'>
          <h3><img src={cl1} alt="" /></h3>
          </div>
        
        </Slider>
        </div>
        </>
      );
    }

export default Body;