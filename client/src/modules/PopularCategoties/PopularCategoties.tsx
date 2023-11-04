import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import styles from "./PopularCategoties.module.scss";
import { categories } from "./data";

export default function PopularCategoties() {
  return (
    //стека 4 столбца
    <div className={styles.wrapper}>
      <h2 className={styles.title}>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
      <div className={styles.banners}>
        {categories.map((item, index) => {
          return <CategoryBanner {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
