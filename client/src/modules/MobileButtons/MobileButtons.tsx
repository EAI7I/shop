import Image from "next/image";

import styles from "./MobileButtons.module.scss";
import classNames from "classnames";
import Button from "@/ui/Button/Button";
import Link from "next/link";
import MobileButton from "@/ui/MobileButton/MobileButton";

const buttons = [
  {
    pictureUrl: "/images/mobileButtons/cart.svg",
    link: "/",
  },
  {
    pictureUrl: "/images/mobileButtons/menu.svg",
    link: "/",
  },
  {
    pictureUrl: "/images/mobileButtons/person.svg",
    link: "/",
  },
];

export default function MobileButtons() {
  return (
    <div className={styles.wrapper}>
      {buttons.map((button) => {
        return (
          <MobileButton
            pictureUrl={button.pictureUrl}
            link={button.link}
            key={button.pictureUrl}
          />
        );
      })}
    </div>
  );
}
