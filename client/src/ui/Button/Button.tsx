import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
type ClassNames = "primaryPurpleBtn" | "secondaryPurpleBtn";

interface ButtonPropsType {
  name?: ClassNames | "";
  children?: any;
}
// ButtonPropsType | ButtonHTMLAttributes<HTMLButtonElement>
export default function Button({ name = "", children, ...rest }: any) {
  return (
    <>
      <button
        className={classNames(styles.button, styles[name])}
        onClick={rest.onClick}
      >
        {children}
      </button>
    </>
  );
}
