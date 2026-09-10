import { essays, selectedWriting } from '@/data/content';
import { SEO } from '@/components/SEO';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function BlogPage() {
  return (
    <div className="container-wide pt-32 pb-12">
      <SEO title="Blogs — Buddhadeb Chhetri" canonical="/blogs" />
      <section className="animate-fade-up">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
          Blogs
        </h1>
      </section>

      {/* Essays */}
      <section className="mt-12">
        <h2 className="font-serif text-lg font-medium text-ink-700 dark:text-ink-200">
          Latest Blogs
        </h2>
        <div className="mt-6 divide-y divide-ink-200/60 dark:divide-ink-800/60">
          {essays.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group block py-6 transition-colors hover:bg-ink-100/40 dark:hover:bg-ink-900/40"
            >
              <time className="text-xs text-ink-400 dark:text-ink-500">
                {formatDate(post.date)}
              </time>
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

      {/* Selected writing elsewhere */}
      <section className="mt-16">
        <h2 className="font-serif text-lg font-medium text-ink-700 dark:text-ink-200">
          Other Blogs
        </h2>
        <div className="mt-6 divide-y divide-ink-200/60 dark:divide-ink-800/60">
          {selectedWriting.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <div className="flex shrink-0 items-center gap-3 text-xs text-ink-400 dark:text-ink-500 sm:w-48">
                <time>{formatDate(post.date)}</time>
                <span>&middot;</span>
                <span>{post.source}</span>
              </div>
              <h3 className="font-serif text-base font-medium text-ink-700 transition-colors group-hover:text-ink-950 dark:text-ink-200 dark:group-hover:text-ink-50">
                {post.title}
              </h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
