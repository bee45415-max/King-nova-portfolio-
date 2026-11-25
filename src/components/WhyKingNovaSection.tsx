import { WHY_KINGNOVA_CONTENT } from '../data/stage2Data';

export function WhyKingNovaSection() {
  return (
    <section
      id="why-kingnova"
      aria-labelledby="why-kingnova-heading"
      className="scroll-mt-16 border-t border-neutral-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium tracking-wide text-[#101D3A]">
              {WHY_KINGNOVA_CONTENT.kicker}
            </p>
            <h2
              id="why-kingnova-heading"
              className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-black sm:text-4xl"
            >
              {WHY_KINGNOVA_CONTENT.heading}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600">
              {WHY_KINGNOVA_CONTENT.intro}
            </p>
          </div>

          {/* Right Column: Four Advantage Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {WHY_KINGNOVA_CONTENT.items.map((item) => (
                <article
                  key={item.index}
                  className="border border-neutral-200 bg-[#F3F4F6] p-6 transition-colors duration-150 hover:border-[#101D3A]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <span className="font-[family-name:var(--font-mono)] text-xs font-medium tabular-nums text-[#101D3A]">
                      {item.index}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {item.description}
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
