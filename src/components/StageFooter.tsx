import { NAV_ITEMS, type NavItem } from '../data/portfolioData';
import { CONTACT_CONTENT } from '../data/stage2Data';

interface StageFooterProps {
  onNavigate: (item: NavItem) => void;
}

export function StageFooter({ onNavigate }: StageFooterProps) {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-neutral-200 pb-10 md:grid-cols-12 md:items-start">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(NAV_ITEMS[0]);
              }}
              className="inline-flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-black"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="shrink-0 text-[#101D3A]"
              >
                <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M7.5 16.5V7.5L12 12L16.5 7.5V16.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                />
              </svg>
              <span>KingNova</span>
            </a>
            <p className="mt-2.5 text-sm text-neutral-600">
              NFT Collaboration Manager | Web3 Growth Strategist
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-wide text-[#101D3A]">Navigation</p>
            <nav aria-label="Footer navigation" className="mt-3 flex flex-wrap gap-x-6 gap-y-2.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item);
                  }}
                  className="text-sm font-medium text-neutral-700 transition-colors duration-150 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Email Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-wide text-[#101D3A]">Connect</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2.5 md:flex-col md:gap-y-2">
              {CONTACT_CONTENT.channels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-neutral-700 transition-colors duration-150 hover:text-[#101D3A]"
                  >
                    {channel.id === 'x' ? 'X' : channel.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} KingNova. All rights reserved.</p>
          <p>Web3 Collaborations · Growth Strategy</p>
        </div>
      </div>
    </footer>
  );
}
