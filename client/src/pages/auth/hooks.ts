import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormSchema, signInFormSchema } from "./constants";

export const useSignInForm = () => {
  const signInFormAction = useForm<any>({
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmitSignIn = signInFormAction.handleSubmit((data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });

  return {
    signInFormAction,
    onSubmitSignIn,
  };
};

export const useSignUpForm = () => {
  const signUpFormAction = useForm<any>({
    resolver: yupResolver(signUpFormSchema),
  });
  const onSubmitSignUp = signUpFormAction.handleSubmit((data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });

  return {
    signUpFormAction,
    onSubmitSignUp,
  };
};
