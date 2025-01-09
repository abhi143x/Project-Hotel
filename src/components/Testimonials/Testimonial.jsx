import React from 'react'
import "./Testimonial.css"
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

import img1 from "./../../assets/saket.jpeg";
import img2 from "./../../assets/aman.jpeg";
import img3 from "./../../assets/sugu.jpeg";


const Testimonial = () => {
  return (
    <div className='test_wrap section'>
          <small className="section_Heading">
                   Testimonials
                  </small>
                  <h2 className='section_Title'>
                    What Our Clients <span>Says</span>
                  </h2>
                  <Swiper className='swiper' slidesPerView={1} spaceBetween={30}
                  loop={true} modules={[Autoplay]} autoplay={{delay : 1000}} 
                  speed={1500}
                  breakpoints={{
                    0:{
                        slidesPerView:1
                    },
                    1200:{
                        slidesPerView:2
                    }
                  }}
                  
                  >

                    <SwiperSlide className='testimonial'>
                            <img src={img1} alt="" />
                            <div className="content">
                                <h3>Saket Sharma <span>Manager</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum assumenda eveniet tempora doloribus autem architecto molestias laborum quasi error? Nostrum saepe quos odit facilis quaerat?</p>

                            </div>
                    </SwiperSlide>

                    <SwiperSlide className='testimonial'>
                            <img src={img2} alt="" />
                            <div className="content">
                                <h3>Aman Sagar <span>Sales Manager</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum assumenda eveniet tempora doloribus autem architecto molestias laborum quasi error? Nostrum saepe quos odit facilis quaerat?</p>
                                
                            </div>
                    </SwiperSlide>

                    <SwiperSlide className='testimonial'>
                            <img src={img3} alt="" />
                            <div className="content">
                                <h3>Sugandha Tiwari <span>Manager</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum assumenda eveniet tempora doloribus autem architecto molestias laborum quasi error? Nostrum saepe quos odit facilis quaerat?</p>
                                
                            </div>
                    </SwiperSlide>
                  </Swiper>
    </div>
  )
}

export default Testimonial