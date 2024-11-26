"use client";

import { routes } from "@/kernel/routes";
import { useActionState } from "@/shared/lib/react";
import { signInAction, SignInFormState } from "../actions/sing-in";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { BottomLink } from "../ui/link";
import { SubmitButton } from "../ui/submit-button";
import { ErrorMessage } from "../ui/submit-button copy";

export function SignInForm() {
  const [formState, action, isPending] = useActionState(
    signInAction,
    {} as SignInFormState,
  );

  return (
    <AuthFormLayout
      title="Авторизация"
      description="
Добро пожаловать обратно! Пожалуйста, войдите в свою учетную запись"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}> Войти</SubmitButton>}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="У вас нет учетной записи?"
          linkText="Зарегистрироваться"
          url={routes.signUp()}
        />
      }
    />
  );
}
