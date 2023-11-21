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

const sliderImages = [
  "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week43/27_10/bnr-w44s3.webp",
  "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week44/31_10/bnr-w44s7.webp",
  "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week44/31_10/bnr-w44s6.webp",
  "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week44/31_10/bnr-w44s9.webp",
];
const sliderItems = sliderImages.map((image, index) => (
  <img key={index} src={image} alt="banner" style={{ width: "100%" }} />
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
      <Slider sliderItems={sliderItems} />
      <BrandsSlider />
      <CardsSlider cards={cardsHitData} title="ПОПУЛЯРНЫЕ ТОВАРЫ СО СКИДКАМИ" />
      <PopularCategoties />
      <CardsSlider cards={recentProducts} title="ВЫ НЕДАВНО СМОТРЕЛИ" />

      <AdBanner {...firstBanner} />
      <SalesBlock />
    </>
  );
}
