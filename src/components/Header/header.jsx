import React from "react";
import "./header.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";

import "swiper/css";

const Header = () => {
  return (
    <div className="header_wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        speed={1900}
        parallax={true}
        modules={[Autoplay, Parallax]}
        className="swiper"
      >
        <SwiperSlide>
          <div className="header_slide slide1">
            <div className="content ">
              <small data-swiper-parallax="-200">Luxury Hotel</small>
              <h2 data-swiper-parallax="-400">
                Enjoy Your <span>Dream</span>Time with <br />{" "}
                <span>Luxury </span>Experience
              </h2>
              <p data-swiper-parallax="-600">
                Call Now <span>9110073545</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_slide slide2">
            <div className="content ">
              <small data-swiper-parallax="-200">Luxury Hotel</small>
              <h2 data-swiper-parallax="-400">
                Enjoy Your <span>Dream</span>Time with <br />{" "}
                <span>Luxury </span>Experience
              </h2>
              <p data-swiper-parallax="-600">
                Call Now <span>9110073545</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_slide slide3">
            <div className="content ">
              <small data-swiper-parallax="-200">Luxury Hotel</small>
              <h2 data-swiper-parallax="-400">
                Enjoy Your <span>Dream</span>Time with <br />{" "}
                <span>Luxury </span>Experience
              </h2>
              <p data-swiper-parallax="-600">
                Call Now <span>9110073545</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
