import Faq from "../components/faq";
import Hero from "../components/hero";
import type { Page } from "@/types/landing";
import type { Project } from "@/types/project";
import Projects from "../components/projects";
import Search from "../components/search";

interface LandingPageProps {
  page: Page;
  projects: Project[];
  projectsCount: number;
}

export default function LandingPage({
  page,
  projects,
  projectsCount,
}: LandingPageProps) {
  return (
    <div>
      {page.hero && <Hero hero={page.hero} count={projectsCount} />}
      <Search />
      <Projects projects={projects} />
      {page.faq && <Faq section={page.faq} />}
    </div>
  );
}
