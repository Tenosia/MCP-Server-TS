import type { Category } from "@/types/category";
import type { Project } from "@/types/project";
import ProjectDetail from "@/templates/tailspark/landing/components/project";

interface SinglePageProps {
  project: Project;
  more_projects: Project[];
  category?: Category;
}

export default function SinglePage({
  project,
  more_projects,
  category,
}: SinglePageProps) {
  return (
    <ProjectDetail
      category={category}
      project={project}
      more_projects={more_projects}
    />
  );
}
