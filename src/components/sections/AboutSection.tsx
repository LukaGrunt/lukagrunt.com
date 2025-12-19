import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cvData } from '../../data/cvData';

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Large Section Label */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-black text-h1 text-muted/20 sticky top-24">
              ABOUT
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Bio */}
            <div className="glass p-8 md:p-12 rounded-2xl">
              <h3 className="font-heading text-h2 text-text mb-6">
                {cvData.personalInfo.tagline}
              </h3>

              <p className="font-body text-lg text-text/80 leading-relaxed">
                {cvData.personalInfo.bio}
              </p>
            </div>

            {/* PROMINENT Twitter Creator Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-2 border-primary/50 bg-primary/5 backdrop-blur-xl rounded-2xl p-8 shadow-neon-orange hover:shadow-neon-orange transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Left: Twitter Stats */}
                <div className="flex items-center gap-6">
                  {/* Twitter Logo */}
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>

                  {/* Stats */}
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-heading text-4xl font-bold text-primary">
                        {cvData.personalInfo.twitterFollowers}
                      </span>
                      <span className="font-body text-sm text-muted">followers</span>
                    </div>
                    <a
                      href={cvData.personalInfo.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-text hover:text-primary transition-colors"
                    >
                      {cvData.personalInfo.twitterHandle}
                    </a>
                  </div>
                </div>

                {/* Right: Badges */}
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
                    <span className="font-body text-sm text-primary font-bold">
                      ✓ Monetization Enabled
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
                    <span className="font-body text-sm text-primary font-bold">
                      ✓ Creator Earnings
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href={cvData.personalInfo.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-text transition-colors group"
                >
                  <span>Follow for Web3 insights & builder vibes</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
