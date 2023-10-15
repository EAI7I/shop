import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
type ClassNames = "primaryPurpleBtn" | "secondaryPurpleBtn";

interface ButtonPropsType {
  name?: ClassNames | "";
  children?: any;
  type?: string;
}
export default function Button({
  name = "",
  children,
  type,
  ...rest
}: ButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <button
        className={classNames(styles.button, styles[name])}
        onClick={rest.onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
}
