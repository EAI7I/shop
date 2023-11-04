import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./CategoryTag.module.scss";
import Link from "next/link";

interface CategoryTagProps {
  categoryName: string;
}

export default function CategoryTag({ categoryName }: CategoryTagProps) {
  return (
    <>
      <Link href="#" className={styles.categoryTag}>
        {categoryName}
      </Link>
    </>
  );
}
