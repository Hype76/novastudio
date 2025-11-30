"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import { LogOut, Rocket } from "lucide-react";

export function Navbar({ userEmail }: { userEmail?: string }) {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl mr-6">
          <Rocket className="h-6 w-6 text-primary" />
          <span>Nova Studio</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          {userEmail ? (
            <>
              <span className="text-sm text-muted-foreground hidden md:inline-block">
                {userEmail}
              </span>
              <Button variant="ghost" size="icon" onClick={handleSignOut} title="Sign Out">
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}