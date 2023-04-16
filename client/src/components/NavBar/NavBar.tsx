import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";

type Item = {
  id: number;
  name: string;
  path: string;
};
type Items = Item[];
const navItems: Items = [
  { id: 1, name: "Каталог", path: "/" },
  { id: 2, name: "Новинки", path: "/" },
  { id: 3, name: "Подборки", path: "/" },
  { id: 4, name: "Промокод", path: "/" },
  { id: 5, name: "Акции", path: "/" },
];

export default function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.NavBar}>
      {navItems.map(({ id, name, path }) => (
        <div className={styles.link_wrapper} key={id}>
          <Link
            className={`${styles.link} ${
              router.route == path ? styles.active : ""
            }`}
            key={id}
            href={path}
          >
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}
