import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./CardsSlider.module.scss";
import Card, { productItem } from "@/ui/Card/Card";

interface CardsSliderProps {
  cards: productItem[];
  title?: string;
}

export default function CardsSlider({ cards, title }: CardsSliderProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={30}
        grabCursor
        wrapperClass={styles.sliderContainer}
        navigation
        breakpoints={{
          2000: {
            slidesPerView: 6,
          },
          1600: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 4,
          },
          520: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 2,
          },
        }}
      >
        {cards.map((card) => {
          return (
            <SwiperSlide key={card.name}>
              <Card productItem={card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
