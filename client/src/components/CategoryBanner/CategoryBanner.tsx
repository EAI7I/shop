import Image from "next/image";

import styles from "./CategoryBanner.module.scss";
import classNames from "classnames";
import CategoryTag from "@/ui/CategoryTag/CategoryTag";
interface subCategory {
  name: string;
  link: string;
}
interface CategoryBannerType {
  bigBanner?: boolean;

  alignSelf?: string;
  categoryName: string;
  subCategories?: subCategory[];
  picture: string;
}

export default function CategoryBanner({
  bigBanner,
  alignSelf,
  categoryName,
  subCategories,
  picture,
}: CategoryBannerType) {
  return (
    <div className={classNames(styles.wrapper, bigBanner && styles.wrapperBig)}>
      <Image
        src={picture}
        width={250}
        height={250}
        alt="Picture of the product"
        className={styles.productPicture}
      ></Image>
      <div className={styles.titleWrapper} style={{ alignSelf }}>
        <div className={styles.title}>{categoryName}</div>
        <div className={styles.categoryTagWrapper}>
          {subCategories &&
            subCategories.map((subCategory) => {
              return (
                <CategoryTag
                  categoryName={subCategory.name}
                  key={subCategory.name}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
