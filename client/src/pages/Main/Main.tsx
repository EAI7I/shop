import PopularCategoties from "@/modules/PopularCategoties/PopularCategoties";
import Slider from "@/components/Slider/Slider";
import { adBanners, cardsHitData } from "./data";

import AdBanner from "@/modules/AdBanner/AdBanner";
import SalesBlock from "@/modules/SalesBlock/SalesBlock";
import BrandsSlider from "@/components/BrandsSlider/BrandsSlider";
import CardsSlider from "@/components/CardsSlider/CardsSlider";
import { useEffect, useState } from "react";
import mock from "./../../../mock.json";
import getLastVisitedProducts from "../../../utils/getLastVisitedProducts";
import MobileButtons from "@/modules/MobileButtons/MobileButtons";
import Footer from "@/modules/Footer/Footer";

const sliderImages = [
  {
    src: "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week44/31_10/bnr-w44s6.webp",
    srcSet:
      "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week46/16_11/bnr-w47s6-mv.webp",
  },
  {
    src: "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week43/27_10/bnr-w44s3.webp",
    srcSet:
      "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week46/16_11/bnr-w47s1-mv.webp",
  },
  {
    src: "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week44/31_10/bnr-w44s7.webp",
    srcSet:
      "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week46/16_11/bnr-w47s8-mv.webp",
  },
  {
    src: "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week44/31_10/bnr-w44s9.webp",
    srcSet:
      "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week46/16_11/bnr-w47s5-mv.webp",
  },
];
const sliderItems = sliderImages.map((image, index) => (
  <picture>
    <source
      srcSet={image.srcSet}
      media="(max-width:768px)"
      width={40}
      height={40}
    />
    <img
      key={index}
      src={image.src}
      alt="banner"
      style={{ width: "100%", height: "auto" }}
    />
  </picture>
));

const [firstBanner] = [...adBanners];

export default function Main() {
  const [recentProducts, setRecentProducts]: any[] = useState([]);

  useEffect(() => {
    const lastVisitedProduct = getLastVisitedProducts();
    let tempRecentProducts = [] as any[];
    if (lastVisitedProduct) {
      lastVisitedProduct.forEach((productId) => {
        tempRecentProducts.push(mock.filter((item) => item.id == productId)[0]);
      });
      setRecentProducts(tempRecentProducts);
    }
  }, []);

  return (
    <>
      <MobileButtons />
      <Slider sliderItems={sliderItems} />
      <BrandsSlider />
      <CardsSlider cards={cardsHitData} title="ПОПУЛЯРНЫЕ ТОВАРЫ СО СКИДКАМИ" />
      <PopularCategoties />
      <CardsSlider cards={recentProducts} title="ВЫ НЕДАВНО СМОТРЕЛИ" />

      <AdBanner {...firstBanner} />
      <SalesBlock />
      <Footer />
    </>
  );
}
