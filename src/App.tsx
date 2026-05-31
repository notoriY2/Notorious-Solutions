import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import ProjectCalculator from './components/ProjectCalculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';

function AppShell() {
  const { isDark } = useTheme();
  const location = useLocation();

  // Watch for internal routing cross-page hashes and top scroll configurations
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Find the element target on the homepage matching the routing hash
      const targetElement = document.getElementById(location.hash.replace('#', ''));
      if (targetElement) {
        // Timeout lets the virtual DOM fully stabilize context before recalculating offsets
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else if (!location.hash) {
      // If diving deeper into a service sub-route, snap instantly to the top of screen
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div
      className="transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
        color: isDark ? '#e5e5e5' : '#1a1a1a',
      }}
    >
      <Navbar />

      <main>
        <Routes>
          {/* Home page - all sections */}
          <Route
            path="/"
            element={
              <>
                <div id="home"><Hero /></div>
                <div id="services"><Services /></div>
                <div id="showcase"><Showcase /></div>
                <div id="why-us"><WhyUs /></div>
                <div id="team"><Team /></div>
                
                {/* Interactive Project Calculator section */}
                <div id="calculator"><ProjectCalculator /></div>
                
                {/* FAQ Component positioned cleanly ABOVE Contact */}
                <div id="faq"><FAQ /></div>
                
                {/* Manual Intake Form */}
                <div id="contact"><Contact /></div>
              </>
            }
          />

          {/* Service detail pages */}
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </Router>
  );
}