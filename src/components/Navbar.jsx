import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/70">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-gray-900 text-xl">Alex Dev</a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="/resume.pdf" className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-black transition">Resume</a>
        </nav>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-700 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-gray-900">Projects</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-gray-900">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-gray-900">Contact</a>
            <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-black">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
