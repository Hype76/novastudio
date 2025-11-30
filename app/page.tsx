import { protectRoute } from "@/lib/auth";

export default async function HomePage() {
  await protectRoute();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Nova Studio</h1>
    </div>
  );
}
