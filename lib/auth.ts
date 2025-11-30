import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export async function getUserSession() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export async function protectRoute() {
  const session = await getUserSession();
  if (!session) {
    redirect("/auth/login");
  }
  return session;
}

export async function redirectIfAuthenticated() {
  const session = await getUserSession();
  if (session) {
    redirect("/dashboard");
  }
}