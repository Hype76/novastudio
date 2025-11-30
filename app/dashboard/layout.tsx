import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { protectRoute } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await protectRoute();

  return (
    <div className="min-h-screen bg-background">
      <Navbar userEmail={session.user.email} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}