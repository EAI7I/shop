import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styles from "./BrandsSlider.module.scss";
import { brands } from "./data";
import { useRef } from "react";

export default function BrandsSlider() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.arrowPrev}
        onClick={() => swiperRef.current?.slidePrev()}
      ></div>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={6}
        grabCursor
        wrapperClass={styles.sliderContainer}
        breakpoints={{
          1200: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 5,
          },
          680: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {brands.map((brand) => {
          return (
            <SwiperSlide key={brand.alt}>
              <Image
                src={brand.src}
                width={80}
                height={80}
                alt={brand.alt}
                className={styles.brandLogo}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className={styles.arrowNext}
        onClick={() => swiperRef.current?.slideNext()}
      ></div>
    </div>
  );
}
