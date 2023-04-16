import Link from "next/link";
import styles from "./HeaderBar.module.scss";
import Image from "next/image";

export default function HeaderBar() {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo}>
        <Image
          src={"images/header/main_logo.svg"}
          alt="logo"
          width={150}
          height={50}
        ></Image>
      </div>
      <div className={styles.search}>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="найти"
          />
        </div>

        <button type="button" className={styles.search_button}>
          <Image
            src="images/header/search.svg"
            alt="search"
            width={20}
            height={20}
            className={styles.search_button_img}
          />
        </button>
      </div>
      <div className={styles.cart}></div>
    </div>
  );
}
