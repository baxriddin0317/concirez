"use client"
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

export const Testimonial = () => {
  return (
    <section className="mt-4 relative pt-8">
      <Image
        className="absolute -z-20 top-0 left-0"
        src={"/img/vector-2.svg"}
        width={770}
        height={536}
        alt=""
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-5">
        {/* head */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-brand-orange text-lg font-bold  uppercase">
              Testimonial
            </p>
            <h3 className="font-atyp text-5xl capitalize font-semibold">
              What our <span className="text-brand-orange">clients say</span>
            </h3>
            <p className="text-lg">
              Discover how our Resy Bot is transforming dining experiences for
              food enthusiasts across New York.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-brand-orange border border-brand-orange whitespace-nowrap px-8 py-4 rounded-full text-lg">
              Leave a Review
            </button>
            <button className="bg-transparent whitespace-nowrap border border-brand-orange px-8 py-4 rounded-full text-lg">
              View More
            </button>
          </div>
        </div>
        {/* swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 70,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper !mt-8 !pb-11"
        >
          {[...Array(5)].map((item,idx) => (
            <SwiperSlide key={idx}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="flex items-stretch gap-5">
      <div className="relative w-48 h-72 rounded-2xl border border-brand-black-100 backdrop-blur-lg bg-secondary"></div>
      <div className="flex flex-col justify-between flex-1 py-2">
        <div className="flex items-center gap-2.5">
          {[...Array(5)].map((item, idx) => (
            <span key={idx}>
              <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none">
                <path d="M15.5 0.71582C15.5 0.71582 16.3276 8.44073 19.5514 11.6645C22.7751 14.8882 30.5 15.7158 30.5 15.7158C30.5 15.7158 22.7751 16.5434 19.5514 19.7672C16.3276 22.9909 15.5 30.7158 15.5 30.7158C15.5 30.7158 14.6724 22.9909 11.4486 19.7672C8.22491 16.5434 0.5 15.7158 0.5 15.7158C0.5 15.7158 8.22491 14.8882 11.4486 11.6645C14.6724 8.44073 15.5 0.71582 15.5 0.71582Z" fill="#FF462D" />
              </svg>
            </span>
          ))}
        </div>
        <div className="text-lg max-w-96">
          <h3 className="font-black">
          "Game-changer for Foodies!"
          </h3>
          <p className="leading-8 lg:pr-10">
          I've never had such an easy time booking tables at my favorite restaurants in NYC. This bot has truly revolutionized the way I dine out.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-atyp mb-3">
          Sarah L.
          </h3>
          <p className="">
          Designer
          </p>
        </div>
      </div>
    </div>
  )
}
