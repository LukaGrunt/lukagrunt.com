import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { cvData } from '../../data/cvData';

export default function HireMeSection() {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section
      id="hire-me"
      ref={ref}
      className="relative py-32 px-6 md:px-12 min-h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto text-center w-full">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading font-black text-display text-text mb-8 leading-none"
        >
          LET'S BUILD<br />SOMETHING
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xl text-muted mb-12 max-w-2xl mx-auto"
        >
          Looking for a communication expert who gets Web3? Let's talk about growing your community and moving markets.
        </motion.p>

        {/* CTA Buttons - Twitter PRIMARY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          {/* PRIMARY: DM on Twitter - Largest, Most Prominent */}
          <Button
            variant="primary"
            size="large"
            href={cvData.personalInfo.twitterUrl}
            target="_blank"
            className="text-xl px-16 py-5 shadow-neon-orange animate-glow-pulse"
          >
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>DM on X/Twitter</span>
            </div>
          </Button>

          {/* Secondary: Follow Button */}
          <Button
            variant="secondary"
            size="large"
            href={cvData.personalInfo.twitterUrl}
            target="_blank"
            className="flex items-center gap-2"
          >
            <span>Follow {cvData.personalInfo.twitterHandle}</span>
          </Button>

          {/* Tertiary: Download CV */}
          <Button
            variant="glass"
            size="large"
            href="/assets/luka-grunt-cv.pdf"
            download
          >
            Download Full CV
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center font-body text-sm text-muted"
        >
          <a
            href={cvData.personalInfo.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>{cvData.personalInfo.twitterHandle}</span>
          </a>
          <span className="hidden sm:block">•</span>
          <span>Open to full-time & contract work</span>
          <span className="hidden sm:block">•</span>
          <span className="text-primary">{cvData.personalInfo.twitterFollowers} followers</span>
        </motion.div>

        {/* Email - Last Option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 pt-8 border-t border-white/5"
        >
          <p className="font-body text-sm text-muted mb-2">Or send me an email</p>
          <a
            href="mailto:lukagrunt@gmail.com"
            className="font-body text-base text-text hover:text-primary transition-colors"
          >
            lukagrunt@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
