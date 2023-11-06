import Image from "next/image";

import styles from "./SalesBanner.module.scss";
import classNames from "classnames";
import Button from "@/ui/Button/Button";
import Link from "next/link";

interface CategoryBannerType {
  bigBanner?: boolean;
  title: string;
  subTitle: string;
  picture: string;
  href: string;
}

export default function SalesBanner({
  bigBanner,
  title,
  subTitle,
  picture,
  href,
}: CategoryBannerType) {
  return (
    <Link
      href={href}
      className={classNames(styles.wrapper, bigBanner && styles.wrapperBig)}
    >
      <Image src={picture} alt="sales Picture" width={250} height={250} />
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <Button>Подробнее</Button>
      </div>
    </Link>
  );
}
