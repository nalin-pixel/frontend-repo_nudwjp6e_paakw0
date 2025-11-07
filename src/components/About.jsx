function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">About</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I’m a full‑stack engineer with a product mindset. I enjoy designing system boundaries,
          building resilient APIs, and crafting accessible interfaces. I prioritize clean
          abstractions, strong typing, and thoughtful collaboration.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <li className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">Frontend: React, TypeScript, Tailwind, Vite</li>
          <li className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">Backend: FastAPI, Node, PostgreSQL, MongoDB</li>
          <li className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">Infra: Docker, CI/CD, Cloud Run, Vercel</li>
          <li className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">Testing: Pytest, Vitest, Playwright</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
