import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import type { Category } from "@/types/category";
import type { Project } from "@/types/project";

interface ProjectCrumbProps {
  category?: Category;
  project: Project;
}

export default function ProjectCrumb({
  category,
  project,
}: ProjectCrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div>
            <a className="text-gray-400 hover:text-gray-500" href="/">
              <FiHome />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <MdKeyboardArrowRight />
            <a
              className="ml-2 text-md font-medium text-gray-500 hover:text-gray-700"
              aria-current="page"
              href={"/categories"}
            >
              Categories
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <MdKeyboardArrowRight />
            <a
              className="ml-2 text-md font-medium text-gray-500 hover:text-gray-700"
              aria-current="page"
              href={`/category/${category?.name}`}
            >
              {category?.title}
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <MdKeyboardArrowRight />
            <a
              className="ml-2 text-md font-medium text-primary"
              aria-current="page"
              // href={renameShortUrl(gpts.short_url, gpts.uuid)}
            >
              {project.name ?? project.title}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};
