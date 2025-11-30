import { AuthForm } from "@/components/auth-form";
import { redirectIfAuthenticated } from "@/lib/auth";

export default async function RegisterPage() {
  await redirectIfAuthenticated();

  return <AuthForm mode="register" />;
}
