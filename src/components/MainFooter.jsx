import React from "react";
import LogoFooter from "../assets/image/logo-registed.png"
import "../assets/style/MainFooter.scss"

const MainFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer__content-around">
                    <div className="footer-content__title">MUA VÉ XEM PHIM</div>
                    <ul className="footer-content__option">
                        <li className="footer-option__item">Lịch chiếu phim</li>
                        <li className="footer-option__item">Phim chiếu rạp</li>
                        <li className="footer-option__item">Blog phim</li>
                    </ul>
                </div>
                <div className="footer__content-center">
                    <div className="footer-content__title">CHĂM SÓC KHÁCH HÀNG</div>
                    <ul className="footer-content__option">
                        <li className="footer-option__item">Đại chỉ: Lầu 2, 41/22 Phạm Ngũ Lão, phường 3, quận Gò Vấp, TP.HCM</li>
                        <li className="footer-option__item">Liên hệ: 0382694132</li>
                        <li className="footer-option__item">Email: vinh15062005@gmail.com</li>
                        <li className="footer-option__item">Tổng đài gọi ra: </li>

                    </ul>
                    <div className="footer-content__title">HỢP TÁC DOANH NGHIỆP</div>
                    <ul className="footer-content__option">
                        <li className="footer-option__item">Hotline: </li>
                        <li className="footer-option__item">Email: </li>
                        <li className="footer-option__item">Website: </li>
                    </ul>
                </div>
                <div className="footer__content-around">
                    <div className="footer-content__title">
                        KẾT NỐI VỚI CHÚNG TỐI
                    </div>
                    <div className="footer-content__title">
                        ĐƯỢC CHỨNG NHẬN BỚI
                    </div>
                    <div className="footer-content__logo">
                        <img src={LogoFooter} alt="Logo Footer" className="logo-footer" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom__content">
                    <div className="content__name-company">
                        CÔNG TY CỔ PHẦN ĐI VÒNG VÒNG VIỆT NAM TRỰC TUYẾN
                    </div>
                    <div className="footer-content__description">
                        Trụ sở chính: Tầng 2, 41/22 Phạm Ngũ Lão, phường 3, quận Gò Vấp, TP.HCM
                    </div>
                    <div className="footer-content__description">
                        Tên thương hiệu: Đi Vòng Vòng
                    </div>
                    <div className="footer-content__description">
                        ©Copyright VinhK3 2025
                    </div>
                </div>
                <div className="footer-bottom__content">
                    
                </div>
            </div>
        </div>
    )
}

export default MainFooter;