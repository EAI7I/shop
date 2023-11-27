import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./MobileButton.module.scss";
import Link from "next/link";

interface MobileButtonProps {
  link: string;
  pictureUrl: string;
}
export default function MobileButton({ link, pictureUrl }: MobileButtonProps) {
  return (
    <div className={styles.buttonBackground}>
      <Link href={link}>
        <Image src={pictureUrl} width={30} height={30} alt="Иконка" />
      </Link>
    </div>
  );
}
