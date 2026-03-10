import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from '../UI/GradientText';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const tabs = ['Speaking', 'Advisory', 'Writing'];

const speaking = [
  {
    event: 'TechCrunch Disrupt',
    location: 'London, UK',
    year: '2022',
    topic: 'The Anatomy of a Pre-Seed Investment Decision',
    type: 'Keynote',
  },
  {
    event: 'Web Summit',
    location: 'Lisbon, Portugal',
    year: '2023',
    topic: 'Building Deep-Tech Ventures in a Shallow Capital Market',
    type: 'Panel',
  },
  {
    event: 'Davos Fringe -- StartupConnect',
    location: 'Davos, Switzerland',
    year: '2023',
    topic: 'Climate Capital: How to Fund What the Market Misprices',
    type: 'Roundtable',
  },
  {
    event: 'SaaStock Dublin',
    location: 'Dublin, Ireland',
    year: '2019',
    topic: 'From $0 to $4M ARR: What FlowOps Did Differently',
    type: 'Keynote',
  },
  {
    event: 'Slush',
    location: 'Helsinki, Finland',
    year: '2021',
    topic: 'Why the Best Founders Are Still Contrarians',
    type: 'Talk',
  },
];

const advisory = [
  {
    company: 'Helio Energy',
    domain: 'Climate / Energy Storage',
    stage: 'Series A',
    focus: 'GTM strategy and enterprise sales motion for grid-scale battery storage.',
  },
  {
    company: 'Novathread',
    domain: 'AI Infrastructure',
    stage: 'Seed',
    focus: 'Fundraising positioning, narrative development, and introductions to European deep-tech funds.',
  },
  {
    company: 'AgroSense',
    domain: 'AgriTech / IoT',
    stage: 'Pre-Seed',
    focus: 'Product-market fit validation and first enterprise customer acquisition in the UK market.',
  },
  {
    company: 'Pinna Health',
    domain: 'Digital Health',
    stage: 'Series B',
    focus: 'Regulatory pathway advisory and NHS procurement strategy for a remote diagnostics platform.',
  },
];

const writing = [
  {
    title: 'Why Most Climate Funds Are Still Thinking Too Small',
    publication: 'Medium -- Personal Blog',
    date: 'October 2023',
    readTime: '8 min read',
    excerpt:
      'The gap between the capital available for climate tech and the capital actually needed is enormous. Here\'s why that gap is an opportunity, not a warning sign.',
  },
  {
    title: 'The Quiet Death of the Pivot',
    publication: 'Substack',
    date: 'June 2023',
    readTime: '6 min read',
    excerpt:
      "Founders pivot too early, too late, and for the wrong reasons. After backing 18 companies, I've noticed a pattern in which pivots succeed and which ones are just expensive delays.",
  },
  {
    title: 'What I Learned Selling a $4M ARR Company',
    publication: 'LinkedIn Articles',
    date: 'November 2019',
    readTime: '11 min read',
    excerpt:
      'The acquisition of FlowOps taught me more about enterprise value, negotiation psychology, and timing than any MBA programme could. A candid breakdown.',
  },
  {
    title: 'Distribution as a First-Class Concern',
    publication: 'Medium -- Personal Blog',
    date: 'March 2022',
    readTime: '7 min read',
    excerpt:
      'Most founders build the product first and think about distribution second. That is the single biggest structural error in early-stage company building.',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="conn-label">
      <span className="conn-label-line" />
      <span className="conn-label-text">{children}</span>
    </div>
  );
}

const Connect = () => {
  const [activeTab, setActiveTab] = useState('Speaking');
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section connect" id="connect">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="conn-header"
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Connect</SectionLabel>
            <h2 className="conn-heading">
              Beyond the <GradientText as="span">boardroom</GradientText>.
            </h2>
          </motion.div>
          <motion.p className="conn-intro" variants={fadeUp}>
            I speak at conferences, advise founders, and write about the mechanics of building
            ambitious companies. Here's a window into how I engage with the broader ecosystem.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="conn-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`conn-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <motion.span className="conn-tab-indicator" layoutId="tab-indicator" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'Speaking' && (
            <motion.div
              key="speaking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="conn-panel"
            >
              <div className="speaking-list">
                {speaking.map((s, i) => (
                  <motion.div
                    key={s.event}
                    className="speaking-row glass-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <div className="speaking-main">
                      <h4 className="speaking-topic">{s.topic}</h4>
                      <p className="speaking-meta">{s.event} · {s.location}</p>
                    </div>
                    <div className="speaking-right">
                      <span className="speaking-type">{s.type}</span>
                      <span className="speaking-year">{s.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="conn-cta-note">
                Available for keynotes, panels, and fireside chats.{' '}
                <a href="#contact" className="conn-inline-link">Get in touch →</a>
              </p>
            </motion.div>
          )}

          {activeTab === 'Advisory' && (
            <motion.div
              key="advisory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="conn-panel"
            >
              <div className="advisory-grid">
                {advisory.map((a, i) => (
                  <motion.div
                    key={a.company}
                    className="advisory-card glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="adv-top">
                      <span className="adv-domain">{a.domain}</span>
                      <span className="adv-stage">{a.stage}</span>
                    </div>
                    <h4 className="adv-company">{a.company}</h4>
                    <p className="adv-focus">{a.focus}</p>
                  </motion.div>
                ))}
              </div>
              <p className="conn-cta-note">
                Open to advisory roles at seed and Series A stage, particularly in deep-tech and climate.{' '}
                <a href="#contact" className="conn-inline-link">Start a conversation →</a>
              </p>
            </motion.div>
          )}

          {activeTab === 'Writing' && (
            <motion.div
              key="writing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="conn-panel"
            >
              <div className="writing-list">
                {writing.map((w, i) => (
                  <motion.div
                    key={w.title}
                    className="writing-row glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="writing-meta-top">
                      <span className="writing-publication">{w.publication}</span>
                      <div className="writing-meta-right">
                        <span className="writing-date">{w.date}</span>
                        <span className="writing-read">{w.readTime}</span>
                      </div>
                    </div>
                    <h4 className="writing-title">{w.title}</h4>
                    <p className="writing-excerpt">{w.excerpt}</p>
                  </motion.div>
                ))}
              </div>
              <p className="conn-cta-note">
                Subscribe to get new essays delivered to your inbox.{' '}
                <a href="#contact" className="conn-inline-link">Subscribe →</a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Connect;