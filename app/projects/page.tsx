import { protectRoute, getUserSession } from "@/lib/auth";
import { getProjects } from "@/lib/projects";
import ProjectsPageClient from "./projects-client";

export default async function ProjectsPage() {
  await protectRoute();

  const session = await getUserSession();
  const projects = await getProjects();

  return (
    <ProjectsPageClient
      session={session}
      projects={projects}
    />
  );
}
