import { AuthForm } from "@/components/auth-form";
import { redirectIfAuthenticated } from "@/lib/auth";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <AuthForm mode="login" />
    </div>
  );
}