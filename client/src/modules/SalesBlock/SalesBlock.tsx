import SalesBanner from "@/components/SalesBanner/SalesBanner";
import styles from "./SalesBlock.module.scss";
import { salesBanners } from "./data";
import Link from "next/link";

export default function SalesBlock() {
  return (
    //стека 3 столбца
    <div className={styles.wrapper}>
      <Link href={"/"}>
        <h2 className={styles.title}>Все Акции &gt;</h2>
      </Link>
      <div className={styles.banners}>
        {salesBanners.map((salesItem) => {
          return <SalesBanner {...salesItem} key={salesItem.title} />;
        })}
      </div>
    </div>
  );
}
