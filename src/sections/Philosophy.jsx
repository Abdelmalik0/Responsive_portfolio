import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from '../UI/GradientText';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const tenets = [
  {
    number: '01',
    title: 'Urgency is a competitive advantage.',
    body: 'Speed compounds. Every week of delay is a week a competitor has to learn, iterate, and close the gap. I move fast by design -- not recklessly, but with the understanding that imperfect motion beats perfect inaction every time.',
  },
  {
    number: '02',
    title: 'Distribution beats product.',
    body: 'The graveyard of business is full of great products nobody found. I invest first in understanding where customers live and how to reach them reliably -- then build what they actually need.',
  },
  {
    number: '03',
    title: 'The best founders obsess over the problem, not the solution.',
    body: 'Technology changes. Market structures change. The problem is the constant. When you understand a problem at a level nobody else does, the right solution becomes obvious -- and defensible.',
  },
  {
    number: '04',
    title: 'Culture is the only moat that compounds unconditionally.',
    body: 'Patents expire. Algorithms get replicated. Talent gets poached. But a culture of ownership, curiosity, and craft -- genuinely lived -- is exponential. It attracts the people who make everything else possible.',
  },
  {
    number: '05',
    title: 'Capital is a tool, not a goal.',
    body: "I've raised and deployed capital across three decades of market cycles. The most valuable thing money buys isn't runway -- it's optionality. Use it to learn faster than anyone else.",
  },
];

const recognition = [
  { outlet: `Forbes`, description: `30 Under 40 -- Technology & Innovation` },
  { outlet: `Financial Times`, description: `Future of Finance -- Top 25 Disruptors` },
  { outlet: `TechCrunch`, description: `Disrupt London -- Keynote Speaker, 2022` },
  { outlet: `Web Summit`, description: `Alpha Stage Judge & Mentor, 2021-2023` },
  { outlet: `Wired UK`, description: `"The New Builders" -- Feature Profile` },
];

function SectionLabel({ children }) {
  return (
    <div className="phil-label">
      <span className="phil-label-line" />
      <span className="phil-label-text">{children}</span>
    </div>
  );
}

function Tenet({ number, title, body, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="tenet"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
    >
      <span className="tenet-number">{number}</span>
      <div className="tenet-body">
        <h4 className="tenet-title">{title}</h4>
        <p className="tenet-text">{body}</p>
      </div>
    </motion.div>
  );
}

const Philosophy = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [quoteRef, quoteInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [pressRef, pressInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section philosophy" id="philosophy">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="phil-header"
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeLeft}>
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="phil-heading">
              How I think about<br />
              <GradientText as="span">building things</GradientText>.
            </h2>
          </motion.div>
          <motion.p className="phil-intro" variants={fadeUp}>
            These aren't abstract ideals. They're the lessons carved out of failed launches,
            surprising exits, and a decade of watching what actually separates enduring
            companies from expensive experiments.
          </motion.p>
        </motion.div>

        {/* Pull Quote */}
        <motion.div
          ref={quoteRef}
          className="phil-quote-block"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={quoteInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="phil-quote-mark">"</span>
          <blockquote className="phil-quote">
            The goal is not to build a company. The goal is to build something that
            wouldn't exist without you -- and that the world is measurably better for having.
          </blockquote>
          <cite className="phil-cite">-- Abdulmalik Abdulmalik</cite>
        </motion.div>

        {/* Tenets */}
        <div className="tenets-list">
          {tenets.map((t, i) => (
            <Tenet key={t.number} {...t} index={i} />
          ))}
        </div>

        {/* Recognition */}
        <motion.div
          ref={pressRef}
          className="recognition"
          initial="hidden"
          animate={pressInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Recognition</SectionLabel>
            <h3 className="recognition-heading">As seen in &amp; featured by</h3>
          </motion.div>

          <motion.div className="recognition-grid" variants={stagger}>
            {recognition.map((r, i) => (
              <motion.div
                key={r.outlet}
                className="recognition-item glass-card"
                variants={fadeUp}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="rec-outlet">{r.outlet}</span>
                <span className="rec-desc">{r.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;