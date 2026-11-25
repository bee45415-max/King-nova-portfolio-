import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Gamepad2 } from 'lucide-react';
import { FEATURED_PROJECTS_CONTENT, type ProjectCaseStudy } from '../data/stage2Data';

interface FeaturedProjectsSectionProps {
  onOpenProject: (route: ProjectCaseStudy['route']) => void;
}

export function FeaturedProjectsSection({ onOpenProject }: FeaturedProjectsSectionProps) {
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="portfolio"
      aria-labelledby="featured-projects-heading"
      className="scroll-mt-16 border-t border-neutral-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-6 border-b border-neutral-200 pb-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium tracking-wide text-[#101D3A]">
              {FEATURED_PROJECTS_CONTENT.kicker}
            </p>
            <h2
              id="featured-projects-heading"
              className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-black sm:text-4xl"
            >
              {FEATURED_PROJECTS_CONTENT.heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed text-neutral-600">
              {FEATURED_PROJECTS_CONTENT.intro}
            </p>
          </div>
        </div>

        {/* Project Cards — Balanced Full-Width Showcase Layout */}
        <div className="mt-12 space-y-8">
          {(FEATURED_PROJECTS_CONTENT.projects as readonly ProjectCaseStudy[]).map((project) => {
            const hasImage = Boolean(project.imageSrc);
            const isImageBroken = brokenImages[project.slug];

            return (
              <article
                key={project.slug}
                className="border border-neutral-200 bg-white p-7 transition-colors duration-150 hover:border-[#101D3A] sm:p-9 lg:p-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
                  {/* Left Column: Project Media (for ArkaSeeker) or Summary Anchor (for BO) */}
                  <div className="lg:col-span-5">
                    {hasImage && project.imageSrc ? (
                      <figure>
                        <div className="aspect-square w-full overflow-hidden border border-neutral-200 bg-[#0A0A0A]">
                          {!isImageBroken ? (
                            <img
                              src={project.imageSrc}
                              alt={project.imageAlt ?? project.name}
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                              onError={() =>
                                setBrokenImages((prev) => ({ ...prev, [project.slug]: true }))
                              }
                              className="h-full w-full object-contain transition-transform duration-300 ease-out hover:scale-[1.015]"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center bg-[#F3F4F6] p-8 text-center">
                              <Gamepad2 className="h-8 w-8 text-[#101D3A]" aria-hidden="true" />
                              <p className="mt-3 font-[family-name:var(--font-display)] text-sm font-semibold text-black">
                                {project.name}
                              </p>
                            </div>
                          )}
                        </div>
                        <figcaption className="mt-2.5 flex items-center justify-between text-xs text-neutral-500">
                          <span>In-game challenge preview</span>
                          <span className="font-[family-name:var(--font-mono)] tabular-nums text-[#101D3A]">
                            {project.index}
                          </span>
                        </figcaption>
                      </figure>
                    ) : (
                      <div className="flex flex-col justify-between border border-neutral-200 bg-[#F3F4F6] p-7">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                            <span className="font-[family-name:var(--font-mono)] tabular-nums text-[#101D3A]">
                              {project.index}
                            </span>
                            {project.category && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-neutral-700">{project.category}</span>
                              </>
                            )}
                          </div>
                          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-black">
                            {project.name}
                          </h3>
                          <p className="mt-2 text-sm font-medium text-[#101D3A]">
                            {project.role}
                          </p>
                        </div>

                        <div className="mt-8 border-t border-neutral-200 pt-5">
                          <p className="text-[11px] font-medium tracking-wider text-neutral-500">
                            {project.highlightLabel}
                          </p>
                          <p className="mt-1.5 font-[family-name:var(--font-mono)] text-lg font-semibold tracking-tight tabular-nums text-[#101D3A]">
                            {project.highlightValue}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Project Details, Narrative & Actions */}
                  <div className="flex h-full flex-col justify-between lg:col-span-7">
                    <div>
                      {hasImage && (
                        <>
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5">
                            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500">
                              <span className="font-[family-name:var(--font-mono)] tabular-nums text-[#101D3A]">
                                {project.index}
                              </span>
                              {project.category && (
                                <>
                                  <span aria-hidden="true">·</span>
                                  <span className="text-neutral-700">{project.category}</span>
                                </>
                              )}
                            </div>
                            <span className="text-xs font-medium text-[#101D3A]">
                              {project.role}
                            </span>
                          </div>

                          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-black sm:text-3xl">
                              {project.name}
                            </h3>

                            <div className="shrink-0 border border-neutral-200 bg-[#F3F4F6] px-4 py-3 sm:text-right">
                              <p className="font-[family-name:var(--font-mono)] text-base font-semibold tracking-tight tabular-nums text-[#101D3A] sm:text-lg">
                                {project.highlightValue}
                              </p>
                              <p className="mt-0.5 text-[11px] font-medium tracking-wider text-neutral-600">
                                {project.highlightLabel}
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Structured Narrative Breakdown */}
                      <dl
                        className={`space-y-5 ${
                          hasImage ? 'mt-8 border-t border-neutral-100 pt-6' : ''
                        }`}
                      >
                        {project.sections.map((section) => (
                          <div key={section.label}>
                            <dt className="font-[family-name:var(--font-display)] text-sm font-semibold text-black">
                              {section.label}
                            </dt>
                            <dd className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
                              {section.body}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
                      <a
                        href={project.route}
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenProject(project.route);
                        }}
                        className="inline-flex min-h-[44px] items-center gap-2 bg-[#101D3A] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A]"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </a>

                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-black whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#101D3A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101D3A]"
                        >
                          <span>Visit Project</span>
                          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
