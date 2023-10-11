import Image from "next/image";
import Link from "next/link";
import styles from "./Input.module.scss";

export default function Input({
  type,
  placeholder,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        className={styles.customInput}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
