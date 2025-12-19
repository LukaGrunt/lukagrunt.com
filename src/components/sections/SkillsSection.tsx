import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cvData } from '../../data/cvData';

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 md:px-12 bg-foundation/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading font-black text-h1 text-text mb-4">
            SKILLS
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cvData.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="font-heading text-xl font-bold text-primary mb-6">
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map(skill => (
                  <li
                    key={skill}
                    className="font-body text-sm text-text/80 flex items-center gap-3 hover:text-text transition-colors cursor-default group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full group-hover:shadow-neon-orange transition-shadow" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="font-heading text-lg font-bold text-muted mb-6">
            TOOLS & PLATFORMS
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {cvData.tools.map(tool => (
              <span
                key={tool.name}
                className="px-4 py-2 bg-surface/50 border border-muted/20 rounded-lg font-body text-sm text-text/70 hover:border-primary/50 hover:text-primary transition-all"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
