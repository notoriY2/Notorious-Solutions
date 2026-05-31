import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Option {
  label: string;
  desc: string;
  value: string;
  basePrice: number;
}

interface Step {
  id: number;
  title: string;
  field: string;
  options: Option[];
}

// Simplified, jargon-free questions tailored for all business sizes, sports clubs, and local shops
const CALCULATOR_STEPS: Step[] = [
  {
    id: 1,
    title: 'What type of project do you need?',
    field: 'category',
    options: [
      { label: 'Website or Online Store', desc: 'Perfect for business portfolios, local salons, product ordering, or custom Wix Velo solutions.', value: 'web', basePrice: 3800 },
      { label: 'Logo, Branding & Graphic Design', desc: 'Custom logos, brand style kits, packaging layouts, or streetwear design assets.', value: 'branding', basePrice: 1800 },
      { label: 'Custom Web Portal & System', desc: 'Advanced management tools, client booking channels, or custom database setups.', value: 'software', basePrice: 12500 },
      { label: 'Dedicated Mobile App', desc: 'A custom downloadable mobile application built for your fans, clients, or team members.', value: 'mobile', basePrice: 15000 },
    ],
  },
  {
    id: 2,
    title: 'How big is your project or business scale?',
    field: 'scale',
    options: [
      { label: 'Small Business / Basic Setup', desc: 'Essential core features designed to get your brand online quickly and beautifully.', value: 'mvp', basePrice: 0 },
      { label: 'Growing Business / Local Club', desc: 'Multiple pages, automated booking features, item galleries, and expanded options.', value: 'mid', basePrice: 4500 },
      { label: 'Large Enterprise / High-Volume Store', desc: 'Massive product catalogs, deep custom integrations, and heavy traffic management.', value: 'enterprise', basePrice: 9500 },
    ],
  },
  {
    id: 3,
    title: 'When do you need this completed?',
    field: 'timeline',
    options: [
      { label: 'Fast-Track Delivery (< 3 Weeks)', desc: 'Priority express schedule to hit an urgent launch date or upcoming event.', value: 'urgent', basePrice: 2500 },
      { label: 'Standard Timeline (1-2 Months)', desc: 'Our regular steady pace structured across a balanced launch plan.', value: 'standard', basePrice: 0 },
      { label: 'Flexible / Ongoing Support', desc: 'A continuous, phased timeline broken down into smaller, regular updates over time.', value: 'flexible', basePrice: -800 },
    ],
  },
  {
    id: 4,
    title: 'What style of design best matches your brand?',
    field: 'design',
    options: [
      { label: 'Clean & Minimalist', desc: 'Simple, highly functional, and focus-driven layout that loads incredibly fast.', value: 'brutalist', basePrice: 0 },
      { label: 'Modern & Professional', desc: 'Polished, trustworthy appearance perfect for corporate, medical, or established service brands.', value: 'corporate', basePrice: 1200 },
      { label: 'Premium & High-Impact Custom', desc: 'Tailored graphic themes, eye-catching visual patterns, animations, and premium standout aesthetics.', value: 'custom', basePrice: 2800 },
    ],
  },
  {
    id: 5,
    title: 'Who is your main target audience?',
    field: 'audience',
    options: [
      { label: 'Local Community & Walk-In Clients', desc: 'Tailored for local neighborhoods looking for salons, shops, and nearby services.', value: 'local', basePrice: 450 },
      { label: 'Youth, Sports Fans & Trendy Buyers', desc: 'High-energy, visual-first content designed for sports clubs, apparel lines, and social shoppers.', value: 'subculture', basePrice: 1500 },
      { label: 'Corporate Clients & Other Businesses', desc: 'Professional B2B layouts streamlined for swift, polished business inquiries.', value: 'b2b', basePrice: 800 },
    ],
  },
  {
    id: 6,
    title: 'What level of advanced features do you need?',
    field: 'security',
    options: [
      { label: 'Standard Informational Security', desc: 'Safe web browsing, secure contact/inquiry forms, and standard layout protection.', value: 'standard_sec', basePrice: 0 },
      { label: 'E-Commerce, Booking & Member Accounts', desc: 'Secure online payment gates, client login profiles, and automated booking schedules.', value: 'high_sec', basePrice: 4000 },
    ],
  },
  {
    id: 7,
    title: 'Calculated Structural Estimate Architecture',
    field: 'summary',
    options: [], 
  },
];

export default function ProjectCalculator() {
  const { isDark } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, Option>>({});

  const monoFont = { fontFamily: "'Courier New', monospace" };
  const stepData = CALCULATOR_STEPS[currentStep];
  const totalSteps = CALCULATOR_STEPS.length;
  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleSelectOption = (field: string, option: Option) => {
    setSelections((prev) => ({ ...prev, [field]: option }));
  };

  const calculateTotalEstimate = () => {
    return Object.values(selections).reduce((sum, opt) => sum + opt.basePrice, 0);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setSelections({});
    setCurrentStep(0);
  };

  const currentSelection = selections[stepData?.field];

  return (
    <section
      id="calculator"
      className="py-40 border-b transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
        borderColor: isDark ? 'rgba(108, 176, 101, 0.15)' : 'rgba(108, 176, 101, 0.25)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-12 border-b border-dashed pb-6 ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#6CB065] mb-2" style={monoFont}>
            // PROJECT ESTIMATION MODULE
          </h2>
          <h3 className={`text-3xl sm:text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-950'}`} style={monoFont}>
            PROJECT CALCULATOR
          </h3>
        </div>

        {/* Wizard Box */}
        <div
          className="border rounded p-6 sm:p-10 transition-all duration-300 shadow-sm"
          style={{
            borderColor: isDark ? 'rgba(108, 176, 101, 0.2)' : 'rgba(108, 176, 101, 0.3)',
            backgroundColor: isDark ? 'rgba(10, 10, 10, 0.4)' : 'rgba(245, 245, 245, 0.5)',
          }}
        >
          {/* Progress Module */}
          <div className="mb-8">
            <div className={`flex justify-between items-center text-xs font-mono mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span className="text-[#6CB065]" style={monoFont}>STEP {currentStep + 1} OF {totalSteps}</span>
              <span>{progressPercent}% COMPLETE</span>
            </div>
            <div className={`w-full h-1 rounded-full overflow-hidden ${isDark ? 'bg-gray-800/40' : 'bg-gray-300'}`}>
              <div
                className="h-full bg-[#6CB065] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Dynamic Content Frame */}
          <div className="min-h-[280px]">
            <h4 className={`text-lg sm:text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`} style={monoFont}>
              {stepData.id.toString().padStart(2, '0')} // {stepData.title}
            </h4>

            {currentStep < totalSteps - 1 ? (
              /* Selection Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stepData.options.map((option) => {
                  const isSelected = currentSelection?.value === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelectOption(stepData.field, option)}
                      className={`text-left p-5 rounded border transition-all duration-200 group relative ${
                        isSelected
                          ? 'border-[#6CB065] bg-[#6CB065]/5'
                          : isDark 
                            ? 'border-gray-800 hover:border-[#6CB065]/60 bg-transparent' 
                            : 'border-gray-300 hover:border-[#6CB065]/60 bg-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`} style={monoFont}>
                          {option.label}
                        </span>
                        {isSelected && <CheckCircle2 size={16} className="text-[#6CB065] flex-shrink-0" />}
                      </div>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{option.desc}</p>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Summary Step Display */
              <div className="space-y-6">
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based on the custom budget parameters selected, our layout has generated the following preliminary freelance quote:
                </p>
                <div className={`border border-dashed p-6 rounded text-center sm:text-left ${isDark ? 'border-gray-800 bg-black/20' : 'border-gray-300 bg-gray-100'}`}>
                  <div className={`text-xs font-mono uppercase tracking-widest mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} style={monoFont}>
                    ESTIMATED CONTRACT VALUE
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-[#6CB065]" style={monoFont}>
                    R{calculateTotalEstimate().toLocaleString()}
                  </div>
                  <div className={`text-[10px] font-mono mt-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    * Rates aligned with standard competitive freelance milestones. Final confirmation applied upon brief assessment.
                  </div>
                </div>

                {/* Selection Breakdown Receipts */}
                <div className={`text-xs font-mono space-y-2 border-t pt-4 ${isDark ? 'border-gray-800/40' : 'border-gray-300'}`}>
                  <div className={`uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>// SELECTED CONFIGURATION PROFILE:</div>
                  {Object.entries(selections).map(([key, opt]) => (
                    <div key={key} className={`flex justify-between border-b pb-1 ${isDark ? 'text-gray-400 border-gray-900' : 'text-gray-600 border-gray-200'}`}>
                      <span className="capitalize">{key === 'security' ? 'Features' : key}:</span>
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{opt.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer Navigation */}
          <div className={`flex justify-between items-center mt-10 pt-6 border-t ${isDark ? 'border-gray-800/40' : 'border-gray-300'}`}>
            {currentStep > 0 ? (
              <button
                onClick={handleBack}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
                style={monoFont}
              >
                <ArrowLeft size={14} /> Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < totalSteps - 1 ? (
              <button
                disabled={!currentSelection}
                onClick={handleNext}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded border transition-all duration-200 ${
                  currentSelection
                    ? 'border-[#6CB065] text-[#6CB065] hover:bg-[#6CB065] hover:text-black cursor-pointer'
                    : isDark 
                      ? 'border-gray-800 text-gray-600 cursor-not-allowed' 
                      : 'border-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                style={monoFont}
              >
                Continue <ArrowRight size={14} />
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider border rounded transition-all cursor-pointer ${
                    isDark 
                      ? 'text-gray-400 border-gray-800 hover:text-white hover:border-gray-600' 
                      : 'text-gray-600 border-gray-300 hover:text-black hover:border-gray-500'
                  }`}
                  style={monoFont}
                >
                  Recalculate
                </button>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded text-black bg-[#6CB065] hover:shadow-[0_0_20px_rgba(108,176,101,0.3)] transition-all font-mono"
                  style={monoFont}
                >
                  Lock In Pricing Brief
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}