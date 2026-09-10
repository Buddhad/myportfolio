import { useEffect, useState } from 'react';

export type Route = 'home' | 'about' | 'writing' | 'contact';

const routeMap: Record<string, Route> = {
  '': 'home',
  '#': 'home',
  '#/': 'home',
  '#about': 'about',
  '#writing': 'writing',
  '#contact': 'contact',
};

export function useHashRoute(): [Route, (r: Route) => void] {
  const [route, setRoute] = useState<Route>(() => {
    if (typeof window === 'undefined') return 'home';
    return routeMap[window.location.hash] ?? 'home';
  });

  useEffect(() => {
    const onHashChange = () => {
      setRoute(routeMap[window.location.hash] ?? 'home');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (r: Route) => {
    const hash = r === 'home' ? '#/' : `#${r}`;
    window.location.hash = hash;
  };

  return [route, navigate];
}
