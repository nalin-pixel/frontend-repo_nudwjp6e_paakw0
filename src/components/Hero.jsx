import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Open to opportunities
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Full‑stack Developer crafting clean, modern experiences
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              I build scalable APIs and delightful front‑ends. Focused on performance,
              accessibility, and developer experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white shadow hover:bg-black transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-sky-500/10 blur-2xl pointer-events-none" />
            <div className="relative h-full w-full rounded-2xl ring-1 ring-gray-200/60 bg-white/40 backdrop-blur-sm">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
