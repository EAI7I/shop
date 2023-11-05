import PopularCategoties from "@/modules/PopularCategoties/PopularCategoties";
import Slider from "@/components/Slider/Slider";
import { adBanners } from "./data";

import AdBanner from "@/modules/AdBanner/AdBanner";

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
  return (
    <>
      <Slider sliderItems={sliderItems} />
      <PopularCategoties />
      <AdBanner {...firstBanner} />
    </>
  );
}
