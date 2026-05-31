import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'How long does it take to complete a website or branding project?',
    answer: 'A standard business website or branding kit typically takes about 7 business days from the moment we agree on the layout direction. If you have an urgent deadline—like an upcoming product launch or a football match event—we can fast-track simple setups within 48 hours.',
  },
  {
    question: 'Do you offer ongoing updates and technical support after launch?',
    answer: 'Yes! We look after your system post-launch so you can focus on running your business. Whether you need to update salon booking slots, add a new perfume product range to your online store, change football fixtures, or refresh promotional graphics, we offer simple monthly maintenance retainers.',
  },
  {
    question: 'Will my website work properly on mobile phones and tablets?',
    answer: 'Absolutely. Every single layout we design is completely mobile-friendly. Your clients will be able to effortlessly book services, view product catalogs, or check team updates across all iPhones, Android devices, and desktop screens.',
  },
  {
    question: 'How accurate is the price estimator tool on this site?',
    answer: 'The calculator provides a realistic baseline quote using standard competitive freelance rates. Once we have a brief chat to confirm exactly what features your shop or club needs, we will lock in a final, fixed quote before starting any work.',
  },
  {
    question: 'Can my system handle secure online payments and client bookings safely?',
    answer: 'Yes, 100%. We set up highly secure checkout pipelines using reliable payment portals (like PayFast or Yoco) and protected booking engines. Your customer details, order invoices, and appointment systems are guarded using modern web safety standards.',
  },
];

export default function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const monoFont = { fontFamily: "'Courier New', monospace" };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Component Header Block */}
        <div className={`text-center sm:text-left mb-16 border-b border-dashed pb-8 ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#6CB065] mb-2" style={monoFont}>
            // CLIENT KNOWLEDGE BASE
          </h2>
          <h3 className={`text-3xl sm:text-4xl font-black tracking-wider ${isDark ? 'text-white' : 'text-gray-950'}`} style={monoFont}>
            FREQUENTLY ASKED QUESTIONS
          </h3>
        </div>

        {/* Brutalist Accordion Stack */}
        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#6CB065]' 
                    : isDark 
                      ? 'border-gray-800/80 hover:border-[#6CB065]/60' 
                      : 'border-gray-300 hover:border-[#6CB065]/60'
                }`}
                style={{
                  backgroundColor: isDark ? 'rgba(5, 5, 5, 0.3)' : 'rgba(252, 252, 252, 0.4)',
                }}
              >
                {/* Clickable Header Section */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center gap-4 text-left p-5 sm:p-6 transition-colors duration-200 group relative cursor-pointer"
                >
                  {/* Left Side Styled Plus/Minus Toggle Icon */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#6CB065] border-[#6CB065] text-black'
                        : isDark
                          ? 'border-gray-800 text-[#6CB065] group-hover:border-[#6CB065] group-hover:bg-[#6CB065]/5'
                          : 'border-gray-300 text-[#6CB065] group-hover:border-[#6CB065] group-hover:bg-[#6CB065]/5'
                    }`}
                  >
                    {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                  </span>

                  <span
                    className={`text-sm sm:text-base font-bold tracking-wide transition-colors duration-200 ${
                      isOpen 
                        ? 'text-[#6CB065]' 
                        : isDark 
                          ? 'text-white group-hover:text-[#6CB065]' 
                          : 'text-gray-900 group-hover:text-[#6CB065]'
                    }`}
                    style={monoFont}
                  >
                    {item.question}
                  </span>
                </button>

                {/* Expandable Panel Wrapper */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`p-5 sm:p-6 pt-0 border-t ml-12 ${isDark ? 'border-gray-900/60' : 'border-gray-200'}`}>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}