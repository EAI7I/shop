import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.scss";
import Button from "../Button/Button";

export interface productItem {
  imageUrl: string;
  name: string;
  price: string | number;
  id: number;
}
interface CardProps {
  productItem: productItem;
}

export default function Card({ productItem }: CardProps) {
  return (
    <>
      <div className={styles.card}>
        <Link
          href={`ProductPage/${productItem.id}`}
          className={styles.cardHref}
        >
          <Image
            src={productItem.imageUrl}
            alt="картинка товара"
            width={300}
            height={300}
            className={styles.cardImage}
          ></Image>
          <div className={styles.cardInfo}>
            <div className={styles.cardName}>
              <h3>{productItem.name}</h3>
            </div>
            <div className={styles.cardPrice}>{productItem.price}</div>
            <Button name="primaryPurpleBtn">В корзину</Button>
          </div>
        </Link>
      </div>
    </>
  );
}
