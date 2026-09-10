import { useEffect, useState } from 'react';

const ROUTES = ['home', 'about', 'projects', 'blogs', 'contact'] as const;
export type Route = typeof ROUTES[number];

const getRouteFromHash = (): Route => {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace(/^#\/?/, '');
  return ROUTES.includes(hash as Route) ? (hash as Route) : 'home';
};

export function useHashRoute(): [Route, (r: Route) => void] {
  const [route, setRoute] = useState<Route>(getRouteFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (r: Route) => {
    window.location.hash = r === 'home' ? '#/' : `#${r}`;
  };

  return [route, navigate];
}
