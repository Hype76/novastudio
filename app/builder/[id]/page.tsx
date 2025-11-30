import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { protectRoute } from "@/lib/auth";
import { ChevronLeft, Save } from "lucide-react";
import Link from "next/link";

export default async function BuilderPage({ params }: { params: { id: string } }) {
  const session = await protectRoute();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b bg-background">
        <div className="flex h-16 items-center px-4">
          <Link href="/projects">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </Link>
          <div className="ml-4 h-6 w-px bg-border" />
          <div className="ml-4 font-semibold">Project Builder: {params.id}</div>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm">
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </div>
        </div>
      </div>
      
      <main className="flex-1 p-8">
        <div className="rounded-lg border border-dashed p-12 text-center text-muted-foreground">
          <h2 className="text-2xl font-bold mb-2">Builder Canvas</h2>
          <p>Interactive builder components for Project ID: {params.id} would go here.</p>
        </div>
      </main>
    </div>
  );
}