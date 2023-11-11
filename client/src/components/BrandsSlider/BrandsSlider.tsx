import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styles from "./BrandsSlider.module.scss";
import { brands } from "./data";

export default function BrandsSlider() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={6}
        grabCursor
        wrapperClass={styles.sliderContainer}
        navigation
        injectStyles={[
          `swiper-button-prev:{
          display:none;
        }`,
        ]}
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
    </div>
  );
}
