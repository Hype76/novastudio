import { redirect } from "next/navigation";
import { getUserSession } from "@/lib/auth";

export default async function HomePage() {
  const session = await getUserSession();

  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/auth/login");
  }
}