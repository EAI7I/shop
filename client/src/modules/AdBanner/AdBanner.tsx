import Image from "next/image";

import styles from "./AdBanner.module.scss";
import classNames from "classnames";
import Button from "@/ui/Button/Button";
import Link from "next/link";

interface AdBannerProps {
  srcDesc: string;
  srcMob: string;
  bannerTitle: string;
  bannerText: string;
  buttonText: string;
}
export default function AdBanner({
  srcDesc,
  srcMob,
  bannerTitle,
  bannerText,
  buttonText,
}: AdBannerProps) {
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.link}>
        <picture className={styles.picture}>
          <source srcSet={srcMob} media="(max-width:920px)" />
          <Image
            width={1800}
            height={820}
            src={srcDesc}
            alt="Banner Picture"
            className={styles.bannerPicture}
          ></Image>
        </picture>
        <div className={styles.bannerText}>
          <h2>{bannerTitle}</h2>
          <h4>{bannerText}</h4>
          <Button name="primaryPurpleBtn">{buttonText}</Button>
        </div>
      </Link>
    </div>
  );
}
