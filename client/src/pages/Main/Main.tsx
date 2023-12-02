import PopularCategoties from "@/modules/PopularCategoties/PopularCategoties";
import Slider from "@/components/Slider/Slider";
import { adBanners, cardsHitData, sliderImages } from "./data";

import AdBanner from "@/modules/AdBanner/AdBanner";
import SalesBlock from "@/modules/SalesBlock/SalesBlock";
import BrandsSlider from "@/components/BrandsSlider/BrandsSlider";
import CardsSlider from "@/components/CardsSlider/CardsSlider";
import { useEffect, useState } from "react";
import mock from "./../../../mock.json";
import getLastVisitedProducts from "../../../utils/getLastVisitedProducts";
import MobileButtons from "@/modules/MobileButtons/MobileButtons";
import Footer from "@/modules/Footer/Footer";

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
