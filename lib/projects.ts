import { projects as projectData } from "@/lib/site-data";

export type ProjectView = {
  id: string;
  slug: string;
  order: number;
  index: string;
  name: string;
  category: string;
  phrase: string;
  summary: string;
  challenge: string;
  solution: string;
  modules: string[];
  color: string;
  image: string | null;
  website: string | null;
  websiteLabel: string | null;
  published: boolean;
  featured: boolean;
};

function formatProjects(): ProjectView[] {
  return projectData.map((project, position) => ({
    id: project.slug,
    slug: project.slug,
    order: position + 1,
    index: String(position + 1).padStart(2, "0"),
    name: project.name,
    category: project.category,
    phrase: project.phrase,
    summary: project.summary,
    challenge: project.challenge,
    solution: project.solution,
    modules: project.modules,
    color: project.color,
    image: project.image,
    website: project.website,
    websiteLabel: project.websiteLabel,
    published: true,
    featured: project.featured ?? position < 3,
  }));
}

export async function getProjects() {
  return formatProjects();
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}
