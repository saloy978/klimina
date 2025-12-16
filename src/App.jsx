import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Pricing from './components/Pricing';
import AboutTeacher from './components/AboutTeacher';
import ContactForm from './components/ContactForm';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-text-dark font-sans">
      {/* Navigation - Light themed like reference */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Navigation Links - Left/Center */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#pricing" className="nav-link">Senteninary</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* CTA Button - Right */}
          <a
            href="#contact"
            className="btn-outline bg-teal text-white border-teal hover:bg-teal-light hover:border-teal-light px-6 py-2.5 text-sm"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <WhyMe />
        <Pricing />
        <div id="about">
          <AboutTeacher />
        </div>
        <ContactForm />
      </main>

      {/* Footer - Teal themed */}
      <footer className="bg-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold mb-2">Екатерина Климина</h3>
              <p className="text-white/70 text-sm">Spanish Language Teacher</p>
            </div>

            <div className="flex gap-8 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
              <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Екатерина Климина. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
