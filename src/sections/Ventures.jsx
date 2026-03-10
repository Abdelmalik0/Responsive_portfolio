import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from '../UI/GradientText';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const ventures = [
  {
    id: 1,
    name: 'Arclight Digital',
    category: 'Digital Agency',
    year: '2019 - 2020',
    status: 'Exited',
    statusColor: '#d4af37',
    role: 'Founder & CEO',
    description:
      'Boutique digital strategy and brand studio serving scale-ups and corporates across the UK and Germany. Delivered over 80 projects, from identity systems to full-stack web platforms.',
    metrics: [
      { label: `Clients`, value: `80+` },
      { label: `Team`, value: `14` },
      { label: `Revenue`, value: `£2.1M` },
    ],
    tags: ['Branding', 'Web', 'Strategy'],
    accent: 'var(--accent-gold)',
  },
  {
    id: 2,
    name: 'FlowOps',
    category: 'B2B SaaS',
    year: '2020 - 2022',
    status: 'Acquired',
    statusColor: '#e8b4b8',
    role: 'Co-Founder & CPO',
    description:
      'Operational automation platform for mid-market logistics and supply-chain businesses. Integrated with 40+ warehouse management systems and reduced manual work by an average of 60%.',
    metrics: [
      { label: `Enterprise Clients`, value: `120+` },
      { label: `ARR at Exit`, value: `$3.8M` },
      { label: `Series A`, value: `$4.2M` },
    ],
    tags: ['SaaS', 'Logistics', 'Automation'],
    accent: 'var(--accent-rose)',
  },
  {
    id: 3,
    name: 'EV Capital',
    category: 'Venture Fund',
    year: '2022 - Present',
    status: 'Active',
    statusColor: '#7ec8a0',
    role: 'General Partner',
    description:
      'Pre-seed fund backing deep-tech and climate-tech founders at the earliest stage. Portfolio spans carbon capture, synthetic biology, and AI infrastructure -- 18 companies across 9 countries.',
    metrics: [
      { label: `Fund Size`, value: `$12M` },
      { label: `Portfolio Cos.`, value: `18` },
      { label: `Avg. Cheque`, value: `$450K` },
    ],
    tags: ['Deep-Tech', 'Climate', 'Pre-Seed'],
    accent: '#7ec8a0',
  },
  {
    id: 4,
    name: 'Meridian Labs',
    category: 'AI Research Studio',
    year: '2022 - Present',
    status: 'Active',
    statusColor: '#7ec8a0',
    role: 'Co-Founder & Executive Chair',
    description:
      'Applied AI research studio building proprietary models for materials discovery and drug-target identification. In partnership with two Russell Group universities. Currently in Series A process.',
    metrics: [
      { label: `Research Partners`, value: `3` },
      { label: `Patents Filed`, value: `6` },
      { label: `Seed Raised`, value: `$2.6M` },
    ],
    tags: ['AI', 'BioTech', 'R&D'],
    accent: 'var(--accent-copper)',
  },
  {
    id: 5,
    name: 'Strata Living',
    category: 'PropTech',
    year: '2025 - Present',
    status: 'Active',
    statusColor: '#7ec8a0',
    role: 'Investor & Advisor',
    description:
      'Fractional ownership platform for premium residential real estate in Southeast Asia. Democratising access to high-yield property assets through blockchain-based title tokenisation.',
    metrics: [
      { label: `Properties`, value: `34` },
      { label: `AUM`, value: `$18M` },
      { label: `Investors`, value: `1,200+` },
    ],
    tags: ['PropTech', 'Web3', 'SEA'],
    accent: 'var(--accent-silver)',
  },
  {
    id: 6,
    name: 'Verdant Systems',
    category: 'Climate Tech',
    year: '2025 - Present',
    status: 'Stealth',
    statusColor: '#b87333',
    role: 'Co-Founder',
    description:
      'Building next-generation direct air capture hardware with a novel electrochemical sorbent process. Targeting sub-$100/tonne cost structures at scale. Currently in stealth mode.',
    metrics: [
      { label: `CO₂ Capture Target`, value: `1Mt/yr` },
      { label: `Team`, value: `8` },
      { label: `Pre-Seed`, value: `$1.1M` },
    ],
    tags: ['Climate', 'Hardware', 'Carbon'],
    accent: '#b8d4a0',
  },
];

function VentureCard({ venture, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="venture-card glass-card"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{ '--card-accent': venture.accent }}
    >
      <div className="vc-top">
        <div className="vc-meta">
          <span className="vc-category">{venture.category}</span>
          <span className="vc-year">{venture.year}</span>
        </div>
        <span
          className="vc-status"
          style={{ color: venture.statusColor, borderColor: venture.statusColor + '44' }}
        >
          <span
            className="vc-status-dot"
            style={{ background: venture.statusColor }}
          />
          {venture.status}
        </span>
      </div>

      <h3 className="vc-name">{venture.name}</h3>
      <p className="vc-role">{venture.role}</p>
      <p className="vc-description">{venture.description}</p>

      <div className="vc-metrics">
        {venture.metrics.map((m) => (
          <div className="vc-metric" key={m.label}>
            <span className="vc-metric-value">{m.value}</span>
            <span className="vc-metric-label">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="vc-tags">
        {venture.tags.map((t) => (
          <span className="vc-tag" key={t}>{t}</span>
        ))}
      </div>

      <motion.div
        className="vc-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="vent-label">
      <span className="vent-label-line" />
      <span className="vent-label-text">{children}</span>
    </div>
  );
}

const Ventures = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section ventures" id="ventures">
      <div className="container">

        <motion.div
          ref={headerRef}
          className="ventures-header"
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Ventures</SectionLabel>
            <h2 className="ventures-heading">
              Companies I've <GradientText as="span">built &amp; backed</GradientText>.
            </h2>
          </motion.div>
          <motion.p className="ventures-intro" variants={fadeUp}>
            From bootstrapped agencies to venture-backed deep-tech studios, each venture
            represents a distinct thesis on where value is created -- and how to capture it.
          </motion.p>
        </motion.div>

        <div className="ventures-grid">
          {ventures.map((v, i) => (
            <VentureCard key={v.id} venture={v} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ventures;