import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import type { Project } from "@/types/project";
import Stars from "../stars";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const href =
    project.target === "_blank"
      ? project.url ?? "#"
      : `/server/${project.name ?? ""}`;

  return (
    <Link href={href} target={project.target ?? "_self"}>
      <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-[#7e7e7e] bg-white p-8 text-left">
        <div className="mb-4 flex flex-row">
          {project.avatar_url && (
            <LazyLoadImage
              src={project.avatar_url}
              placeholderSrc={`/logo.png`}
              alt={project.title}
              className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
            />
          )}
          <div className="flex flex-col">
            <p className="text-base font-semibold">{project.title}</p>
            <p className="text-sm text-[#636262]">{project.author_name}</p>
          </div>
        </div>
        <p className="mb-4 text-sm text-[#636262] line-clamp-3">
          {project.description}
        </p>

        <div className="flex items-center">
          <Stars />
          <div className="flex-1"></div>

          <p className="text-slate-500 text-sm">
            {moment(project.created_at).fromNow()}
          </p>
        </div>
      </div>
    </Link>
  );
};
