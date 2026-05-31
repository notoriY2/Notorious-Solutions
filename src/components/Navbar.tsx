import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoDark from '../assets/101.png';
import logoLight from '../assets/101.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Updated to 1280px (xl) to match our layout threshold safety margin
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    
    if (location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <header
      className={`fixed left-3 right-3 z-50 max-w-7xl mx-auto rounded-xl transition-all duration-300 ${
        scrolled
          ? 'top-2.5'
          : 'top-3 xl:top-5' 
      } ${
        scrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-md border border-[#6CB065]/20 shadow-[0_4px_30px_rgba(108,176,101,0.08)]'
            : 'bg-white/90 backdrop-blur-md border border-[#6CB065]/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          : isDark
            ? 'bg-black/40 backdrop-blur-sm border border-white/5'
            : 'bg-white/40 backdrop-blur-sm border border-black/5'
      }`}
    >
      <nav className="w-full px-3 sm:px-6 xl:px-8">
        {/* Height configuration scales beautifully across mobile up to high-res xl desktop screens */}
        <div className="flex items-center justify-between h-16 sm:h-20 xl:h-24 transition-all duration-300">

          {/* Left: Responsive Logo + Guarded Text */}
          <div 
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0 cursor-pointer select-none" 
            onClick={() => handleNavClick('#home')}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
              isDark ? 'border border-[#6CB065]/50 bg-black' : 'border border-[#6CB065]/50 bg-white'
            }`}>
              <img
                src={isDark ? logoDark : logoLight}
                alt="Notorious Solutions logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <span
              className="font-bold tracking-widest text-[#6CB065] text-xs xs:text-sm sm:text-base xl:text-lg uppercase leading-tight whitespace-nowrap"
              style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.12em' }}
            >
              Notorious Solutions
            </span>
          </div>

          {/* Center: Desktop Navigation Nodes (Now safely gated behind xl breakpoint) */}
          <ul className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-base font-semibold tracking-wide rounded transition-all duration-200 relative group ${
                    isDark ? 'text-gray-300 hover:text-[#6CB065]' : 'text-gray-600 hover:text-[#6CB065]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#6CB065] transition-all duration-300 group-hover:w-4/5" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Desktop Controls Wrapper (Gated behind xl) */}
          <div className="hidden xl:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`relative w-14 h-7 rounded-full border transition-all duration-300 flex items-center px-1 ${
                isDark ? 'border-[#6CB065]/50 bg-black' : 'border-[#6CB065]/60 bg-gray-100'
              }`}
            >
              <span
                className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark ? 'translate-x-0 bg-[#6CB065]' : 'translate-x-7 bg-[#6CB065]'
                }`}
              >
                {isDark ? <Moon size={11} className="text-black" /> : <Sun size={11} className="text-black" />}
              </span>
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              className="px-6 py-2.5 text-base font-bold tracking-wide text-[#6CB065] border border-[#6CB065] rounded transition-all duration-300 hover:bg-[#6CB065] hover:text-black shadow-[0_0_12px_rgba(108,176,101,0.25)] hover:shadow-[0_0_20px_rgba(108,176,101,0.5)]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile/Tablet UI Action Control Block (Now safely operational on iPad Air) */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-11 h-6 rounded-full border flex items-center px-0.5 transition-all duration-300 ${
                isDark ? 'border-[#6CB065]/40 bg-black' : 'border-[#6CB065]/40 bg-gray-100'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 bg-[#6CB065] ${
                  isDark ? 'translate-x-0' : 'translate-x-5'
                }`}
              >
                {isDark ? <Moon size={9} className="text-black" /> : <Sun size={9} className="text-black" />}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="p-2 rounded transition-all active:scale-95 text-[#6CB065] hover:bg-[#6CB065]/10"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu Container (Handles both mobile phones and portrait tablets flawlessly) */}
        <div
          className={`xl:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[75vh] opacity-100 pb-5' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-px w-full bg-[#6CB065]/20 mb-2" />

          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 text-base font-semibold tracking-wide rounded transition-all duration-150 active:bg-[#6CB065]/20 ${
                  isDark
                    ? 'text-gray-300 hover:text-[#6CB065] hover:bg-[#6CB065]/10'
                    : 'text-gray-600 hover:text-[#6CB065] hover:bg-[#6CB065]/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="px-2 pt-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3.5 text-base font-bold text-center text-[#6CB065] border border-[#6CB065] rounded transition-all duration-300 active:bg-[#6CB065] active:text-black shadow-[0_0_12px_rgba(108,176,101,0.15)]"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}