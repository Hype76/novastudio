// lib/auth.ts
"use server";

import { cookies } from "next/headers";

// Dummy protectRoute for now until we hook Supabase Auth
// This avoids Netlify crashes and keeps the interface identical.
export async function protectRoute() {
  // Later we add real authentication.
  // For now, do nothing.
  return true;
}
