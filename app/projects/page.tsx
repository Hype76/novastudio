"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { protectRoute } from "@/lib/auth";
import { getProjects } from "@/lib/projects";

// Wrapper for client interactivity
export default function ProjectsPageWrapper() {
  return <ProjectsPageClient />;
}

async function getData() {
  await protectRoute();
  return await getProjects();
}

function ProjectsPageClient() {
  const router = useRouter();

  const [projects, setProjects] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      getData().then((res) => {
        setProjects(res);
        setLoaded(true);
      });
    }
  }, [loaded]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage your ongoing and archived projects.
          </p>
        </div>

        {/* No Drawer. Clean + deploy safe. */}
        <Link href="/projects/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>
                Created on{" "}
                {new Date(project.created_at).toLocaleDateString()}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase bg-primary text-primary-foreground">
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

        {loaded && projects.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg text-muted-foreground">
            <p>No projects found. Create one to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
