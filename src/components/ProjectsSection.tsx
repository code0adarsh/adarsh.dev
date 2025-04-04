import React, { useState, useEffect, useRef, useMemo } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface GitHubRepo {
  private: boolean;
  stargazers_count: number;
  name: string;
  description: string;
  language: string | null;
  html_url: string;
  homepage: string | null;
}

// Fallback image if no keyword matches.
const defaultImage =
  "https://images.unsplash.com/photo-1581091012184-7b4e6d6f1d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

// Map keywords to Unsplash image URLs.
const imageMapping: { [key: string]: string } = {
  "aira": "https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop",
  "prepify": "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop",
  "teaching": "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=2080&auto=format&fit=crop",
  "cryptocurrency": "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop",
  // Add more mappings as needed.
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState<ProjectProps[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    fetch("https://api.github.com/users/code0adarsh/repos")
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        // Filter public repos and sort by stargazers_count (highest first)
        const publicRepos = data.filter((repo) => !repo.private);
        publicRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        const projects: ProjectProps[] = publicRepos.map((repo) => {
          const language = repo.language ? repo.language.toLowerCase() : "";
          // Determine image based on repo name keywords.
          const repoName = repo.name.toLowerCase();
          let image = defaultImage;
          Object.keys(imageMapping).forEach((keyword) => {
            if (repoName.includes(keyword)) {
              image = imageMapping[keyword];
            }
          });
          return {
            title: repo.name,
            description: repo.description || "No description provided.",
            tags: language ? [language] : [],
            github: repo.html_url,
            demo: repo.homepage || "",
            image,
            featured: false,
          };
        });
        setRepos(projects);
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  // Build filter options dynamically from repos.
  const languageSet = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((project) => {
      project.tags.forEach((tag) => tag && set.add(tag));
    });
    return Array.from(set);
  }, [repos]);

  const categories = useMemo(() => ["all", ...languageSet], [languageSet]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return repos;
    return repos.filter((project) => project.tags.includes(filter));
  }, [filter, repos]);

  // For the "all" filter, limit to top 6; for language-specific filters, show all.
  const displayedProjects = filter === "all" ? repos.slice(0, 6) : filteredProjects;

  return (
    <section id="projects" className="section-padding bg-navy text-slate overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title text-lightSlate text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Things I've Built
        </motion.h2>

        {/* Filter Toggle */}
        <motion.div
          className="flex justify-center mb-8 -mx-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex flex-nowrap justify-start md:justify-center min-w-max md:min-w-0 md:flex-wrap gap-2">
              <ToggleGroup
                type="single"
                value={filter}
                onValueChange={(value) => value && setFilter(value)}
                className="flex flex-nowrap md:flex-wrap"
              >
                {categories.map((category) => (
                  <ToggleGroupItem
                    key={category}
                    value={category}
                    className={`px-4 py-2 rounded-full font-mono text-sm transition-all whitespace-nowrap ${
                      filter === category
                        ? "bg-teal/20 text-teal border border-teal/20"
                        : "bg-transparent text-slate hover:text-teal border border-transparent"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <ProjectCard {...project} bentoStyle={true} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/code0adarsh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block hover:scale-105 transition-transform"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
