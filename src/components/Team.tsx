import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin } from 'lucide-react';
// Import the image asset so Vite can bundle and create a valid URL token
import userImage from '../assets/96.jpeg'; 
import mosa from '../assets/102.jpeg';
import jr from '../assets/100.jpeg';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string; // This will now accept the bundled module token directly
  github?: string;
  linkedin?: string;
}

const TEAM: TeamMember[] = [
  {
    id: 'lead-operator',
    name: 'Mosa Potsane', 
    role: 'Principal Engineer & Visual Architect',
    image: mosa, // reference the imported variable
    github: 'https://github.com/notoriY2',
    linkedin: 'https://www.linkedin.com/in/mosa-potsane-b029b7214/',
  },
  {
    id: 'growth-exposure',
    name: 'Sinalo Madikane',
    role: 'Growth Strategist & Exposure Lead',
    image: userImage, 
  },
  {
    id: 'social-systems',
    name: 'Sinethemba Matle',
    role: 'Social Systems & Platform Manager',
    image: jr, 
    linkedin: 'https://www.linkedin.com/in/sinethemba-matle-185309394/',
  },
  {
    id: 'creative-ideation',
    name: 'Siphosethu Mlenzana',
    role: 'Creative Conceptualist & Copy Director',
    image: userImage,
  },
];

export default function Team() {
  const { isDark } = useTheme();

  return (
    <section
      id="team"
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
            // THE CREW
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: isDark ? '#e5e5e5' : '#1a1a1a',
              fontFamily: "'Courier New', monospace",
            }}
          >
            Meet the Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM.map(member => (
            <div
              key={member.id}
              className="group relative rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,176,101,0.2)] hover:-translate-y-1"
              style={{
                backgroundColor: isDark
                  ? 'rgba(18, 18, 18, 0.6)'
                  : 'rgba(245, 245, 245, 0.4)',
                borderColor: isDark
                  ? 'rgba(108, 176, 101, 0.2)'
                  : 'rgba(108, 176, 101, 0.3)',
              }}
            >
              {/* Photo */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{
                    background: isDark
                      ? 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                      : 'linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 60%)',
                  }}
                />

                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-black/60 hover:bg-[#6CB065] transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-black/60 hover:bg-[#6CB065] transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <Linkedin size={16} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info Block */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold tracking-wide"
                  style={{
                    color: isDark ? '#e5e5e5' : '#1a1a1a',
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{
                    color: '#6CB065',
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
