import Image from "next/image";

import styles from "./Footer.module.scss";
import classNames from "classnames";
import Button from "@/ui/Button/Button";
import Link from "next/link";
import Input from "@/ui/Input/Input";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.info}>
        <section className={styles.column}>
          <h4 className={styles.header}>Для Вас</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/">Подарочные карты</Link>
            </li>
            <li>
              <Link href="/">Личный кабинет</Link>
            </li>
            <li>
              <Link href="/">Акции</Link>
            </li>
            <li>
              <Link href="/">Корзина</Link>
            </li>
          </ul>
        </section>
        <section className={styles.column}>
          <h4 className={styles.header}>Помощь</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/">Доставка и оплата</Link>
            </li>
            <li>
              <Link href="/">Гарантия лучшей цены</Link>
            </li>
            <li>
              <Link href="/">Дополнительные услуги</Link>
            </li>
            <li>
              <Link href="/">Гарантийное обслуживание</Link>
            </li>
          </ul>
        </section>
        <section className={styles.column}>
          <h4 className={styles.header}>О компании</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/">О нас</Link>
            </li>
            <li>
              <Link href="/">Магазины</Link>
            </li>
            <li>
              <Link href="/">Вакансии</Link>
            </li>
            <li>
              <Link href="/">Контакты</Link>
            </li>
          </ul>
        </section>
        <section className={styles.column}>
          <h4 className={styles.header}>Контакты</h4>
          <h4 className={styles.phone}>8 800 555-35-35</h4>
          <div className={styles.socialMedia}>
            <Image
              src="/images/Footer/facebook.png"
              width={30}
              height={30}
              alt="facebook icon"
            ></Image>
            <Image
              src="/images/Footer/instagram.png"
              width={30}
              height={30}
              alt="instagram icon"
            ></Image>
            <Image
              src="/images/Footer/youtube.png"
              width={30}
              height={30}
              alt="youtube icon"
            ></Image>
          </div>
        </section>
      </section>
      <section className={styles.copiright}>&copy; Goods store</section>
    </footer>
  );
}
