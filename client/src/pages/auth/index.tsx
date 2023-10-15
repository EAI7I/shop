import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";
import styles from "./auth.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { toogleText } from "./constants";
import { useSignUpForm, useSignInForm } from "./hooks";

export default function Signup() {
  const [actionState, setActionState] = useState("signup");
  const [toogleBlockText, setToogleBlockText] = useState(
    toogleText[actionState]
  );
  const { signUpFormAction, onSubmitSignUp } = useSignUpForm();
  const { signInFormAction, onSubmitSignIn } = useSignInForm();
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
            <form onSubmit={onSubmitSignIn}>
              <Input
                type="text"
                placeholder="Имя"
                hookForm={signInFormAction}
                name="name"
              />
              <Input
                placeholder="E-mail"
                hookForm={signInFormAction}
                name="email"
              />

              <Input
                type="tel"
                placeholder="Телефон"
                hookForm={signInFormAction}
                name="tel"
              />
              <Input
                type="password"
                placeholder="Пароль"
                hookForm={signInFormAction}
                name="password"
              />
              <div className={styles.centerBtn}>
                <Button name={"primaryPurpleBtn"} type="submit">
                  Регистрация
                </Button>
              </div>
            </form>
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
            <form onSubmit={onSubmitSignUp}>
              <Input
                placeholder="E-mail"
                hookForm={signUpFormAction}
                name="email"
              />
              <Input
                type="password"
                placeholder="Пароль"
                hookForm={signUpFormAction}
                name="password"
              />
              <div className={styles.centerBtn}>
                <Button name={"primaryPurpleBtn"} type="submit">
                  Войти
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
