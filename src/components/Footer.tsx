import { Github, Mail, Phone, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

// Import the specific network asset nodes
import NotoriousY2youtube from '../assets/48.png';
import NotoriousY2clothes from '../assets/48.png';
import averageGamers from '../assets/64.jpeg';

// Import both theme versions of your logo asset
import logoDark from '../assets/101.png';
import logoLight from '../assets/101.png';

const CORE_SERVICES = [
  { label: 'Software Services', href: '#services' },
  { label: 'Mobile Apps', href: '#services' },
  { label: 'Wix Fast Deployments', href: '#services' },
  { label: 'Graphic Design', href: '#services' },
  { label: 'Case Studies', href: '#showcase' },
];

// UPDATED: Mapped explicit local image modules directly into your ecosystem nodes
const Y2_NETWORK = [
  { 
    prefix: 'Notorious Y2', 
    suffix: '// The Clothing Line', 
    href: 'https://notorious-store.netlify.app/', 
    icon: NotoriousY2clothes 
  },
  { 
    prefix: 'Notorious Y2', 
    suffix: '// Media & Culture (YouTube)', 
    href: 'https://www.youtube.com/@notorious.Y2', 
    icon: NotoriousY2youtube 
  },
  { 
    prefix: 'Average Gamers Y2', 
    suffix: '// Gaming Division', 
    href: 'https://www.youtube.com/@AverageGamersY2', 
    icon: averageGamers 
  },
];

export default function Footer() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  // Dynamically select the correct asset based on theme state
  const currentLogo = isDark ? logoDark : logoLight;

  // Unified Theme System Parameters
  const textColor = isDark ? '#e5e5e5' : '#1a1a1a';
  const subTextColor = isDark ? '#a3a3a3' : '#525252';
  const mutedTextColor = isDark ? '#525252' : '#737373';
  const monoFont = { fontFamily: "'Courier New', monospace" };

  // Smooth Navigation Handler Across Route Bounds
  const handleInternalNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      
      // Route back home first
      navigate('/');
      
      // Defer execution slightly to let the home layout remount completely
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer
      className="w-full transition-colors duration-300 border-t border-dashed border-gray-800/20"
      style={{
        backgroundColor: isDark ? '#000000' : '#f5f5f5',
      }}
    >
      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          
          {/* Column 1: Agency Information Matrix */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={currentLogo} 
                alt="Notorious Solutions Logo" 
                className="h-12 w-12 rounded-full object-cover" 
              />
              <span
                className="text-lg font-bold tracking-widest"
                style={{ color: textColor, ...monoFont }}
              >
                NOTORIOUS SOLUTIONS
              </span>
            </div>

            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: subTextColor, ...monoFont }}
            >
              High-performance engineering and creative asset deployment based in South Africa.
            </p>

            {/* Direct Channel Vectors */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:notori.y2@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#6CB065] w-fit"
                style={{ color: subTextColor, ...monoFont }}
              >
                <Mail size={16} className="text-[#6CB065]/80" />
                <span>notori.y2@gmail.com</span>
              </a>

              <a
                href="tel:+27621871095"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#6CB065] w-fit"
                style={{ color: subTextColor, ...monoFont }}
              >
                <Phone size={16} className="text-[#6CB065]/80" />
                <span>+27 62 187 1095</span>
              </a>

              <a
                href="https://github.com/notoriY2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#6CB065] w-fit"
                style={{ color: subTextColor, ...monoFont }}
              >
                <Github size={16} className="text-[#6CB065]/80" />
                <span>GitHub Blueprint Node</span>
              </a>
            </div>
          </div>

          {/* Column 2: Core Engineering Navigation */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: textColor, ...monoFont }}
            >
              Engineering Services
            </h3>

            <ul className="flex flex-col gap-3">
              {CORE_SERVICES.map(service => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    onClick={(e) => handleInternalNav(e, service.href)}
                    className="text-sm transition-all duration-200 group flex items-center gap-1 w-fit hover:text-[#6CB065]"
                    style={{ color: subTextColor, ...monoFont }}
                  >
                    {service.label}
                    <span className="inline-block w-0 h-px bg-[#6CB065] transition-all duration-300 group-hover:w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Y2 Network Ecosystem */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: '#6CB065', ...monoFont }}
            >
              The Y2 Network
            </h3>

            <ul className="flex flex-col gap-4">
              {Y2_NETWORK.map(network => (
                <li key={network.prefix + network.suffix}>
                  <a
                    href={network.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-all duration-300 flex items-start gap-2 p-2.5 rounded border cursor-pointer hover:text-[#6CB065] hover:border-[#6CB065]/60 hover:shadow-[0_0_15px_rgba(108,176,101,0.15)] dark:hover:shadow-[0_0_20px_rgba(108,176,101,0.2)]"
                    style={{
                      borderColor: isDark ? 'rgba(108, 176, 101, 0.2)' : 'rgba(108, 176, 101, 0.3)',
                      color: subTextColor,
                      ...monoFont
                    }}
                  >
                    <ExternalLink size={14} className="flex-shrink-0 mt-1 text-[#6CB065]" />
                    <span className="leading-snug">
                      {network.prefix}
                      {/* UPDATED: Dynamic asset lookup using network.icon */}
                      <img 
                        src={network.icon} 
                        alt="" 
                        className="inline-block h-6 w-auto aspect-square mx-2 rounded-full border-2 border-[#6CB065] align-bottom object-cover bg-black" 
                      />
                      {network.suffix}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Structural Separation Rule */}
        <div
          className="h-px mb-8"
          style={{ backgroundColor: isDark ? 'rgba(108, 176, 101, 0.25)' : 'rgba(108, 176, 101, 0.4)' }}
        />

        {/* Global Registry Terms and Status Metrics */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs tracking-widest text-center sm:text-left"
            style={{ color: mutedTextColor, ...monoFont }}
          >
            © 2026 NOTORIOUS SOLUTIONS. ALL SYSTEMS OPERATIONAL.
          </p>

          {/* Real-time Status Indicator node */}
          <div className="flex items-center gap-2 select-none">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6CB065] animate-pulse shadow-[0_0_8px_#6CB065]" />
            <span
              className="text-xs tracking-widest uppercase font-bold"
              style={{ color: mutedTextColor, ...monoFont }}
            >
              Systems Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}