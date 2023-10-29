import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
type ClassNames = "primaryPurpleBtn" | "secondaryPurpleBtn";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: ClassNames | "";
  children?: any;
}
export default function Button({
  name = "",
  children,
  ...rest
}: ButtonPropsType) {
  return (
    <>
      <button
        className={classNames(styles.button, styles[name])}
        onClick={rest.onClick}
        type={rest.type}
      >
        {children}
      </button>
    </>
  );
}
