import type { Route } from '@/lib/router';
import { profile } from '@/data/content';

interface Props {
  onNavigate: (r: Route) => void;
}

export function Footer({ onNavigate }: Props) {
  return (
    <footer className="mt-24 border-t border-ink-200/60 py-10 dark:border-ink-800/60">
      <div className="container-wide flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-serif text-base font-medium text-ink-800 dark:text-ink-100">
            {profile.name}
          </p>
          <p className="text-sm text-ink-400 dark:text-ink-500">
            {profile.role} at {profile.company}
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          {profile.social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={() => onNavigate('contact')}
            className="link-underline text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className="container-wide mt-6 text-center text-xs text-ink-400 dark:text-ink-600 sm:text-left">
        &copy; {new Date().getFullYear()} {profile.name}.
      </div>
    </footer>
  );
}
