import { GROWTH_FRAMEWORK_CONTENT } from '../data/stage2Data';

export function GrowthFrameworkSection() {
  return (
    <section
      id="framework"
      aria-labelledby="growth-framework-heading"
      className="scroll-mt-16 border-t border-neutral-200 bg-[#F3F4F6] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium tracking-wide text-[#101D3A]">
              {GROWTH_FRAMEWORK_CONTENT.kicker}
            </p>
            <h2
              id="growth-framework-heading"
              className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-black sm:text-4xl"
            >
              {GROWTH_FRAMEWORK_CONTENT.heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed text-neutral-600">
              {GROWTH_FRAMEWORK_CONTENT.intro}
            </p>
          </div>
        </div>

        {/* 5 Steps: Horizontal on Desktop, Vertical on Mobile */}
        <ol className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5">
          {GROWTH_FRAMEWORK_CONTENT.steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col justify-between border border-neutral-200 bg-white p-6 transition-colors duration-150 hover:border-[#101D3A]"
            >
              <div>
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold tabular-nums text-[#101D3A]">
                  {step.number}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
