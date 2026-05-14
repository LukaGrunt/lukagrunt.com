import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card';

const projects = [
  {
    name: 'nabajk.si',
    url: 'https://nabajk.si',
    description: 'Cycling app built with AI. Plan rides, track routes, and connect with the local cycling community. Live on both App Store and Google Play.',
    platforms: [
      { label: 'App Store', icon: 'apple' },
      { label: 'Google Play', icon: 'android' },
      { label: 'Web', icon: 'web' },
    ],
    tag: 'Cycling App',
  },
  {
    name: 'vsk.si',
    url: 'https://vsk.si',
    description: 'Website and browser-based app for a local shooting club, built with AI. Handles club info, events, and member resources.',
    platforms: [
      { label: 'Web', icon: 'web' },
      { label: 'Browser App', icon: 'app' },
    ],
    tag: 'Shooting Club',
  },
];

function PlatformBadge({ label, icon }: { label: string; icon: string }) {
  const icons: Record<string, JSX.Element> = {
    apple: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    android: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.523 15.341c-.413 0-.75-.337-.75-.75s.337-.75.75-.75.75.337.75.75-.337.75-.75.75m-11.046 0c-.413 0-.75-.337-.75-.75s.337-.75.75-.75.75.337.75.75-.337.75-.75.75m11.4-6.441l1.408-2.438a.293.293 0 0 0-.107-.4.293.293 0 0 0-.4.107L17.35 8.65A8.71 8.71 0 0 0 12 7.4a8.71 8.71 0 0 0-5.35 1.25L5.222 6.169a.293.293 0 0 0-.4-.107.293.293 0 0 0-.107.4l1.408 2.438A8.8 8.8 0 0 0 3.4 14h17.2a8.8 8.8 0 0 0-2.723-5.1"/>
      </svg>
    ),
    web: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    app: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full font-body text-xs text-primary">
      {icons[icon]}
      {label}
    </span>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading font-black text-h1 text-text mb-4">
            BUILT WITH AI
          </h2>
          <p className="font-body text-lg text-muted max-w-2xl">
            Real apps shipped with AI as my co-pilot — from idea to production.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full flex flex-col">
                {/* Tag */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full font-body text-xs text-primary font-bold">
                    {project.tag}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-heading text-3xl font-bold text-text mb-3">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-text/70 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Platform Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.platforms.map(p => (
                    <PlatformBadge key={p.label} label={p.label} icon={p.icon} />
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-text transition-colors group"
                >
                  <span>Visit {project.name}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
