import styles from "./ProductPage.module.scss";
import Image from "next/image";

import mock from "./../../../mock.json";
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  return {
    props: { product: mock.filter((item) => item.id == id)[0] },
  };
};
export default function ProductPage({ product }) {
  return (
    <>
      <div className={styles.productPageWrapper}>
        <div className={styles.image}>
          <Image
            src={product.imageUrl}
            alt="изображение"
            width={420}
            height={580}
          ></Image>
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTitle}>{product.name}</div>
          <div className={styles.productPrice}>{product.price}</div>
        </div>
      </div>
    </>
  );
}
