import React from "react";
import CreativeSpeakers from "../CreativeSpeakers";
import SpeakersData from "../CreativeSpeakers/SpeakersData";
// import SwiperCore,{Pagination,Navigation} from 'swiper/core'

import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/swiper.min.css'

// SwiperCore.use([Pagination,Navigation])

const CreativeSpeakersSection = () => {
  return (
    <div
      className="creative-speakers py-5 text-capitalize"
      style={{ backgroundColor: "#e6e6e6" }}
    >
      <div className="title text-center my-5">
        <h2 className="text-uppercase fw-bold">
          creative <span className="text-danger"> speakers</span>
        </h2>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          perferendis!
        </p>
      </div>
      <div className="container">
        <div className="row text-dark text-center">
         <Swiper slidesPerView={4} spaceBetween={50} >
          <SwiperSlide>slide1</SwiperSlide>
          <SwiperSlide>slide1</SwiperSlide>
          <SwiperSlide>slide1</SwiperSlide>
          <SwiperSlide>slide1</SwiperSlide>
        {/* {SpeakersData.map((el) => (
              < SwiperSlide  key={el.id}>
               
                <CreativeSpeakers
                  
                  img={el.img}
                  name={el.name}
                  job={el.job}
                  alt={el.alt}
                />
              </SwiperSlide >
            ))} */}
         </Swiper> 
       
        </div>
      </div>
    </div>
  );
};

export default CreativeSpeakersSection;
