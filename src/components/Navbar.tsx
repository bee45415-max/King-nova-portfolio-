import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, type NavItem } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (item: NavItem) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const centerLinks = NAV_ITEMS.filter((item) => item.id !== 'contact');
  const contactItem = NAV_ITEMS.find((item) => item.id === 'contact')!;

  const handleLinkClick = (item: NavItem) => {
    setMobileMenuOpen(false);
    onNavigate(item);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm transition-colors duration-200 border-b ${
        scrolled ? 'border-neutral-200' : 'border-neutral-100'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(NAV_ITEMS[0]);
          }}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101D3A]"
          aria-label="KingNova Home"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-[#101D3A]"
          >
            <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="1.75" />
            <path d="M7.5 16.5V7.5L12 12L16.5 7.5V16.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
          </svg>
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-black">
            KingNova
          </span>
        </a>

        {/* Zone 2: Primary Text Navigation */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {centerLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101D3A] ${
                  isActive ? 'text-[#101D3A]' : 'text-neutral-600 hover:text-black'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#101D3A] transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick(contactItem)}
            className="hidden md:inline-flex items-center justify-center bg-[#101D3A] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
          >
            {contactItem.label}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center text-black hover:bg-[#F3F4F6] transition-colors duration-150 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile navigation"
          className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-neutral-100">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                    className={`flex min-h-[44px] items-center justify-between py-2.5 text-base font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] ${
                      item.id === 'contact'
                        ? 'text-[#101D3A] font-semibold'
                        : isActive
                          ? 'text-[#101D3A]'
                          : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && item.id !== 'contact' && (
                      <span className="text-xs font-medium text-[#101D3A]">Current</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
