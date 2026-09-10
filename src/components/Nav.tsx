import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Route } from '@/lib/router';
import { profile } from '@/data/content';
import { ThemeToggle } from '@/lib/theme';

interface Props {
  current: Route;
  onNavigate: (r: Route) => void;
  dark: boolean;
  onToggleTheme: () => void;
}

const navItems: { label: string; route: Route }[] = [
  { label: 'About', route: 'about' },
  { label: 'Projects', route: 'projects' },
  { label: 'Blogs', route: 'blogs' },
  { label: 'Contact', route: 'contact' },
];

export function Nav({ current, onNavigate, dark, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (r: Route) => {
    onNavigate(r);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? 'border-b border-ink-200/60 bg-ink-50/80 backdrop-blur-md dark:border-ink-800/60 dark:bg-ink-950/80'
        : 'border-b border-transparent'
        }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between">
        <button
          onClick={() => go('home')}
          className="font-serif text-lg font-semibold tracking-tight text-ink-900 transition-opacity hover:opacity-70 dark:text-ink-50"
        >
          {profile.initials}
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => go(item.route)}
              className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${current === item.route
                ? 'text-ink-900 dark:text-ink-50'
                : 'text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100'
                }`}
            >
              {item.label}
              {current === item.route && (
                <span className="absolute inset-x-3 -bottom-px h-px bg-accent-400 dark:bg-accent-500" />
              )}
            </button>
          ))}
          <div className="mx-2 h-5 w-px bg-ink-200 dark:bg-ink-800" />
          <ThemeToggle dark={dark} onToggleTheme={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle dark={dark} onToggleTheme={onToggleTheme} />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-b border-ink-200 bg-ink-50/95 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/95 sm:hidden">
          <div className="container-wide flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => go(item.route)}
                className={`py-3 text-left text-base font-medium transition-colors ${current === item.route
                  ? 'text-ink-900 dark:text-ink-50'
                  : 'text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
