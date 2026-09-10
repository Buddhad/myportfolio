import type { Route } from '@/lib/router';
import { profile, history, education, skills } from '@/data/content';

interface Props {
  onNavigate: (r: Route) => void;
}

import { SEO } from '@/components/SEO';

export function AboutPage({ onNavigate }: Props) {
  return (
    <div className="container-wide pt-32 pb-12">
      <SEO title="About — Buddhadeb Chhetri" canonical="/about" />
      <section className="animate-fade-up">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
          About
        </h1>
        <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
          <p>{profile.bio}</p>
          <p>
            Alongside game development, I’m also interested in web development, backend systems, databases, and deployment technologies. I enjoy learning how different technologies work together—from building a website and connecting it to a database to designing scalable applications and services.

            I’m a self-driven developer who likes experimenting, solving technical problems, and continuously learning new tools and technologies. My goal is to create projects that are not only technically interesting but also enjoyable and meaningful for the people who use or play them.

            Currently, I’m focused on building games, experimenting with new technologies, and turning my ideas into real-world projects.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="link-underline mt-6 inline-block text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
        >
          Get in touch
        </button>
      </section>

      {/* Timeline */}
      <section className="mt-20">
        <h2 className="font-serif text-xl font-medium text-ink-800 dark:text-ink-100">
          Some history
        </h2>
        <div className="mt-8 space-y-0">
          {history.map((item, i) => (
            <div
              key={item.year}
              className="group relative flex gap-6 border-l border-ink-200 pb-10 pl-6 last:border-transparent dark:border-ink-800"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ink-300 transition-colors group-hover:bg-accent-400 dark:bg-ink-700 dark:group-hover:bg-accent-500" />
              <div className="w-16 shrink-0 pt-0.5 font-mono text-sm text-ink-400 dark:text-ink-500">
                {item.year}
              </div>
              <p className="max-w-prose text-base leading-relaxed text-ink-600 dark:text-ink-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-20">
        <h2 className="font-serif text-xl font-medium text-ink-800 dark:text-ink-100">
          Education
        </h2>
        <div className="mt-8 space-y-8">
          {education.map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <h3 className="text-lg font-medium text-ink-900 dark:text-ink-50">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.school}
                  </a>
                ) : (
                  item.school
                )}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
                <span className="font-medium text-ink-700 dark:text-ink-300">{item.degree}</span>
                {item.year && (
                  <>
                    <span>&middot;</span>
                    <span>{item.year}</span>
                  </>
                )}
              </div>
              {item.description && (
                <p 
                  className="mt-3 max-w-prose text-base leading-relaxed text-ink-600 dark:text-ink-300 [&_strong]:font-semibold [&_strong]:text-orange-500 dark:[&_strong]:text-orange-400"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20 mb-20">
        <h2 className="font-serif text-xl font-medium text-ink-800 dark:text-ink-100">
          Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="font-medium text-ink-900 dark:text-ink-50">{category.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-ink-200 bg-ink-100/50 px-3 py-1 text-sm text-ink-600 dark:border-ink-800 dark:bg-ink-900/50 dark:text-ink-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
