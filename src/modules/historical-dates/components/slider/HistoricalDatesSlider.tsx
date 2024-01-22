import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./HistoricalDatesSlider.scss";
import { Navigation } from "swiper/modules";
import React from "react";
import { NavigationOptions } from "swiper/types/modules/navigation";

type Props = {
  events: { year: number; text: string }[];
  title: string;
};

const HistoricalDatesSlider = ({ events, title }: Props) => {
  const swiperRef = React.useRef<HTMLElement>(null);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const breakpoints = {
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  };

  React.useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.classList.add("hidden");
      setTimeout(() => swiperRef.current?.classList.remove("hidden"), 500);
    }
  });
  return (
    <div className="historical-dates-slider__wrap">
      <Swiper
        ref={swiperRef}
        className="historical-dates-slider"
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={breakpoints}
        slidesPerView={1.5}
        spaceBetween={25}
        freeMode
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper: SwiperType) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          if (!navigation) return;
          navigation.prevEl = navigationPrevRef.current;
          navigation.nextEl = navigationNextRef.current;
        }}
      >
        {events.map((eventItem, index) => (
          <SwiperSlide className="historical-dates-slider__item" key={index}>
            <div className="historical-dates-slider__item-year">
              {eventItem.year}
            </div>
            <div className="historical-dates-slider__item-text">
              {eventItem.text}
            </div>
          </SwiperSlide>
        ))}
        <div className="historical-dates-slider__title">{title}</div>
      </Swiper>
      <button
        className="historical-dates-slider__nav prev"
        ref={navigationPrevRef}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
      <button
        className="historical-dates-slider__nav next"
        ref={navigationNextRef}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default HistoricalDatesSlider;
