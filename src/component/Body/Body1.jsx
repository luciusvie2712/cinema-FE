import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Body1.scss'
import cl2 from '../../assets/image/temp-1.jpeg';
function Body1() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return (
        <>
       
        <div className="slider-main1">
        <div className="header-slider1">Phim Đang Chiếu </div>
        <Slider {...settings}>
         
          <div className="img-slider1">
            <h3><img src={cl2} alt="" /></h3>
          </div>
          <div className='img-slider1'>
          <h3><img src={cl2} alt="" /></h3>
          </div>
          <div className='img-slider1'>
          <h3><img src={cl2} alt="" /></h3>
          </div>
          <div className='img-slider1'>
          <h3><img src={cl2} alt="" /></h3>
          </div>
          <div className='img-slider1'>
          <h3><img src={cl2} alt="" /></h3>
          </div>
          <div className='img-slider1'>
          <h3><img src={cl2} alt="" /></h3>
          </div>
        
        </Slider>
        </div>
        </>
      );
    }

export default Body1;