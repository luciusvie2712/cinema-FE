
import './Banner.scss';
import imgBanner from '../../assets/image/temp-1.jpeg'
function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-title">
            <h2>Nghe nói em thích tôi</h2>
            <p className="banner-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting.
            </p>
            <div className="banner-actions">
                <button className="banner-details">Chi tiết</button>
                <button className="banner-watch"><i className="fa-solid fa-circle-play"></i>Xem Phim</button>
            </div>
        </div>
        <div className="banner-img">
            <img src={imgBanner} className='banner-img__poster'/>
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
