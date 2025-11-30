import { protectRoute } from "@/lib/auth";

export default async function DashboardPage() {
  await protectRoute();

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </div>
  );
}
