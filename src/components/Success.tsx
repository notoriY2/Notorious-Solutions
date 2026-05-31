import { useEffect, useState } from 'react';
import { ChevronRight, Terminal, CheckCircle2 } from 'lucide-react';

interface SuccessProps {
  onClose?: () => void;
}

const TERMINAL_TEXT = 'INITIALIZING NOTORIOUS PROTOCOL... SECURE CONNECTION ESTABLISHED // MESSAGE RECEIVED.';

export default function Success({ onClose }: SuccessProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeChar = () => {
      if (currentIndex < TERMINAL_TEXT.length) {
        setDisplayedText(TERMINAL_TEXT.substring(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeChar, 35);
      } else {
        setIsTypingDone(true);
        // Pause at the end of the text, then clear and restart infinitely
        timeout = setTimeout(() => {
          setIsTypingDone(false);
          setDisplayedText('');
          currentIndex = 0;
          typeChar();
        }, 4000);
      }
    };

    timeout = setTimeout(typeChar, 200);
    return () => clearTimeout(timeout);
  }, []);

  const handleReturnHome = () => {
    if (onClose) {
      onClose();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreEcosystem = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 overflow-y-auto transition-colors duration-500 bg-white dark:bg-black">
      
      {/* Background Tech Mesh Aesthetic */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#00ff00_1px,transparent_1px),linear-gradient(to_bottom,#00ff00_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Main Content Card Container */}
      <div className="w-full max-w-2xl py-8 md:py-12 flex flex-col gap-10 relative z-10 animate-fade-in">
        
        {/* Modern Sleek Terminal Header Window */}
        <div className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-md overflow-hidden shadow-xl dark:shadow-[0_0_30px_rgba(0,255,0,0.02)]">
          <div className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 dark:text-zinc-500">
              <Terminal size={12} className="text-zinc-500 dark:text-[#00FF00]" />
              <span>transmission_log.sh</span>
            </div>
          </div>
          
          <div className="p-5 font-mono text-xs md:text-sm tracking-wider leading-relaxed min-h-[72px] text-zinc-700 dark:text-[#00FF00]">
            <span>{displayedText}</span>
            <span className={`inline-block w-2 h-4 ml-1 bg-zinc-600 dark:bg-[#00FF00] align-middle ${isTypingDone ? 'animate-pulse' : ''}`} />
          </div>
        </div>

        {/* Dynamic Center Branding Content */}
        <div className="flex flex-col gap-6 text-center items-center">
          
          {/* Animated Success Seal Icon */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-inner group">
            <CheckCircle2 className="w-8 h-8 text-zinc-800 dark:text-[#00FF00] transition-transform duration-500 group-hover:rotate-12" />
            <div className="absolute inset-0 rounded-full border border-dashed border-zinc-300 dark:border-[#00FF00]/30 animate-spin [animation-duration:20s]" />
          </div>

          <div className="flex flex-col gap-3">
            {/* Title - Bold Terminal Green */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-zinc-900 dark:text-[#00FF00] drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(0,255,0,0.15)]">
              Project Initiated.
            </h1>
            
            {/* Sub-text */}
            <p className="text-sm sm:text-base md:text-lg font-mono text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
              We have received your parameters. A lead engineer will review your
              stack requirements and reach out within 24 hours.
            </p>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 dark:bg-[#00FF00] animate-ping" />
            <span className="text-[10px] md:text-xs font-mono font-medium uppercase tracking-widest text-zinc-600 dark:text-[#00FF00]">
              Secure Hub Connection Upstream
            </span>
          </div>
        </div>

        {/* Dynamic Button Setups */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          
          {/* Primary CTA */}
          <button
            onClick={handleReturnHome}
            className="flex-1 px-6 py-3.5 text-sm md:text-base font-mono font-bold tracking-wide rounded border-2 transition-all duration-300 flex items-center justify-center gap-2 group
              bg-zinc-900 hover:bg-zinc-800 border-zinc-900 text-white shadow-lg
              dark:bg-[#00FF00] dark:border-[#00FF00] dark:text-black dark:hover:shadow-[0_0_30px_rgba(0,255,0,0.4)]"
          >
            <span>Return to Hub</span>
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleExploreEcosystem}
            className="flex-1 px-6 py-3.5 text-sm md:text-base font-mono font-bold tracking-wide rounded border-2 transition-all duration-300 flex items-center justify-center gap-2 group
              border-zinc-300 text-zinc-700 hover:bg-zinc-50
              dark:border-[#00FF00] dark:text-[#00FF00] dark:hover:bg-[#00FF00]/10 dark:hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]"
          >
            <span>Explore Ecosystem</span>
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Sleek Low-Contrast Frame Footer Status */}
        <div className="text-center">
          <p className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 dark:text-zinc-700 uppercase">
            STATUS: SECURE // ENV: NQF-6 OPERATIONAL
          </p>
        </div>
      </div>
    </div>
  );
}