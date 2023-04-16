import HeaderBar from "@/components/HeaderBar/HeaderBar";
import NavBar from "@/components/NavBar/NavBar";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";

const sliderImages = [
  "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week11/13_03/bnr-w11sPromo.webp",
  "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week10/09_03/bnr-w11s3.webp",
  "https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week11/13_03/bnr-w11s4.webp",
];
const sliderItems = sliderImages.map((image, index) => (
  <img key={index} src={image} alt="logo" style={{ width: "100%" }} />
));

export default function Header() {
  return (
    <>
      <HeaderBar />
      <NavBar />
      <Slider sliderItems={sliderItems} />
    </>
  );
}
