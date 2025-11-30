import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { protectRoute } from "@/lib/auth";

export default async function ProjectsPage() {
  await protectRoute();

  // In a real app, fetch projects from API or DB here
  const projects = [
    { id: "1", name: "Alpha Protocol", status: "active", date: "2024-03-10" },
    { id: "2", name: "Beta Build", status: "draft", date: "2024-03-12" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage your ongoing and archived projects.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>Created on {project.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 uppercase">
                  {project.status}
                </span>
                <Link href={`/builder/${project.id}`}>
                  <Button variant="outline" size="sm">
                    Open Builder
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* Empty State Placeholder if needed */}
        {projects.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg text-muted-foreground">
            <p>No projects found. Create one to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}