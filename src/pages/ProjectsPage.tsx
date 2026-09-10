import { projects } from '@/data/content';
import { SEO } from '@/components/SEO';

export function ProjectsPage() {
  return (
    <div className="container-wide pt-32 pb-12">
      <SEO title="Projects — Buddhadeb Chhetri" canonical="/projects" />
      <section className="animate-fade-up">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
          A selection of games and digital experiences I've built.
        </p>
      </section>

      <section className="mt-16 grid gap-10 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div key={i} className="group relative flex flex-col items-start justify-between rounded-2xl border border-ink-200/60 bg-ink-50 p-4 transition-colors hover:bg-ink-100/50 dark:border-ink-800/60 dark:bg-ink-950/50 dark:hover:bg-ink-900/50 stagger">
            <div className="w-full aspect-video overflow-hidden rounded-xl bg-ink-200 dark:bg-ink-800">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <h3 className="font-serif text-xl font-medium text-ink-900 dark:text-ink-50">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0"></span>
                  {project.title}
                </a>
              </h3>
              <p className="text-base text-ink-600 dark:text-ink-300">
                {project.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-ink-200/50 px-3 py-1 text-xs font-medium text-ink-700 dark:bg-ink-800/50 dark:text-ink-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
