import React from "react";
import mc from "./Testimonials.module.css";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clsx from 'clsx'
import { Pagination } from "swiper";
import "swiper/css/pagination";

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic2,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic3,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic4,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
    ];

    return (
        <div className={mc.tWrapper} id="testimonial">
            <div className={mc.tHeading}>
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className={clsx([mc.blur, mc.tBlur1])} style={{ background: "var(--purple)" }}></div>
                <div className={clsx([mc.blur, mc.tBlur2])} style={{ background: "skyblue" }}></div>

            </div>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={mc.testimonial}>
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Testimonial;
