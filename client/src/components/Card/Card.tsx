import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.scss";
interface CardProps {
  productItem: {
    imageUrl: string;
    name: string;
    price: number;
  };
}

export default function Card({ productItem }: CardProps) {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={productItem.imageUrl}
          alt="картинка товара"
          width={300}
          height={300}
          className={styles.cardImage}
        ></Image>
        <div className={styles.cardName}>{productItem.name}</div>
        <div className={styles.cardPrice}>{productItem.price}₽</div>
      </div>
    </>
  );
}
