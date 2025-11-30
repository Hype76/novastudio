import { AuthForm } from "@/components/auth-form";
import { redirectIfAuthenticated } from "@/lib/auth";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return <AuthForm mode="login" />;
}
