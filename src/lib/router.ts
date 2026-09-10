import { useEffect, useState, useCallback } from 'react';

const ROUTES = ['home', 'about', 'projects', 'blogs', 'contact'] as const;
export type Route = typeof ROUTES[number];

const getRouteFromPath = (): Route => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/^\//, '');
  return ROUTES.includes(path as Route) ? (path as Route) : 'home';
};

export function useRoute(): [Route, (r: Route) => void] {
  const [route, setRoute] = useState<Route>(getRouteFromPath);

  useEffect(() => {
    const onPopState = () => {
      setRoute(getRouteFromPath());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((r: Route) => {
    const url = r === 'home' ? '/' : `/${r}`;
    window.history.pushState({}, '', url);
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return [route, navigate];
}
