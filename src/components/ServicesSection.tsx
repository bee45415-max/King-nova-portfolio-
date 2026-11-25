import { Fragment } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_CONTENT } from '../data/portfolioData';

interface ServicesSectionProps {
  onConnectWithService: (serviceTitle: string) => void;
}

export function ServicesSection({ onConnectWithService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-16 border-t border-neutral-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-6 border-b border-neutral-200 pb-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium tracking-wide text-[#101D3A]">
              {SERVICES_CONTENT.kicker}
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-black sm:text-4xl"
            >
              {SERVICES_CONTENT.heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed text-neutral-600">
              {SERVICES_CONTENT.intro}
            </p>
          </div>
        </div>

        {/* Five Service Areas — Clean Editorial Rows */}
        <div className="divide-y divide-neutral-200">
          {SERVICES_CONTENT.items.map((service) => (
            <article
              key={service.index}
              className="group grid grid-cols-1 gap-6 py-9 transition-colors duration-150 hover:bg-[#F3F4F6]/60 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-4"
            >
              {/* Index & Service Title */}
              <div className="flex items-baseline gap-5 lg:col-span-5">
                <span className="font-[family-name:var(--font-mono)] text-xs font-medium tabular-nums text-[#101D3A]">
                  {service.index}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-black sm:text-2xl">
                  {service.title}
                </h3>
              </div>

              {/* Description & Unboxed Deliverables */}
              <div className="lg:col-span-5">
                <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-neutral-500">
                  {service.deliverables.map((item, idx) => (
                    <Fragment key={item}>
                      {idx > 0 && <span aria-hidden="true">·</span>}
                      <span>{item}</span>
                    </Fragment>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="flex lg:col-span-2 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onConnectWithService(service.title)}
                  className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#101D3A] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101D3A] cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
