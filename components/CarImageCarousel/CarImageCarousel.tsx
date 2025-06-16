"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { CarImageCarouselProps } from "./CarImageCarousel.types";

const carouselContainerClasses = "relative w-full h-[220px]";

export const CarImageCarousel = ({ images }: CarImageCarouselProps) => {
  return (
    <div className={carouselContainerClasses}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <img
              // className="coavr"
              src={src}
              alt={`Фотография автомобиля ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
