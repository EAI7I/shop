import Image from "next/image";
import styles from "./Pagination.module.scss";
interface PaginationProps {
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  pageNumberHandler: (e) => void;
  pageNumber: number;
  pageAmount: number;
}
export default function Pagination({
  nextPageHandler,
  prevPageHandler,
  pageNumber,
  pageAmount,
  pageNumberHandler,
}: PaginationProps) {
  return (
    <>
      <div className={styles.arrowBlock}>
        <Image
          src={"images/cards/arrow.svg"}
          alt="logo"
          width={20}
          height={50}
          className={styles.arrowPrev}
          onClick={prevPageHandler}
        ></Image>
        <input
          type="number"
          max={pageAmount}
          min={1}
          value={pageNumber}
          onChange={pageNumberHandler}
        />
        /{pageAmount}
        <Image
          src={"images/cards/arrow.svg"}
          alt="logo"
          width={20}
          height={50}
          className={styles.arrowNext}
          onClick={nextPageHandler}
        ></Image>
      </div>
    </>
  );
}
