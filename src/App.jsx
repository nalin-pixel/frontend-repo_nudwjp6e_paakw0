import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alex Dev — Full‑stack Engineer</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-gray-900" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-gray-900" href="mailto:hello@example.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
