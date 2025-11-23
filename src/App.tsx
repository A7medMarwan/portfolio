import { useScrollTracking } from './hooks/useScrollTracking';
import { getNavigationSections } from './utils/navigation';
import { APP_CONFIG } from './constants';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

/**
 * Main application component
 */
function App() {
  const sections = getNavigationSections();
  const activeSection = useScrollTracking(sections);

  return (
    <div className="app">
      <Navigation activeSection={activeSection} sections={sections} />

      <main role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} {APP_CONFIG.author} Portfolio. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
