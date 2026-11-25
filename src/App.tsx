import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ConnectModal } from './components/ConnectModal';
import { ContactSection } from './components/ContactSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { GrowthFrameworkSection } from './components/GrowthFrameworkSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectCaseStudyPage } from './components/ProjectCaseStudyPage';
import { ServicesSection } from './components/ServicesSection';
import { StageFooter } from './components/StageFooter';
import { WhyKingNovaSection } from './components/WhyKingNovaSection';
import type { NavItem } from './data/portfolioData';
import { FEATURED_PROJECTS_CONTENT, type ProjectCaseStudy } from './data/stage2Data';

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

const DEFAULT_SEO = {
  title: 'KingNova — NFT Collaboration Manager & Growth Strategist',
  description:
    'Partner with KingNova for Web3 growth strategy, NFT collaborations, player acquisition, and community development.',
};

export default function App() {
  const [pathname, setPathname] = useState<string>(() =>
    normalizePathname(window.location.pathname)
  );
  const [activeSection, setActiveSection] = useState<string>('home');
  const [connectOpen, setConnectOpen] = useState(false);
  const [connectTopic, setConnectTopic] = useState('');

  const activeProject = FEATURED_PROJECTS_CONTENT.projects.find(
    (project) => project.route === pathname
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const pageTitle = activeProject
      ? `${activeProject.name} Case Study — KingNova`
      : DEFAULT_SEO.title;
    const pageDescription = activeProject
      ? activeProject.summary
      : DEFAULT_SEO.description;

    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + pathname);
  }, [activeProject, pathname]);

  useEffect(() => {
    if (activeProject) {
      setActiveSection('portfolio');
      return;
    }

    const sectionIds = ['home', 'about', 'services', 'portfolio', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.4, 0.7],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeProject, pathname]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const navigateHomeAndScroll = (sectionId: string) => {
    if (pathname !== '/') {
      window.history.pushState({}, '', `/#${sectionId}`);
      setPathname('/');
      window.requestAnimationFrame(() => {
        window.setTimeout(() => scrollToSection(sectionId), 40);
      });
      return;
    }
    scrollToSection(sectionId);
  };

  const handleOpenProject = (route: ProjectCaseStudy['route']) => {
    if (pathname !== route) {
      window.history.pushState({}, '', route);
      setPathname(route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (item: NavItem) => {
    navigateHomeAndScroll(item.id);
  };

  const handleExploreWork = () => {
    navigateHomeAndScroll('portfolio');
  };

  const handleConnect = (topic = '') => {
    setConnectTopic(topic);
    setConnectOpen(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#101D3A] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main id="main-content">
        {activeProject ? (
          <ProjectCaseStudyPage
            project={activeProject}
            onBackToPortfolio={() => navigateHomeAndScroll('portfolio')}
            onOpenProject={handleOpenProject}
            onConnect={(topic) => handleConnect(topic)}
          />
        ) : (
          <>
            <HeroSection
              onExploreWork={handleExploreWork}
              onConnect={() => handleConnect('')}
            />
            <AboutSection />
            <ServicesSection onConnectWithService={(title) => handleConnect(title)} />
            <FeaturedProjectsSection onOpenProject={handleOpenProject} />
            <GrowthFrameworkSection />
            <WhyKingNovaSection />
            <ContactSection onWorkTogether={() => handleConnect('')} />
          </>
        )}
      </main>

      <StageFooter onNavigate={handleNavigate} />

      <ConnectModal
        isOpen={connectOpen}
        initialTopic={connectTopic}
        onClose={() => setConnectOpen(false)}
      />
    </div>
  );
}
