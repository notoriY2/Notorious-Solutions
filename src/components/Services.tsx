import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  Code2,
  Smartphone,
  Zap,
  Palette,
} from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'High-Performance Software',
    slug: 'high-performance-software',
    description: 'Custom tools built to handle complex technical heavy lifting. We create secure backend architecture, automated systems, and software frameworks that function flawlessly and scale seamlessly.',
    icon: Code2,
  },
  {
    id: 2,
    title: 'Custom Mobile Apps',
    slug: 'custom-mobile-apps',
    description: 'Premium smartphone applications engineered from the ground up for iOS and Android. Fast, intuitive interfaces fully optimized for smooth user experiences and immediate deployment.',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'Rapid Web Execution',
    slug: 'rapid-web-execution',
    description: 'High-converting landing pages and responsive business websites built live in record time. Formatted to load instantly, work perfectly on mobile devices, and turn visitors into clients.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Bleeding-Edge Graphic Design',
    slug: 'bleeding-edge-graphic-design',
    description: 'Bold typographic layouts, custom logo packages, next-gen promotional posters, and unforgettable visual brand identities crafted specifically for modern creators and apparel labels.',
    icon: Palette,
  },
];

const METRICS = [
  {
    label: 'Multi-Role Environments Deployed',
    stat: '150+',
  },
  {
    label: 'End-to-End Infrastructure Systems Built',
    stat: '45+',
  },
  {
    label: 'Troubleshooting Success Rate',
    stat: '100%',
  },
  {
    label: 'Graphic Assets Delivered',
    stat: '500+',
  },
];

export default function Services() {
  const { isDark } = useTheme();

  return (
    <section
      id="services"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[5px]"
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
            What We Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: isDark ? '#e5e5e5' : '#1a1a1a',
              fontFamily: "'Courier New', monospace",
            }}
          >
            Services & Expertise
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative h-full rounded-lg backdrop-blur-sm border transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(108,176,101,0.3)] hover:-translate-y-2"
                style={{
                  backgroundColor: isDark
                    ? 'rgba(18, 18, 18, 0.6)'
                    : 'rgba(255, 255, 255, 0.4)',
                  borderColor: isDark
                    ? 'rgba(108, 176, 101, 0.2)'
                    : 'rgba(108, 176, 101, 0.3)',
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(108,176,101,0.15) 0%, transparent 70%)',
                  }}
                />

                {/* Card Content */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col gap-4">
                  {/* Icon */}
                  <div className="text-[#6CB065] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(108,176,101,0.4)]">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg sm:text-xl font-semibold tracking-wide"
                    style={{
                      color: isDark ? '#e5e5e5' : '#1a1a1a',
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-grow"
                    style={{
                      color: isDark ? '#a3a3a3' : '#525252',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-[#6CB065] text-sm font-medium group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics Banner */}
        <div
          className="rounded-lg border backdrop-blur-sm py-12 sm:py-16 px-6 sm:px-8 lg:px-12"
          style={{
            backgroundColor: isDark
              ? 'rgba(18, 18, 18, 0.5)'
              : 'rgba(245, 245, 245, 0.5)',
            borderColor: isDark
              ? 'rgba(108, 176, 101, 0.25)'
              : 'rgba(108, 176, 101, 0.35)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-2 text-center">
                {/* Stat */}
                <div
                  className="text-3xl sm:text-4xl font-bold tracking-tighter"
                  style={{
                    color: '#6CB065',
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {metric.stat}
                </div>

                {/* Label */}
                <p
                  className="text-xs sm:text-sm tracking-wide uppercase"
                  style={{
                    color: isDark ? '#a3a3a3' : '#525252',
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}