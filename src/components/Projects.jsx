function Projects() {
  const list = [
    {
      title: 'Realtime Chat Platform',
      desc: 'End-to-end encrypted messaging with websockets, OAuth, and file sharing.',
      tags: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
      link: '#',
    },
    {
      title: 'E‑commerce Starter',
      desc: 'Headless shop with payment integration, product search, and dashboards.',
      tags: ['Next.js', 'Stripe', 'Postgres'],
      link: '#',
    },
    {
      title: 'Analytics Toolkit',
      desc: 'Self‑hosted metrics, ingestion API, and embeddable charts.',
      tags: ['Python', 'FastAPI', 'ClickHouse'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
            <p className="mt-2 text-gray-600">A few things I’ve built recently.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Work with me</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">{p.title}</h3>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">{p.tags[0]}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-700 ring-1 ring-gray-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
