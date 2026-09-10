import type { Route } from '@/lib/router';
import { profile, latestWriting } from '@/data/content';
import { ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (r: Route) => void;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function HomePage({ onNavigate }: Props) {
  return (
    <div className="container-wide pt-32 pb-12">
      {/* Hero */}
      <section className="stagger">
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-600 dark:text-ink-300">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate('about')}
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-ink-50 transition-all hover:bg-ink-700 dark:bg-ink-50 dark:text-ink-900 dark:hover:bg-ink-200"
          >
            About Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      {/* Latest writing */}
      <section className="mt-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-xl font-medium text-ink-800 dark:text-ink-100">
            Latest writing
          </h2>
          <button
            onClick={() => onNavigate('writing')}
            className="link-underline text-sm text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
          >
            View Projects
          </button>
        </div>
        <div className="mt-6 divide-y divide-ink-200/60 dark:divide-ink-800/60">
          {latestWriting.map((post) => (
            <a
              key={post.title}
              href={post.url}
              className="group block py-6 transition-colors hover:bg-ink-100/40 dark:hover:bg-ink-900/40"
            >
              <div className="flex items-center gap-3 text-xs text-ink-400 dark:text-ink-500">
                <time>{formatDate(post.date)}</time>
                <span>&middot;</span>
                <span>{post.source}</span>
              </div>
              <h3 className="mt-2 font-serif text-lg font-medium text-ink-800 transition-colors group-hover:text-ink-950 dark:text-ink-100 dark:group-hover:text-ink-50">
                {post.title}
              </h3>
              <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
