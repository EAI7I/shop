import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";
import styles from "./auth.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
const toogleText = {
  signup: {
    title: "Добро пожаловать",
    subtitle: "Введите свои данные чтобы получить доступ",
    btnText: "Войти",
  },
  signin: {
    title: "Привет, друг!",
    subtitle: "Зарегистрируйся, чтобы получить доступ",
    btnText: "Регистрация",
  },
};
export default function Signup() {
  const [actionState, setActionState] = useState("signup");
  const [toogleBlockText, setToogleBlockText] = useState(
    toogleText[actionState]
  );

  useEffect(() => {
    setToogleBlockText(toogleText[actionState]);
  }, [actionState]);
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.authFormWrapper}>
          <div
            className={classNames(
              styles.formWrapper,
              styles.signInForm,
              styles[actionState]
            )}
          >
            <h2 className={styles.title}>Cоздать профиль</h2>
            <form action="">
              <Input type="text" placeholder="Имя" />
              <Input type="email" placeholder="E-mail" />
              <Input type="tel" placeholder="Телефон" />
              <Input type="password" placeholder="Пароль" />
            </form>
            <Button name={"primaryPurpleBtn"}>Регистрация</Button>
          </div>

          <div
            className={classNames(styles.toggleContainer, styles[actionState])}
          >
            <h2 className={styles.toggleContainerTitle}>
              {toogleBlockText.title}
            </h2>
            <h4 className={styles.toggleContainerSubTitle}>
              {toogleBlockText.subtitle}
            </h4>
            <Button
              name={"secondaryPurpleBtn"}
              onClick={() => {
                actionState == "signin"
                  ? setActionState("signup")
                  : setActionState("signin");
              }}
            >
              {toogleBlockText.btnText}
            </Button>
          </div>
          <div
            className={classNames(
              styles.toggleContainerMob,
              styles[`animated_${actionState}`]
            )}
            onClick={() => {
              actionState == "signin"
                ? setActionState("signup")
                : setActionState("signin");
            }}
          ></div>
          <div className={styles.toggleContainerMobText}>
            {toogleBlockText.btnText}
          </div>
          <div
            className={classNames(
              styles.formWrapper,
              styles.signUpForm,
              styles[actionState]
            )}
          >
            <h2 className={styles.title}>Войти</h2>
            <form action="">
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Пароль" />
            </form>
            <Button name={"primaryPurpleBtn"}>Войти</Button>
          </div>
        </div>
      </div>
    </>
  );
}
