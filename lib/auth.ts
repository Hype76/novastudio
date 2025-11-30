import { redirect } from "next/navigation";
import { createClientServer } from "./supabase-server";

// Get the current user session
export async function getUserSession() {
  const supabase = createClientServer();
  const { data } = await supabase.auth.getSession();
  return data.session;
}

// Redirect user to login if not authenticated
export async function protectRoute() {
  const session = await getUserSession();
  if (!session) redirect("/auth/login");
  return session;
}

// Redirect to dashboard if the user is already logged in
export async function redirectIfAuthenticated() {
  const session = await getUserSession();
  if (session) redirect("/dashboard");
}
