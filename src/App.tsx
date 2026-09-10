import { useHashRoute, type Route } from '@/lib/router';
import { useTheme } from '@/lib/theme';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { WritingPage } from '@/pages/WritingPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const [route, navigate] = useHashRoute();
  const { dark, toggle } = useTheme();

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'projects':
        return <ProjectsPage />;
      case 'writing':
        return <WritingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-950">
      <Nav current={route} onNavigate={navigate} dark={dark} onToggleTheme={toggle} />
      <main key={route} className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
