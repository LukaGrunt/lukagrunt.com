import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card';
import { cvData } from '../../data/cvData';

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading font-black text-h1 text-text mb-4">
            EXPERIENCE
          </h2>
          <p className="font-body text-lg text-muted max-w-2xl">
            6+ years driving growth in Bitcoin/Web3 communities, plus a decade of military leadership.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {cvData.workExperience.map((job, index) => {
            // Featured jobs get larger grid spans
            const gridSpan = job.highlight
              ? 'md:col-span-4'
              : index % 3 === 0
                ? 'md:col-span-3'
                : 'md:col-span-2';

            return (
              <motion.div
                key={job.id}
                className={gridSpan}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  {/* Highlight Badge */}
                  {job.highlight && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full font-body text-xs text-primary font-bold">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Company & Role */}
                  <div className="mb-4">
                    <h3 className="font-heading text-2xl font-bold text-text mb-1">
                      {job.company}
                    </h3>
                    <p className="font-body text-lg text-primary">
                      {job.role}
                    </p>
                  </div>

                  {/* Duration */}
                  <p className="font-body text-sm text-muted mb-4">
                    {job.duration}
                  </p>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {job.description.map((item, i) => (
                      <li key={i} className="font-body text-sm text-text/70 flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full font-body text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
