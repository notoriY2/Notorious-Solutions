import { useTheme } from '../context/ThemeContext';
// Import both theme versions of your logo asset
import logoDark from '../assets/101.png';
import logoLight from '../assets/101.png';

export default function Hero() {
  const { isDark } = useTheme();

  // Dynamically select the correct asset based on theme state
  const currentLogo = isDark ? logoDark : logoLight;

  return (
    <section id="home" className="pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-32 pb-[40px] w-full">
        {/* 2-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div>
              {/* Main Heading */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
                style={{
                  color: isDark ? '#e5e5e5' : '#1a1a1a',
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: '-0.02em',
                }}
              >
                Engineering the <span className="text-[#6CB065] whitespace-nowrap">Notorious.</span>
              </h1>

              {/* Sub-headline */}
              <p
                className="text-base sm:text-lg font-bold tracking-wide text-[#6CB065] mb-4"
                style={{
                  fontFamily: "'Courier New', monospace",
                }}
              >
                High-performance software, custom mobile apps, rapid web execution, and
                bleeding-edge graphic design.
              </p>

              {/* The Overview */}
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: isDark ? '#a3a3a3' : '#525252',
                  fontFamily: "'Courier New', monospace",
                }}
              >
                We bridge the gap between heavy-duty digital engineering and bold visual aesthetics. 
                Whether you need an app that scales to thousands of users or a visual identity 
                that cuts through the noise, we build digital assets that drop with maximum impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary CTA */}
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wide rounded text-black bg-[#6CB065] transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,176,101,0.5)] hover:scale-105"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Launch Project
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  const el = document.querySelector('#showcase');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wide rounded border-2 border-[#6CB065] transition-all duration-300 ${
                  isDark
                    ? 'text-[#6CB065] hover:bg-[#6CB065]/10'
                    : 'text-[#6CB065] hover:bg-[#6CB065]/5'
                } hover:shadow-[0_0_20px_rgba(108,176,101,0.3)]`}
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Explore Work
              </button>
            </div>
          </div>

          {/* Right Column: Logo Image with Animation */}
          <div className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            {/* UPDATED: Increased dimensions across all viewport tiers */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
              {/* Animated glow background */}
              <div
                className="absolute inset-0 rounded-full animate-pulse opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(108,176,101,0.4) 0%, transparent 70%)',
                  animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />

              {/* Floating container cropped to a clean circle */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <img
                  src={currentLogo}
                  alt="Notorious Solutions Logo"
                  className="w-full h-full object-cover rounded-full scale-125"
                  style={{
                    filter: isDark
                      ? 'drop-shadow(0 0 30px rgba(108,176,101,0.5))'
                      : 'drop-shadow(0 0 20px rgba(108,176,101,0.3))',
                  }}
                />
              </div>

              {/* Orbit ring - UPDATED: Changed to border-4 for better balance */}
              <div
                className="absolute inset-0 rounded-full border-4 border-[#6CB065]"
                style={{
                  opacity: 0.2,
                  animation: 'spin 8s linear infinite reverse',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}