// lib/auth.ts

import { supabase } from "@/lib/supabase-browser";
import { redirect } from "next/navigation";

// Protect routes that require login
export async function protectRoute() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return user;
}

// Redirect user away if they're already logged in
export async function redirectIfAuthenticated() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }
}

// Return user session to client components
export async function getUserSession() {
  const session = await supabase.auth.getSession();
  return session.data.session;
}
