import { getUserSession } from "@/lib/auth";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserSession();

  const userEmail = session?.user?.email ?? "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar userEmail={userEmail} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
