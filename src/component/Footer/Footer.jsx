import './Footer.scss';
import React from "react";
function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
          <div className="text-2xl font-bold text " style={{color:'red'}}>MOVIE</div>
            <p>Siêu thị dụng cụ sục số 1 Việt Nam</p>
          </div>
  
          <div className="footer-column">
            <h3 className="footer-heading">Bạn cần hỗ trợ</h3>
            <p>1900 6750</p>
            <p>Địa chỉ: 70 Lu Gia, Ward 15, District 11, Ho Chi Minh City</p>
            <p>Email: support@sapo.vn</p>
            <div className='Footer-logo-xahoi'>
              <a href="#" className="footer-link">
              <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="footer-link">
              <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="footer-link">
              <i className="fa-brands fa-youtube " style={{color:'rgba(255, 0, 0, 0.573)'}}></i>
              </a>
              <a href="#" className="footer-link">
              <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="footer-payment-icons">
                <i className="fa-brands fa-cc-stripe"></i>
                <i className="fa-brands fa-paypal"></i>
                <i className="fa-brands fa-cc-visa"></i>
            </div>
          </div>
  
          <div className="footer-column">
            <h3 className="footer-heading">Hướng dẫn mua hàng</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Trang chủ</a></li>
              <li><a href="#" className="footer-link">Giới thiệu</a></li>
              <li><a href="#" className="footer-link">Danh mục</a></li>
              <li><a href="#" className="footer-link">Tin tức</a></li>
              <li><a href="#" className="footer-link">Liên hệ</a></li>
              <li><a href="#" className="footer-link">Hướng dẫn sử dụng</a></li>
            </ul>
          </div>
  
          <div className="footer-column">
            <h3 className="footer-heading">Hỗ trợ khách hàng</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Trang chủ</a></li>
              <li><a href="#" className="footer-link">Giới thiệu</a></li>
              <li><a href="#" className="footer-link">Danh mục</a></li>
              <li><a href="#" className="footer-link">Tin tức</a></li>
              <li><a href="#" className="footer-link">Liên hệ</a></li>
              <li><a href="#" className="footer-link">Hướng dẫn sử dụng</a></li>
            </ul>
          </div>
        </div>
  
        <div className="footer-copyright">
          <p>© Bản quyền thuộc về Thu dep trai | Cung cấp bởi thudeptrai</p>
        </div>
  
        <div className="footer-back-to-top">
          <a href="#" className="back-to-top-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="back-to-top-icon" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
            </svg>
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;