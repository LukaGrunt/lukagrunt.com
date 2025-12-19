import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { cvData } from '../../data/cvData';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl w-full">
        {/* Animated Name */}
        <motion.h1
          className="font-heading font-black text-display text-text mb-6 leading-none tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          LUKA<br />GRUNT
        </motion.h1>

        {/* Subtitle with Gradient */}
        <motion.p
          className="font-heading text-h2 text-gradient-orange mb-8 max-w-3xl whitespace-nowrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Communication Expert × Vibe Coder
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="font-body text-xl text-muted mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          6+ years in Bitcoin/Web3 • Former Staff Sergeant • Building communities that move markets
        </motion.p>

        {/* CTA Buttons - Twitter PRIMARY */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          {/* PRIMARY: Twitter Follow Button with Follower Count */}
          <Button
            variant="primary"
            size="large"
            href={cvData.personalInfo.twitterUrl}
            target="_blank"
            className="flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>Follow on X ({cvData.personalInfo.twitterFollowers})</span>
          </Button>

          {/* Hire Me */}
          <Button
            variant="secondary"
            size="large"
            href="#hire-me"
          >
            Hire Me
          </Button>

          {/* Download CV */}
          <Button
            variant="glass"
            size="large"
            href="/assets/luka-grunt-cv.pdf"
            download
          >
            Download CV
          </Button>
        </motion.div>

        {/* Twitter Handle Display */}
        <motion.div
          className="mt-8 flex items-center gap-2 text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="font-body text-sm">Creator Profile: </span>
          <a
            href={cvData.personalInfo.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-primary hover:underline"
          >
            {cvData.personalInfo.twitterHandle}
          </a>
          <span className="font-body text-xs text-muted">• Monetization Enabled</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
