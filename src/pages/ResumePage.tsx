import type { Route } from '@/lib/router';
import { profile, experience, education, skills } from '@/data/content';

interface Props {
  onNavigate: (r: Route) => void;
}

export function ResumePage({ onNavigate }: Props) {
  return (
    <div className="container-wide pt-32 pb-12">
      <section className="animate-fade-up">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
          Resume
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-600 dark:text-ink-300">
          {profile.role} with 10+ years building developer tools, AI infrastructure, and
          distributed systems. Currently at {profile.company}. Previously co-founder and
          engineering leader at two startups.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="font-serif text-lg font-medium text-ink-700 dark:text-ink-200">
          Experience
        </h2>
        <div className="mt-6 space-y-8">
          {experience.map((job) => (
            <div key={job.company} className="group">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-base font-medium text-ink-800 dark:text-ink-100">
                  <a
                    href={job.url}
                    className="link-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company}
                  </a>
                  <span className="text-ink-500 dark:text-ink-400"> &mdash; {job.role}</span>
                </h3>
                <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
                  {job.period}
                </span>
              </div>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-14">
        <h2 className="font-serif text-lg font-medium text-ink-700 dark:text-ink-200">
          Education
        </h2>
        <div className="mt-6 space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <h3 className="font-serif text-base font-medium text-ink-800 dark:text-ink-100">
                {edu.degree}
              </h3>
              <div className="flex items-center gap-3 text-sm text-ink-500 dark:text-ink-400">
                <a href={edu.url} className="link-underline" target="_blank" rel="noopener noreferrer">
                  {edu.school}
                </a>
                <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-14">
        <h2 className="font-serif text-lg font-medium text-ink-700 dark:text-ink-200">
          Skills
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="text-sm font-medium text-ink-600 dark:text-ink-300">
                {skill.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink-200 px-3 py-1 text-xs text-ink-500 dark:border-ink-700 dark:text-ink-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="mt-14">
        <p className="text-sm text-ink-500 dark:text-ink-400">
          References available upon request.{' '}
          <button
            onClick={() => onNavigate('contact')}
            className="link-underline font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
          >
            Get in touch
          </button>
        </p>
      </section>
    </div>
  );
}
