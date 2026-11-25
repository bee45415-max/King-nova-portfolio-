import { useState } from 'react';
import { ArrowRight, User } from 'lucide-react';
import { HERO_CONTENT, PROFILE_IMAGE } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export function HeroSection({ onExploreWork, onConnect }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-16 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Hierarchy & CTAs */}
          <div className="lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-[#101D3A]">
              {HERO_CONTENT.role}
            </p>

            <h1
              id="hero-heading"
              className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl"
            >
              {HERO_CONTENT.brand}
            </h1>

            <p className="mt-5 max-w-xl text-balance font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-black sm:text-2xl">
              {HERO_CONTENT.tagline}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {HERO_CONTENT.statement}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex min-h-[44px] items-center justify-center gap-2.5 bg-[#101D3A] px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onConnect}
                className="inline-flex min-h-[44px] items-center justify-center border border-black bg-white px-6 py-3 text-sm font-medium text-black whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#F3F4F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
              >
                {HERO_CONTENT.secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Column: Personal Profile Image */}
          <div className="lg:col-span-5">
            <figure className="mx-auto max-w-sm lg:ml-auto lg:max-w-[440px]">
              <div className="relative aspect-square w-full overflow-hidden border border-neutral-200 bg-[#F3F4F6]">
                {!imageError ? (
                  <img
                    src={PROFILE_IMAGE.src}
                    alt={PROFILE_IMAGE.alt}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-center transition-transform duration-300 ease-out hover:scale-[1.015]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-[#F3F4F6] p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center border border-neutral-300 bg-white text-[#101D3A]">
                      <User className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <p className="mt-4 font-[family-name:var(--font-display)] text-sm font-semibold text-black">
                      KingNova
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      Profile image unavailable
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                <span>{PROFILE_IMAGE.caption}</span>
                <span className="font-[family-name:var(--font-mono)] tabular-nums text-[#101D3A]">
                  01
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
