import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ opacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-glass' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-end">
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            <a href="#about" className="text-muted hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-muted hover:text-primary transition-colors">
              Skills
            </a>

            {/* Twitter Icon Link */}
            <a
              href="https://x.com/LukaGrunt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="X/Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href="#hire-me"
              className="px-6 py-2 bg-primary text-foundation rounded-full font-bold hover:shadow-neon-orange transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button - Twitter + Hire Me */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="https://x.com/LukaGrunt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="X/Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="#hire-me"
              className="px-4 py-2 bg-primary text-foundation rounded-full text-sm font-bold"
            >
              Hire
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
