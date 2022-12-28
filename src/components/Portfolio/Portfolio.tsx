import React from "react";
import classes from "./Portfolio.module.css";
import { useAppSelector } from "../../store/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";


const Portfolio = () => {
  const isDark = useAppSelector((state) => state.darkMode.isDarkMode)
  return (
    <div className={classes.portfolio} id="portfolio">
      {/* heading */}
      <span style={{color: isDark?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className={classes.portfolioSlider}
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
