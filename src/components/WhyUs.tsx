import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronDown, Bug, Zap, Shield } from 'lucide-react';

interface AccordionItem {
  id: string;
  icon: React.ElementType;
  title: string;
  body: string;
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'troubleshooting',
    icon: Bug,
    title: 'End-to-End Troubleshooting',
    body: 'Isolating, testing, reproducing, and completely erasing system bugs before production deployment. Our rigorous Q&A pipeline catches issues at every layer — from unit tests to integration to staging — so nothing reaches your users unverified.',
  },
  {
    id: 'speed',
    icon: Zap,
    title: 'Speed Meets Execution',
    body: 'Using modern rapid web tools like Wix paired with hardcoded backend frameworks to launch weeks ahead of schedule. We combine no-code velocity with custom engineering where it counts, delivering production-grade results in record time.',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Secure & Scalable Architecture',
    body: 'Foundational expertise in database management, user role security, and robust backups. Every system we build is designed to grow — with encrypted data layers, role-based access control, automated failover, and disaster recovery baked in from day one.',
  },
];

function Accordion() {
  const { isDark } = useTheme();
  const [openId, setOpenId] = useState<string | null>(ACCORDION_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {ACCORDION_ITEMS.map(item => {
        const Icon = item.icon;
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="rounded-lg border overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: isDark
                ? 'rgba(18, 18, 18, 0.6)'
                : 'rgba(245, 245, 245, 0.5)',
              borderColor: isOpen
                ? '#6CB065'
                : isDark
                ? 'rgba(108, 176, 101, 0.2)'
                : 'rgba(108, 176, 101, 0.3)',
              boxShadow: isOpen
                ? '0 0 20px rgba(108, 176, 101, 0.15)'
                : 'none',
            }}
          >
            {/* Header */}
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer bg-transparent border-none"
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={20}
                  className="text-[#6CB065] flex-shrink-0"
                />
                <span
                  className="text-sm sm:text-base font-semibold tracking-wide"
                  style={{
                    color: isDark ? '#e5e5e5' : '#1a1a1a',
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {item.title}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-[#6CB065] flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dynamic CSS Grid Body Height Transition */}
            <div
              className="transition-all duration-300 ease-in-out grid"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 pt-0">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: isDark ? '#a3a3a3' : '#525252',
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WhyUs() {
  const { isDark } = useTheme();

  return (
    <section
      id="why-us"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[10px]"
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p
            className="text-sm tracking-widest uppercase text-[#6CB065] mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: isDark ? '#e5e5e5' : '#1a1a1a',
              fontFamily: "'Courier New', monospace",
            }}
          >
            Built Different
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Agency Pitch */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight"
              style={{
                color: isDark ? '#e5e5e5' : '#1a1a1a',
                fontFamily: "'Courier New', monospace",
              }}
            >
              Speed. Versatility.{' '}
              <span className="text-[#6CB065]">Precision.</span>
            </h3>

            <p
              className="text-base leading-relaxed"
              style={{
                color: isDark ? '#a3a3a3' : '#525252',
              }}
            >
              We don't just build software — we engineer solutions that move at the
              speed of your business. From rapid prototyping to production-grade
              deployments, our team delivers across every stack, every platform,
              every deadline.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{
                color: isDark ? '#a3a3a3' : '#525252',
              }}
            >
              Whether you need a full-scale enterprise platform, a sleek mobile
              experience, or a brand identity that turns heads — we ship it fast,
              ship it right, and ship it built to last.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { stat: '3x', label: 'Faster Delivery' },
                { stat: '99.9%', label: 'Uptime SLA' },
                { stat: '0', label: 'Compromises' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-[#6CB065]"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    {item.stat}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wide"
                    style={{
                      color: '#737373',
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
}