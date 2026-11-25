import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Gamepad2 } from 'lucide-react';
import { FEATURED_PROJECTS_CONTENT, type ProjectCaseStudy } from '../data/stage2Data';

interface ProjectCaseStudyPageProps {
  project: ProjectCaseStudy;
  onBackToPortfolio: () => void;
  onOpenProject: (route: ProjectCaseStudy['route']) => void;
  onConnect: (topic: string) => void;
}

export function ProjectCaseStudyPage({
  project,
  onBackToPortfolio,
  onOpenProject,
  onConnect,
}: ProjectCaseStudyPageProps) {
  const [imageError, setImageError] = useState(false);

  const currentIndex = FEATURED_PROJECTS_CONTENT.projects.findIndex(
    (item) => item.slug === project.slug
  );
  const nextProject =
    FEATURED_PROJECTS_CONTENT.projects[
      (currentIndex + 1) % FEATURED_PROJECTS_CONTENT.projects.length
    ];

  return (
    <article aria-labelledby="case-study-title" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Top Back Navigation */}
        <div className="border-b border-neutral-200 pb-6">
          <a
            href="/#portfolio"
            onClick={(e) => {
              e.preventDefault();
              onBackToPortfolio();
            }}
            className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-neutral-600 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101D3A]"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </a>
        </div>

        {/* Case Study Hero Header */}
        <header className="grid grid-cols-1 gap-8 border-b border-neutral-200 py-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#101D3A]">
              <span className="font-[family-name:var(--font-mono)] tabular-nums">
                Case Study {project.index}
              </span>
              {project.category && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
            </div>

            <h1
              id="case-study-title"
              className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
            >
              {project.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="border border-neutral-200 bg-[#F3F4F6] p-6">
              <p className="text-[11px] font-medium tracking-wider text-neutral-500">
                {project.highlightLabel}
              </p>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-2xl font-semibold tracking-tight tabular-nums text-[#101D3A]">
                {project.highlightValue}
              </p>
            </div>
          </div>
        </header>

        {/* Optional Project Media Showcase */}
        {project.imageSrc && (
          <div className="border-b border-neutral-200 py-10">
            <figure className="mx-auto max-w-md border border-neutral-200 bg-[#0A0A0A]">
              <div className="aspect-square w-full overflow-hidden">
                {!imageError ? (
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt ?? project.name}
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-contain"
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
            </figure>
          </div>
        )}

        {/* Detailed Narrative Sections */}
        <div className="divide-y divide-neutral-200">
          {project.sections.map((section, idx) => (
            <section
              key={section.label}
              className="grid grid-cols-1 gap-4 py-9 lg:grid-cols-12 lg:gap-12"
            >
              <div className="flex items-baseline gap-4 lg:col-span-4">
                <span className="font-[family-name:var(--font-mono)] text-xs font-medium tabular-nums text-[#101D3A]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black">
                  {section.label}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-[17px]">
                  {section.body}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Actions & Next Case Study */}
        <footer className="mt-6 flex flex-col gap-6 border-t border-neutral-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 bg-[#101D3A] px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A]"
              >
                <span>Open Project Channel</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            )}

            <button
              type="button"
              onClick={() => onConnect(project.name)}
              className="inline-flex min-h-[44px] items-center justify-center border border-black bg-white px-6 py-3 text-sm font-medium text-black whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#F3F4F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
            >
              Let&apos;s Connect
            </button>
          </div>

          {nextProject && nextProject.slug !== project.slug && (
            <a
              href={nextProject.route}
              onClick={(e) => {
                e.preventDefault();
                onOpenProject(nextProject.route);
              }}
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#101D3A] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101D3A]"
            >
              <span>Next Case Study: {nextProject.name}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          )}
        </footer>
      </div>
    </article>
  );
}
