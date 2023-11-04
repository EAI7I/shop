import Link from "next/link";
import { useState, useEffect } from "react";
import Card from "../../ui/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Content.module.scss";
import mock from "./../../../mock.json";
interface product {
  id: number;
  imageUrl: string;
  name: string;
  price: string | number;
}
const info: product[] = mock;

let size = 14;
const pageAmount = Math.ceil(info.length / size);

export default function Content() {
  const [pageNumber, setPageNumber] = useState(1);
  const [productPageItems, setProductPageItems] = useState<product[]>([]);
  const nextPageHandler = () => {
    setPageNumber((prev) => {
      return Number(prev) < pageAmount ? Number(prev) + 1 : pageAmount;
    });
  };
  const prevPageHandler = () => {
    setPageNumber((prev) => {
      return Number(prev) > 1 ? Number(prev) - 1 : 1;
    });
  };
  const pageNumberHandler = (e) => {
    let { min, max, value } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setPageNumber(e.target.value);
  };
  useEffect(() => {
    let items: product[] = info.slice(
      (pageNumber - 1) * size,
      (pageNumber - 1) * size + size
    );
    setProductPageItems(items);
  }, [pageNumber]);

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {productPageItems.map((productItem, i) => {
            return <Card productItem={productItem} />;
          })}
        </div>
        <Pagination
          nextPageHandler={nextPageHandler}
          prevPageHandler={prevPageHandler}
          pageNumber={pageNumber}
          pageAmount={pageAmount}
          pageNumberHandler={pageNumberHandler}
        />
      </div>
    </>
  );
}
