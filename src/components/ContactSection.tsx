import { ArrowUpRight } from 'lucide-react';
import { CONTACT_CONTENT } from '../data/stage2Data';

interface ContactSectionProps {
  onWorkTogether: () => void;
}

export function ContactSection({ onWorkTogether }: ContactSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 border-t border-neutral-200 bg-[#F3F4F6] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left Column: Heading, Copy & Prominent CTA */}
          <div className="lg:col-span-6">
            <p className="text-sm font-medium tracking-wide text-[#101D3A]">
              {CONTACT_CONTENT.kicker}
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              {CONTACT_CONTENT.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              {CONTACT_CONTENT.description}
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onWorkTogether}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 bg-[#101D3A] px-7 py-3.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
              >
                <span>{CONTACT_CONTENT.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Clickable Direct Contact Channels */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-neutral-200 border border-neutral-200 bg-white">
              {CONTACT_CONTENT.channels.map((channel, idx) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 p-6 transition-colors duration-150 hover:bg-[#F3F4F6]/70 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#101D3A] sm:p-7"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-xs font-medium tabular-nums text-[#101D3A]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-medium tracking-wide text-neutral-500">
                        {channel.platform}
                      </span>
                    </div>
                    <p className="mt-2 truncate font-[family-name:var(--font-display)] text-lg font-semibold text-black sm:text-xl">
                      {channel.handle}
                    </p>
                  </div>

                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-white text-[#101D3A] transition-colors duration-150 group-hover:border-[#101D3A] group-hover:bg-[#101D3A] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
