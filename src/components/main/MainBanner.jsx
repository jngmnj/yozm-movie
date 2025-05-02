import Inner from "@components/common/Inner";
import MainBannerItem from "@components/main/MainBannerItem";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainBanner = ({ data }) => {

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
      slidesPerView={2}
      breakpoints={{
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 7,
        },
      }}
      spaceBetween={16}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      scrollbar={{ draggable: true }}
      loop={true}
      className="py-10!"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className="rounded-sm border border-gray-200 overflow-hidden "
        >
          <MainBannerItem item={item} />
        </SwiperSlide>
      ))}
      <Inner className="px-6 md:px-0 absolute flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="swiper-button-prev text-white bg-green-400 rounded-full p-2 cursor-pointer opacity-60 hover:opacity-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className="swiper-button-next text-white bg-green-400 rounded-full p-2 cursor-pointer opacity-60 hover:opacity-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </Inner>
    </Swiper>
  );
};

export default MainBanner;
