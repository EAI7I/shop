import PopularCategoties from "@/modules/PopularCategoties/PopularCategoties";
import Slider from "@/components/Slider/Slider";

import styles from "./Main.module.scss";

export default function Main() {
  const sliderImages = [
    "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week11/13_03/bnr-w11sPromo.webp",
    "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week10/09_03/bnr-w11s3.webp",
    "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week11/13_03/bnr-w11s4.webp",
  ];
  const sliderItems = sliderImages.map((image, index) => (
    <img key={index} src={image} alt="banner" style={{ width: "100%" }} />
  ));

  return (
    <>
      <Slider sliderItems={sliderItems} />
      <PopularCategoties />
    </>
  );
}
