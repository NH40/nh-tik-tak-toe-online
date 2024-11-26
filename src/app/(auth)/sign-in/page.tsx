import { SignInForm } from "@/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход",
  description:
    "Добро пожаловать обратно! Пожалуйста, войдите в свою учетную запись",
};

export default function SignIn() {
  return <SignInForm />;
}
