import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from '../UI/Timeline';
import GradientText from '../UI/GradientText';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const timelineItems = [
  {
    year: '2019',
    title: 'First Venture -- Digital Agency',
    description:
      'Founded a boutique digital agency at 22, bootstrapped to profitability within 18 months. Delivered brand and web strategy for over 30 clients across Europe.',
  },
  {
    year: '2021',
    title: 'Series A -- SaaS Platform',
    description:
      'Co-founded a B2B SaaS platform automating operations for mid-market logistics companies. Raised $4.2M Series A and grew to 120+ enterprise clients.',
  },
  {
    year: '2022',
    title: 'Exit & Board Advisor',
    description:
      'Successfully exited the SaaS venture via strategic acquisition. Transitioned into an advisory role, mentoring three early-stage startups through product-market fit.',
  },
  {
    year: '2023',
    title: 'Investment Fund -- EV Capital',
    description:
      'Launched EV Capital, a pre-seed fund focused on deep-tech and climate innovation. Deployed $12M across 18 portfolio companies in the first two years.',
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description:
      'Expanded operations to North America and Southeast Asia. Named to Forbes 30 Under 40 and keynoted at Web Summit, TechCrunch Disrupt, and Davos fringe events.',
  },
];

const values = [
  {
    icon: '◈',
    title: 'First-Principles Thinking',
    description:
      'Every problem deserves a blank canvas. I strip assumptions to their foundations and rebuild from what is fundamentally true.',
  },
  {
    icon: '◉',
    title: 'Radical Ownership',
    description:
      'Leadership means owning outcomes -- successes and failures equally. No excuses, no deflection. Accountability is the foundation of trust.',
  },
  {
    icon: '◎',
    title: 'Long-Term Vision',
    description:
      'Short-term thinking is the enemy of exceptional work. I build for decades, not quarters -- even when the market rewards impatience.',
  },
  {
    icon: '◇',
    title: 'Human-Centred Execution',
    description:
      'Technology is only as powerful as the people it serves. Every product, fund, and initiative starts and ends with the humans it affects.',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="about-section-label">
      <span className="about-label-line" />
      <span className="about-label-text">{children}</span>
    </div>
  );
}

function ValueCard({ icon, title, description, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="value-card glass-card"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      custom={index}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <span className="value-icon">{icon}</span>
      <h4 className="value-title">{title}</h4>
      <p className="value-description">{description}</p>
    </motion.div>
  );
}

const About = () => {
  const [introRef, introInView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section about" id="about">
      <div className="container">

        {/* ── Intro ── */}
        <motion.div
          ref={introRef}
          className="about-intro"
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div className="about-intro-left" variants={fadeLeft}>
            <SectionLabel>About</SectionLabel>
            <h2 className="about-heading">
              Building companies<br />
              that <GradientText as="span" animate={true}>matter</GradientText>.
            </h2>
            <p className="about-bio">
              I'm <strong>Abdulmalik Abdulmalik</strong> -- entrepreneur, investor, and builder with over a
              decade of experience turning ideas into market-defining ventures. I've founded,
              scaled, and exited businesses across SaaS, digital media, and deep-tech, deploying
              capital and expertise from London to Singapore.
            </p>
            <p className="about-bio">
              My work sits at the intersection of technology, design, and strategy -- where
              ambitious vision meets disciplined execution. I believe the most important companies
              aren't built by the most talented people, but by those most committed to the problem.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">3</span>
                <span className="highlight-label">Companies Founded</span>
              </div>
              <div className="highlight-divider" />
              <div className="highlight-item">
                <span className="highlight-number">1</span>
                <span className="highlight-label">Successful Exit</span>
              </div>
              <div className="highlight-divider" />
              <div className="highlight-item">
                <span className="highlight-number">18</span>
                <span className="highlight-label">Portfolio Companies</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-intro-right" variants={fadeRight}>
            <div className="portrait-wrapper">
              <div className="portrait-frame">
                <div className="portrait-placeholder">
                  <span className="portrait-initials">A.A.</span>
                  <div className="portrait-ring portrait-ring--1" />
                  <div className="portrait-ring portrait-ring--2" />
                  <div className="portrait-ring portrait-ring--3" />
                </div>
              </div>
              <div className="portrait-badge glass-card">
                <span className="badge-icon">◈</span>
                <div>
                  <p className="badge-label">Currently based in</p>
                  <p className="badge-value">Abuja, Nigeria &amp; Kwara, Nigeria</p>
                </div>
              </div>
              <div className="portrait-badge portrait-badge--bottom glass-card">
                <span className="badge-icon">◉</span>
                <div>
                  <p className="badge-label">Open to</p>
                  <p className="badge-value">Advisory &amp; Co-founding</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Values ── */}
        <motion.div
          ref={valuesRef}
          className="about-values"
          initial="hidden"
          animate={valuesInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="about-values-header">
            <SectionLabel>Principles</SectionLabel>
            <h3 className="values-heading">What I believe in</h3>
          </motion.div>

          <div className="values-grid">
            {values.map((v, i) => (
              <ValueCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          ref={timelineRef}
          className="about-timeline-section"
          initial="hidden"
          animate={timelineInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <SectionLabel>Journey</SectionLabel>
          <h3 className="values-heading" style={{ marginBottom: '5rem' }}>A decade of building</h3>
          <Timeline items={timelineItems} />
        </motion.div>

      </div>
    </section>
  );
};

export default About;