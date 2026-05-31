import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ServiceDetail() {
  const { isDark } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Global Theme Values
  const bgColor = isDark ? '#000000' : '#ffffff';
  const textColor = isDark ? '#e5e5e5' : '#1a1a1a';
  const subTextColor = isDark ? '#a3a3a3' : '#525252';
  const monoFont = { fontFamily: "'Courier New', monospace" };

  // Programmatic Back to Services Navigation & Smooth Scroll
  const renderBackLink = () => (
    <button
      onClick={() => {
        navigate('/');
        // Wait briefly for the home page component tree to mount before scrolling
        setTimeout(() => {
          const el = document.getElementById('services');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }}
      className="inline-flex items-center gap-2 text-[#6CB065] hover:gap-3 transition-all duration-300 mb-12 text-sm font-semibold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 align-baseline"
      style={monoFont}
    >
      <ChevronLeft size={16} />
      <span>← Back to Services</span>
    </button>
  );

  // Common Bottom Action CTA Banner
  const renderBottomCTA = () => (
    <div
      className="mt-20 border rounded-lg p-8 sm:p-12 text-center transition-all duration-300 hover:border-[#6CB065]/40"
      style={{
        backgroundColor: isDark ? 'rgba(18, 18, 18, 0.4)' : 'rgba(245, 245, 245, 0.4)',
        borderColor: isDark ? 'rgba(108, 176, 101, 0.2)' : 'rgba(108, 176, 101, 0.3)',
      }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: textColor, ...monoFont }}>
        Ready to Move Forward?
      </h3>
      <p className="text-base mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: subTextColor, ...monoFont }}>
        Initiate your technical project brief or schedule a structural discovery phase with our engineering unit.
      </p>
      <button
        onClick={() => {
          const el = document.querySelector('#contact');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/#contact');
          }
        }}
        className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold tracking-wider rounded text-black bg-[#6CB065] transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,176,101,0.4)] hover:scale-[1.02] cursor-pointer"
        style={monoFont}
      >
        <span>Begin Project Briefing</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );

  // Layout 1: High-Performance Software
  if (slug === 'high-performance-software') {
    const ecosystems = [
      { name: 'Backend Architecture', desc: 'Engineering robust, production-ready server applications focusing on maximum execution speed, data safety, and zero structural vulnerabilities.' },
      { name: 'Automated Systems', desc: 'Developing smart, hands-off background processes, system automation scripts, and workflow pipelines that handle complex company data without error.' },
      { name: 'Custom Tooling', desc: 'Building secure internal software utilities, specialized system management dashboards, and custom management hubs tailored to your exact business specifications.' },
    ];

    const philosophies = [
      { title: 'Strict Stability', desc: 'Eliminating deployment faults and configuration drops through ahead-of-time code checking and modular systems engineering.' },
      { title: 'Asynchronous Workloads', desc: 'Configuring multi-threaded process logic that effortlessly absorbs spikes in digital traffic without losing transactional precision.' },
      { title: 'Clean Architecture', desc: 'Keeping business logic completely detached from third-party tooling so your system adapts smoothly as your workflow needs change.' },
    ];

    return (
      <div className="min-h-screen pt-32 pb-20 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderBackLink()}

          {/* Hero */}
          <div className="mb-16 border-b border-dashed border-gray-800 pb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4" style={{ color: textColor, ...monoFont }}>
              01 // High-Performance Software
            </h1>
            <p className="text-lg max-w-3xl leading-relaxed" style={{ color: subTextColor }}>
              Custom tools built to handle complex technical heavy lifting. We design and construct the secure underlying architecture, background systems, and management modules required to support scaling businesses.
            </p>
          </div>

          {/* Architecture Grid */}
          <div className="mb-20">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6CB065] mb-8" style={monoFont}>
              // Architecture Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ecosystems.map((sys, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded border transition-all duration-300 hover:bg-[#6CB065]/5"
                  style={{
                    borderColor: isDark ? 'rgba(108, 176, 101, 0.2)' : 'rgba(108, 176, 101, 0.3)',
                    backgroundColor: isDark ? 'rgba(10,10,10,0.5)' : 'rgba(250,250,250,0.5)',
                  }}
                >
                  <h3 className="text-lg font-bold mb-2 text-[#6CB065]" style={monoFont}>
                    &lt;{sys.name} /&gt;
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: subTextColor }}>{sys.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Philosophy Panel */}
          <div className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6CB065] mb-8" style={monoFont}>
              // Engineering Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophies.map((ph, idx) => (
                <div key={idx} className="border-l-2 border-[#6CB065] pl-4 py-2">
                  <h3 className="text-base font-bold mb-2" style={{ color: textColor, ...monoFont }}>{ph.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: subTextColor }}>{ph.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {renderBottomCTA()}
        </div>
      </div>
    );
  }

  // Layout 2: Custom Mobile Apps
  if (slug === 'custom-mobile-apps') {
    const pipelines = [
      { num: '01', title: 'Intuitive View Framing', desc: 'Crafting responsive mobile interface wireframes optimized to deliver instantaneous touch interactions and fluid layout transitions.' },
      { num: '02', title: 'Stable State Operations', desc: 'Structuring immutable data streams across application environments to guarantee error-free tracking of user choices.' },
      { num: '03', title: 'Offline-First Local Storage', desc: 'Deploying encrypted local databases and smart update buffers so application functions run reliably anywhere on earth.' },
      { num: '04', title: 'Seamless Store Pipelines', desc: 'Setting up secure compilation pathways to deploy new interface improvements to iOS and Android users without downtime.' },
    ];

    return (
      <div className="min-h-screen pt-32 pb-20 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderBackLink()}

          {/* Hero */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4" style={{ color: textColor, ...monoFont }}>
              02 // Custom Mobile Apps
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: subTextColor }}>
              Premium smartphone applications engineered from the ground up. We create smooth digital frameworks structured to load instantly, work beautifully on all screens, and go live fast.
            </p>
          </div>

          {/* Stack Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div
              className="p-8 rounded border transition-all duration-500 group relative overflow-hidden"
              style={{
                borderColor: isDark ? 'rgba(108, 176, 101, 0.15)' : 'rgba(108, 176, 101, 0.25)',
                backgroundColor: isDark ? '#121212' : '#fcfcfc',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(108, 176, 101, 0.08) 0%, transparent 70%)' }} />
              <h2 className="text-xl font-bold mb-4 text-[#6CB065]" style={monoFont}>Cross-Platform Unification</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: subTextColor }}>
                Constructing mobile instances utilizing shared logic architectures. This balances single-repository workflow efficiency while generating fast interactive views that retain native design responsiveness.
              </p>
              <div className="flex gap-2 text-xs font-mono text-gray-500">
                <span className="px-2 py-1 bg-black/10 dark:bg-white/5 border border-gray-800 rounded">Flutter</span>
                <span className="px-2 py-1 bg-black/10 dark:bg-white/5 border border-gray-800 rounded">React Native</span>
              </div>
            </div>

            <div
              className="p-8 rounded border transition-all duration-500 group relative overflow-hidden"
              style={{
                borderColor: isDark ? 'rgba(108, 176, 101, 0.15)' : 'rgba(108, 176, 101, 0.25)',
                backgroundColor: isDark ? '#121212' : '#fcfcfc',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(108, 176, 101, 0.08) 0%, transparent 70%)' }} />
              <h2 className="text-xl font-bold mb-4 text-[#6CB065]" style={monoFont}>Native Device Performance</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: subTextColor }}>
                Writing optimized code blueprints that communicate directly with device operating channels. Perfect for platforms requiring complex hardware execution features, persistent notifications, and high execution speeds.
              </p>
              <div className="flex gap-2 text-xs font-mono text-gray-500">
                <span className="px-2 py-1 bg-black/10 dark:bg-white/5 border border-gray-800 rounded">Swift / iOS</span>
                <span className="px-2 py-1 bg-black/10 dark:bg-white/5 border border-gray-800 rounded">Kotlin / Android</span>
              </div>
            </div>
          </div>

          {/* Visual Engineering Pipeline */}
          <div className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6CB065] mb-8" style={monoFont}>
              // Mobile Deployment Stages
            </h2>
            <div className="flex flex-col gap-4">
              {pipelines.map((pipe, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-6 border rounded transition-all duration-300 group"
                  style={{
                    borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    backgroundColor: isDark ? 'rgba(5,5,5,0.2)' : 'rgba(250,250,250,0.2)',
                  }}
                >
                  <span className="text-2xl font-bold text-gray-600 group-hover:text-[#6CB065] transition-colors" style={monoFont}>{pipe.num}</span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold" style={{ color: textColor, ...monoFont }}>{pipe.title}</h3>
                    <p className="text-sm mt-1" style={{ color: subTextColor }}>{pipe.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {renderBottomCTA()}
        </div>
      </div>
    );
  }

  // Layout 3: Rapid Web Execution
  if (slug === 'rapid-web-execution') {
    const capacities = [
      { title: 'Custom Backend Integration', desc: 'Deploying custom cloud operations, dynamic database pathways, third-party system connections, and tailored interaction rules directly onto secure cloud nodes.' },
      { title: 'Dynamic Content Architecture', desc: 'Equipping administration accounts with structural data templates, making it effortless to add products, portfolios, and blogs without breaking the main layout code.' },
      { title: 'Performance-First Optimization', desc: 'Configuring image optimization filters and clean resource files to guarantee your portal loads rapidly, ranks perfectly on search engines, and keeps mobile users engaged.' },
    ];

    const benchmarks = [
      { metric: '48hr', label: 'Layout Blueprinting & Flow Mapping' },
      { metric: '7-Day', label: 'Full Operational Production Launch' },
      { metric: '100%', label: 'Responsive Multi-Device Formatting' },
    ];

    return (
      <div className="min-h-screen pt-32 pb-20 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderBackLink()}

          {/* Hero */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4" style={{ color: textColor, ...monoFont }}>
              03 // Rapid Web Execution
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: subTextColor }}>
              High-converting business websites live on the web in record time. We bypass extended development delays to engineer clean, fast-loading digital hubs optimized to turn casual traffic into clients.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-20">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6CB065] mb-8" style={monoFont}>
              // Implementation Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capacities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded border transition-all hover:-translate-y-1 duration-300"
                  style={{
                    borderColor: 'rgba(108, 176, 101, 0.35)',
                    backgroundColor: isDark ? 'rgba(18,18,18,0.2)' : 'rgba(240,240,240,0.2)',
                  }}
                >
                  <h3 className="text-base font-bold mb-3" style={{ color: textColor, ...monoFont }}>{cap.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: subTextColor }}>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Velocity Benchmarks */}
          <div className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6CB065] mb-8" style={monoFont}>
              // Project Speed Parameters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-dashed border-gray-800 p-8 rounded">
              {benchmarks.map((bench, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-4xl lg:text-5xl font-black text-[#6CB065] mb-2" style={monoFont}>{bench.metric}</div>
                  <div className="text-xs font-semibold tracking-wider text-gray-500 uppercase" style={monoFont}>{bench.label}</div>
                </div>
              ))}
            </div>
          </div>

          {renderBottomCTA()}
        </div>
      </div>
    );
  }

  // Layout 4: Bleeding-Edge Graphic Design
  if (slug === 'bleeding-edge-graphic-design') {
    const deliverables = [
      { category: 'Unforgettable Brand Identities', details: 'Bespoke corporate logomarks, vector asset kits, structured typographic guidelines, and complete branding design systems built to dominate your market.' },
      { category: 'High-Impact Promotional Media', details: 'Bold graphic posters, modern social media layouts, typographic streetwear concept lookbooks, and high-contrast creative content modules.' },
      { category: 'Structural Interface Blueprints', details: 'Figma application wireframes, aesthetic layout patterns, and interactive user prototypes drafted clearly before starting development.' },
    ];

    return (
      <div className="min-h-screen pt-32 pb-20 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderBackLink()}

          {/* Hero */}
          <div className="mb-16 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4" style={{ color: textColor, ...monoFont }}>
              04 // Bleeding-Edge Graphic Design
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed mx-auto sm:mx-0" style={{ color: subTextColor }}>
              Crafting standout visual assets, next-gen creative materials, and unforgettable identity structures. We design bold typography and graphics engineered to cut through the modern noise.
            </p>
          </div>

          {/* Asset Deliverables Table */}
          <div className="mb-20">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6CB065] mb-8" style={monoFont}>
              // Design Deliverables Grid
            </h2>
            <div className="border-t border-gray-800/60">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-gray-800/40 items-start hover:bg-[#6CB065]/5 transition-colors duration-300 px-4 rounded"
                >
                  <div className="font-bold text-[#6CB065] text-sm md:col-span-1 drop-shadow-[0_0_15px_rgba(108,176,101,0.4)]" style={monoFont}>
                    {item.category}
                  </div>
                  <div className="text-sm leading-relaxed md:col-span-2" style={{ color: subTextColor }}>
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Manifesto Block */}
          <div className="mb-12">
            <blockquote
              className="p-8 sm:p-12 border rounded-lg text-center backdrop-blur-sm shadow-inner overflow-hidden relative"
              style={{
                backgroundColor: isDark ? 'rgba(15,15,15,0.6)' : 'rgba(245,245,245,0.6)',
                borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              }}
            >
              <p
                className="text-lg sm:text-2xl font-semibold tracking-tight leading-relaxed italic max-w-3xl mx-auto text-[#6CB065] drop-shadow-[0_0_10px_rgba(108,176,101,0.2)]"
                style={monoFont}
              >
                "We do not deploy generic templates. We engineer brand assets that dominate digital real estate."
              </p>
            </blockquote>
          </div>

          {renderBottomCTA()}
        </div>
      </div>
    );
  }

  // Fallback Catchall: Page Not Found UI
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: textColor, ...monoFont }}>
          Service Routing Matrix Failure
        </h1>
        <p className="text-sm mb-8 font-mono text-red-500">
          Error 404: The system slug parameter [ {slug} ] could not be mapped to an internal sub-layout module.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#6CB065] text-black rounded font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,176,101,0.5)]"
          style={monoFont}
        >
          <ChevronLeft size={18} />
          Return to Platform Base
        </Link>
      </div>
    </div>
  );
}