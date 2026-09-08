import type { Route } from '@/lib/router';
import { profile, history } from '@/data/content';

interface Props {
  onNavigate: (r: Route) => void;
}

export function AboutPage({ onNavigate }: Props) {
  return (
    <div className="container-wide pt-32 pb-12">
      <section className="animate-fade-up">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
          About
        </h1>
        <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
          <p>{profile.bio}</p>
          <p>
            In my spare time, I mentor early-stage founders, contribute to open-source
            projects, and write about developer tooling and AI infrastructure. If you think
            I can be helpful to you or your team, feel free to get in touch.
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
    </div>
  );
}
