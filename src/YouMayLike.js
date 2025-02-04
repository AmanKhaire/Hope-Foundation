import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaCalendarAlt, FaUser, FaComment } from "react-icons/fa";
import "./YouMayLike.css";

const RecommendedSlider = () => {
  const images = Array.from({ length: 8 }, (_, i) => `/img${i + 1}.jpg`);
  const headlines = [
    "Helping Hands for All",
    "Bringing Smiles Everyday",
    "Support for Every Child",
    "A Better Future Together",
    "Spreading Hope & Care",
    "Empowering Communities",
    "Act of Kindness Matters",
    "Be the Change You Wish"
  ];

  return (
    <div className="slider-container">
      <div className="swiper-wrapper-container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="slide">
              <img src={process.env.PUBLIC_URL + img} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="slide-content">
                <h3 className="headline">{headlines[index]}</h3>
                <div className="meta-info">
                  <span><FaCalendarAlt /> Jan 20, 2025</span>
                  <span><FaUser /> Demo Team</span>
                  <span><FaComment /> 5 Comments</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default RecommendedSlider;
