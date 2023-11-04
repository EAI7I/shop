import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

type Item = {
  id: number;
  name: string;
  path: string;
};
type Items = Item[];
const navItems: Items = [
  { id: 1, name: "Каталог", path: "/catalog" },
  { id: 2, name: "Новинки", path: "/new" },
  { id: 3, name: "Подборки", path: "/selections" },
  { id: 4, name: "Промокод", path: "/promotional" },
  { id: 5, name: "Акции", path: "/sales" },
];

export default function NavBar() {
  const router = useRouter();
  return (
    <div
      className={classNames(
        styles.NavBar,
        router.route != "/" ? styles.NavBarActive : ""
      )}
    >
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
