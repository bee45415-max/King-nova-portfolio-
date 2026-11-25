import { ABOUT_CONTENT } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 border-t border-neutral-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Section Header */}
          <div className="lg:col-span-4">
            <p className="text-sm font-medium tracking-wide text-[#101D3A]">
              {ABOUT_CONTENT.kicker}
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-black sm:text-4xl"
            >
              {ABOUT_CONTENT.heading}
            </h2>
          </div>

          {/* Right Column: Introduction Copy & Four Focus Areas */}
          <div className="lg:col-span-8">
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-neutral-700 sm:text-[17px]">
              {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {ABOUT_CONTENT.focusAreas.map((area) => (
                <article
                  key={area.index}
                  className="border border-neutral-200 bg-[#F3F4F6] p-6 transition-colors duration-150 hover:border-[#101D3A]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-black">
                      {area.title}
                    </h3>
                    <span className="font-[family-name:var(--font-mono)] text-xs font-medium tabular-nums text-[#101D3A]">
                      {area.index}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {area.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
