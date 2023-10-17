import * as yup from "yup";
export const toogleText = {
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

export const signInFormSchema = yup.object({
  email: yup
    .string()
    .email("Введите корректный адрес электронной почты")
    .required("Введите адрес электронной почты"),
  password: yup
    .string()
    .min(6, "Пароль должен состоять хотя бы из 6 символов")
    .required("Введите пароль"),
});
export const signUpFormSchema = yup.object({
  name: yup.string().required("Введите имя"),
  email: yup
    .string()
    .email("Введите корректный адрес электронной почты")
    .required("Введите адрес электронной почты"),
  tel: yup.string().required("Введите телефон"),
  password: yup
    .string()
    .min(6, "Пароль должен состоять хотя бы из 6 символов")
    .required("Введите пароль"),
});
