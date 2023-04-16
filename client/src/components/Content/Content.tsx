import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Content.module.scss";
interface product {
  imageUrl: string;
  name: string;
  price: number;
}
const info: product[] = [];
for (let i = 0; i < 250; i++) {
  info.push({
    imageUrl:
      "https://cdn.sportmaster.ru/upload/resize_cache/iblock/b3c/464_624_1/74405830299.jpg",
    name: "info",
    price: 250 + i,
  });
}
let size = 30;
let subarray: product[][] = [];
for (let i = 0; i < Math.ceil(info.length / size); i++) {
  subarray[i] = info.slice(i * size, i * size + size);
}
export default function Content() {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <>
      <div className={styles.content}>
        {subarray[pageNumber].map((productItem, i) => {
          return <Card productItem={productItem} key={i} />;
        })}
      </div>
      <div className={styles.arrowBlock}>
        <div
          className={styles.arrowNext}
          onClick={() => {
            setPageNumber((prev) => {
              if (prev < subarray.length - 1) {
                return prev + 1;
              }

              return subarray.length - 1;
            });
          }}
        >
          <Image
            src={"images/cards/arrow.svg"}
            alt="logo"
            width={20}
            height={50}
          ></Image>
        </div>
        <div
          className={styles.arrowPrev}
          onClick={() => {
            setPageNumber((prev) => {
              if (prev > 0) {
                return prev - 1;
              }
              return 0;
            });
          }}
        >
          <Image
            src={"images/cards/arrow.svg"}
            alt="logo"
            width={20}
            height={50}
          ></Image>
        </div>
      </div>
    </>
  );
}
