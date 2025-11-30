import { AuthForm } from "@/components/auth-form";
import { protectRoute } from "@/lib/auth";

export default async function RegisterPage() {
  await protectRoute({ redirectIfLoggedIn: true });

  return <AuthForm mode="register" />;
}
