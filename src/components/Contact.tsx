import { useState, type FormEvent } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

type ProjectType = '' | 'software' | 'mobile' | 'wix' | 'design';

interface FormState {
  name: string;
  email: string;
  brief: string;
  projectType: ProjectType;
}

interface FieldValidation {
  name: 'valid' | 'error' | 'untouched';
  email: 'valid' | 'error' | 'untouched';
  brief: 'valid' | 'error' | 'untouched';
  projectType: 'valid' | 'error' | 'untouched';
}

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: 'software', label: 'Software Development' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'wix', label: 'Wix Site' },
  { value: 'design', label: 'Graphic Design' },
];

const SOCIALS = [
  { icon: Github, href: 'https://github.com/notoriY2', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mosa-potsane-b029b7214/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/notorious.y2/', label: 'Instagram' },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateField(
  field: keyof FormState,
  value: string,
): 'valid' | 'error' {
  if (field === 'email') return validateEmail(value) ? 'valid' : 'error';
  if (field === 'projectType') return value ? 'valid' : 'error';
  return value.trim().length >= 2 ? 'valid' : 'error';
}

export default function Contact() {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    brief: '',
    projectType: '',
  });
  
  const [validation, setValidation] = useState<FieldValidation>({
    name: 'untouched',
    email: 'untouched',
    brief: 'untouched',
    projectType: 'untouched',
  });

  const handleChange = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (validation[field] !== 'untouched') {
      setValidation(prev => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setValidation(prev => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const newValidation: FieldValidation = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      brief: validateField('brief', form.brief),
      projectType: validateField('projectType', form.projectType),
    };

    setValidation(newValidation);

    const allValid = Object.values(newValidation).every(v => v === 'valid');
    if (!allValid) return;

    setIsSubmitting(true);

    try {
      // 🚀 Real payload submission dispatch to Netlify form pipeline handler
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ 
          "form-name": "contact", 
          ...form 
        }).toString(),
      });

      setSubmitted(true);
      setForm({ name: '', email: '', brief: '', projectType: '' });
      setValidation({ name: 'untouched', email: 'untouched', brief: 'untouched', projectType: 'untouched' });
      
      // Auto reset view state card after 7 seconds
      setTimeout(() => setSubmitted(false), 7000);
    } catch (err) {
      setSubmitError('System network error. Please try again or reach out directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const borderClass = (state: 'valid' | 'error' | 'untouched') => {
    if (state === 'valid') return 'border-[#6CB065] shadow-[0_0_8px_rgba(108,176,101,0.2)]';
    if (state === 'error') return 'border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]';
    return isDark ? 'border-white/10' : 'border-black/10';
  };

  const inputStyle = (state: 'valid' | 'error' | 'untouched') => ({
    backgroundColor: isDark ? 'rgba(18,18,18,0.6)' : 'rgba(245,245,245,0.5)',
    color: isDark ? '#e5e5e5' : '#1a1a1a',
  });

  return (
    <section
      id="contact"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[60px]"
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="text-sm tracking-widest uppercase text-[#6CB065] mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: isDark ? '#e5e5e5' : '#1a1a1a',
              fontFamily: "'Courier New', monospace",
            }}
          >
            Start a Project
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                style={{
                  color: isDark ? '#e5e5e5' : '#1a1a1a',
                  fontFamily: "'Courier New', monospace",
                }}
              >
                Notorious Solutions
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: isDark ? '#a3a3a3' : '#525252' }}
              >
                Engineering software that ships. Reach out and let's build
                something remarkable together.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Location Link */}
              <a 
                href="https://maps.google.com/?q=South+Africa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group w-fit transition-colors duration-200"
              >
                <MapPin size={20} className="text-[#6CB065] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p 
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 group-hover:text-[#6CB065] ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`} 
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    Location
                  </p>
                  <p className={`text-sm mt-1 transition-colors duration-200 group-hover:text-[#6CB065] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    South Africa
                  </p>
                </div>
              </a>

              {/* Email Link */}
              <a 
                href="mailto:notori.y2@gmail.com"
                className="flex items-start gap-4 group w-fit transition-colors duration-200"
              >
                <Mail size={20} className="text-[#6CB065] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p 
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 group-hover:text-[#6CB065] ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`} 
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    Email
                  </p>
                  <p className={`text-sm mt-1 transition-colors duration-200 group-hover:text-[#6CB065] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    notori.y2@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Link */}
              <a 
                href="tel:+27621871095"
                className="flex items-start gap-4 group w-fit transition-colors duration-200"
              >
                <Phone size={20} className="text-[#6CB065] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p 
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 group-hover:text-[#6CB065] ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`} 
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    Phone
                  </p>
                  <p className={`text-sm mt-1 transition-colors duration-200 group-hover:text-[#6CB065] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    +27 62 187 1095
                  </p>
                </div>
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              {SOCIALS.map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded border transition-all duration-300 hover:bg-[#6CB065] hover:border-[#6CB065] hover:text-white group"
                    style={{
                      borderColor: isDark ? 'rgba(108, 176, 101, 0.3)' : 'rgba(108, 176, 101, 0.4)',
                      color: isDark ? '#a3a3a3' : '#525252',
                    }}
                    aria-label={social.label}
                  >
                    <Icon size={20} className="group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {submitted ? (
              <div
                className="rounded-lg border p-8 text-center flex flex-col items-center gap-4 animate-fadeIn"
                style={{
                  backgroundColor: isDark ? 'rgba(18, 18, 18, 0.6)' : 'rgba(245, 245, 245, 0.5)',
                  borderColor: '#6CB065',
                }}
              >
                <CheckCircle size={48} className="text-[#6CB065]" />
                <h3 className="text-xl font-bold" style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', fontFamily: "'Courier New', monospace" }}>
                  Message Sent
                </h3>
                <p className="text-sm" style={{ color: isDark ? '#a3a3a3' : '#525252' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-5" 
                noValidate 
                name="contact" 
                data-netlify="true"
              >
                {/* Hidden field element for semantic recognition in Netlify React index mappings */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Form Level Error Alert */}
                {submitError && (
                  <div className="flex items-center gap-2 p-3 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: isDark ? '#a3a3a3' : '#525252', fontFamily: "'Courier New', monospace" }}>Name</label>
                  <div className="relative">
                    <input type="text" name="name" disabled={isSubmitting} value={form.name} onChange={e => handleChange('name', e.target.value)} onBlur={() => handleBlur('name')} placeholder="Your full name" className={`w-full px-4 py-3 rounded border text-sm outline-none transition-all duration-300 disabled:opacity-50 ${borderClass(validation.name)}`} style={inputStyle(validation.name)} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: isDark ? '#a3a3a3' : '#525252', fontFamily: "'Courier New', monospace" }}>Email</label>
                  <div className="relative">
                    <input type="email" name="email" disabled={isSubmitting} value={form.email} onChange={e => handleChange('email', e.target.value)} onBlur={() => handleBlur('email')} placeholder="your@email.com" className={`w-full px-4 py-3 rounded border text-sm outline-none transition-all duration-300 disabled:opacity-50 ${borderClass(validation.email)}`} style={inputStyle(validation.email)} />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: isDark ? '#a3a3a3' : '#525252', fontFamily: "'Courier New', monospace" }}>
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {PROJECT_TYPES.map(pt => {
                      const isSelected = form.projectType === pt.value;
                      return (
                        <button
                          key={pt.value}
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => handleChange('projectType', pt.value)}
                          onBlur={() => handleBlur('projectType')}
                          className={`px-3 py-2.5 rounded border text-xs font-semibold tracking-wide transition-all duration-300 disabled:opacity-50 ${
                            isSelected
                              ? 'bg-[#6CB065]/15 border-[#6CB065] text-[#6CB065] shadow-[0_0_8px_rgba(108,176,101,0.2)]'
                              : validation.projectType === 'error'
                              ? 'border-red-500 text-red-400 animate-pulse'
                              : isDark
                              ? 'border-white/20 text-gray-400 hover:border-white/40'
                              : 'border-black/20 text-gray-500 hover:border-black/40'
                          }`}
                          style={{ fontFamily: "'Courier New', monospace" }}
                        >
                          {pt.label}
                        </button>
                      );
                    })}
                  </div>
                  {/* Keep selection values synced with form parsing */}
                  <input type="hidden" name="projectType" value={form.projectType} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: isDark ? '#a3a3a3' : '#525252', fontFamily: "'Courier New', monospace" }}>Project Brief</label>
                  <textarea name="brief" disabled={isSubmitting} value={form.brief} onChange={e => handleChange('brief', e.target.value)} onBlur={() => handleBlur('brief')} placeholder="Describe your project..." rows={4} className={`w-full px-4 py-3 rounded border text-sm outline-none transition-all duration-300 resize-none disabled:opacity-50 ${borderClass(validation.brief)}`} style={inputStyle(validation.brief)} />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-semibold tracking-wide text-white bg-[#6CB065] hover:shadow-[0_0_20px_rgba(108,176,101,0.4)] disabled:bg-neutral-600 disabled:hover:shadow-none transition-all duration-300 mt-2" 
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  <Send size={18} className={isSubmitting ? "animate-ping" : ""} /> 
                  {isSubmitting ? "Sending Asset..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
