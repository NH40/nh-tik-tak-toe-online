"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";

import { routes } from "@/kernel/routes";
import { useActionState } from "@/shared/lib/react";
import { SignUnFormState, signUpAction } from "../actions/sign-up";
import { BottomLink } from "../ui/link";
import { ErrorMessage } from "../ui/submit-button copy";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUnFormState,
  );

  return (
    <AuthFormLayout
      title="Регистрация"
      description="Создайте свою учетную запись, чтобы начать"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Регистрация</SubmitButton>}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="У вас уже есть аккаунт?"
          linkText="Войти"
          url={routes.signIn()}
        />
      }
    />
  );
}
