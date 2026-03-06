import type { Project } from "@/types/project";

interface PreviewProps {
  project: Project;
}

export default function Preview({ project }: PreviewProps) {
  const src = project.img_url ?? project.avatar_url ?? "";
  return (
    <img
      src={src}
      alt={project.title ?? "Project"}
      className="rounded-md w-full h-full object-cover"
    />
  );
}
