import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, X } from 'lucide-react';
import { CONTACT_CONTENT } from '../data/stage2Data';

interface ConnectModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

const CONTACT_EMAIL = 'Bee45415@gmail.com';

export function ConnectModal({ isOpen, initialTopic = '', onClose }: ConnectModalProps) {
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTopic(initialTopic);
  }, [initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `KingNova Inquiry${topic ? ` — ${topic}` : ''}${project ? ` (${project})` : ''}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nProject / Studio: ${project || 'N/A'}\nFocus Area: ${topic || 'General'}\n\n${message}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;
    window.location.href = buildMailtoHref();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setProject('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="relative w-full max-w-lg border border-neutral-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-5">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#101D3A]">
              Direct Contact
            </p>
            <h2
              id="connect-modal-title"
              className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-black"
            >
              Let&apos;s Work Together
            </h2>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close connect dialog"
            className="inline-flex h-10 w-10 items-center justify-center text-neutral-600 transition-colors duration-150 hover:bg-[#F3F4F6] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Direct Links Bar */}
        <div className="mt-5 grid grid-cols-1 gap-2 border-b border-neutral-200 pb-5 sm:grid-cols-3">
          {CONTACT_CONTENT.channels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between border border-neutral-200 bg-[#F3F4F6] px-3 py-2 text-xs font-medium text-black transition-colors duration-150 hover:border-[#101D3A] hover:bg-white"
            >
              <span className="truncate">{channel.platform}</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#101D3A]" aria-hidden="true" />
            </a>
          ))}
        </div>

        {submitted ? (
          <div className="py-8">
            <div className="border border-neutral-200 bg-[#F3F4F6] p-6">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-black">
                Email Draft Opened
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Your inquiry for{' '}
                <span className="font-medium text-black">{CONTACT_EMAIL}</span> has been
                prepared in your email client. You can also reach out directly on Telegram
                (@novar) or X (@king____nova).
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="min-h-[44px] bg-[#101D3A] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-black cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label htmlFor="connect-name" className="block text-xs font-medium text-black">
                Your Name
              </label>
              <input
                id="connect-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:border-[#101D3A] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="connect-project" className="block text-xs font-medium text-black">
                  Project / Studio
                </label>
                <input
                  id="connect-project"
                  type="text"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="Project name"
                  className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:border-[#101D3A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="connect-topic" className="block text-xs font-medium text-black">
                  Focus Area
                </label>
                <input
                  id="connect-topic"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Growth Strategy"
                  className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:border-[#101D3A] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="connect-message" className="block text-xs font-medium text-black">
                Project Goals
              </label>
              <textarea
                id="connect-message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your project goals, timeline, or collaboration details."
                className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:border-[#101D3A] focus:outline-none"
              />
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-neutral-600 transition-colors hover:text-black cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#101D3A]" aria-hidden="true" />
                    <span>Copied {CONTACT_EMAIL}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy {CONTACT_EMAIL}</span>
                  </>
                )}
              </button>

              <button
                type="submit"
                className="min-h-[44px] bg-[#101D3A] px-6 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101D3A] cursor-pointer"
              >
                Compose Email
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
