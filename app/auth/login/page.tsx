import { AuthForm } from "@/components/auth-form";
import { protectRoute } from "@/lib/auth";

export default async function LoginPage() {
  // If logged in already, redirect to dashboard
  await protectRoute({ redirectIfLoggedIn: true });

  return <AuthForm mode="login" />;
}
