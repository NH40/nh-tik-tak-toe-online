import { SignUpForm } from "@/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Создайте свою учетную запись, чтобы начать",
};

export default function SignUp() {
  return <SignUpForm />;
}
