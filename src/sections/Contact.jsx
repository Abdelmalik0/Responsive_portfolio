import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from '../UI/GradientText';
import MagneticButton from '../UI/MagneticButton';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const contactReasons = [
  'Advisory opportunity',
  'Speaking engagement',
  'Investment enquiry',
  'Media & press',
  'Collaboration',
  'Other',
];

const contactInfo = [
  { label: `Email`, value: `abdulmalikabdulmalik141@gmail.com`, href: `mailto:abdulmalikabdulmalik141@gmail.com`, icon: `◉` },
  { label: `LinkedIn`, value: `linkedin.com/in/abdulmalik-abdulmalik-aba018260/`, href: `linkedin.com/in/abdulmalik-abdulmalik-aba018260/`, icon: `◈` },
  { label: `Twitter / X`, value: `Abdulmalik`, href: `https://x.com/Abdulma95908475`, icon: `◇` },
];

function SectionLabel({ children }) {
  return (
    <div className="ctc-label">
      <span className="ctc-label-line" />
      <span className="ctc-label-text">{children}</span>
    </div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="ctc-header"
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="ctc-heading">
              Let's build something<br />
              <GradientText as="span">worth building</GradientText>.
            </h2>
          </motion.div>
          <motion.p className="ctc-intro" variants={fadeUp}>
            Whether you're a founder, journalist, event organiser, or fellow investor --
            I read every message personally. Response time is typically 2-3 business days.
          </motion.p>
        </motion.div>

        {/* Body */}
        <motion.div
          ref={formRef}
          className="ctc-body"
          initial="hidden"
          animate={formInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {/* Left -- Info */}
          <motion.div className="ctc-info" variants={fadeUp}>
            <div className="availability-badge glass-card">
              <span className="avail-dot" />
              <div>
                <p className="avail-title">Currently available for</p>
                <p className="avail-desc">Advisory roles · Speaking · Co-founding</p>
              </div>
            </div>

            <div className="ctc-channels">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="ctc-channel glass-card"
                >
                  <span className="ctc-channel-icon">{c.icon}</span>
                  <div>
                    <p className="ctc-channel-label">{c.label}</p>
                    <p className="ctc-channel-value">{c.value}</p>
                  </div>
                  <span className="ctc-channel-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="ctc-note glass-card">
              <span className="ctc-note-icon">◎</span>
              <p className="ctc-note-text">
                For investment enquiries via AA Capital, please include a brief deck or
                executive summary. I invest at pre-seed stage in deep-tech and climate.
              </p>
            </div>
          </motion.div>

          {/* Right -- Form */}
          <motion.div className="ctc-form-wrap" variants={fadeUp}>
            {!submitted ? (
              <div className="ctc-form glass-card">
                <h3 className="ctc-form-title">Send a message</h3>

                <div className="form-row">
                  <div className={`form-field ${focused === `name` ? 'is-focused' : ``} ${formData.name ? 'has-value' : ``}`}>
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div className={`form-field ${focused === `email` ? 'is-focused' : ``} ${formData.email ? 'has-value' : ``}`}>
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className={`form-field ${focused === `reason` ? 'is-focused' : ``} ${formData.reason ? 'has-value' : ``}`}>
                  <label className="form-label">Reason for reaching out</label>
                  <select
                    name="reason"
                    className="form-input form-select"
                    value={formData.reason}
                    onChange={handleChange}
                    onFocus={() => setFocused('reason')}
                    onBlur={() => setFocused('')}
                  >
                    <option value="">Select a topic</option>
                    {contactReasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div className={`form-field ${focused === `message` ? 'is-focused' : ``} ${formData.message ? 'has-value' : ``}`}>
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-input form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Tell me what you're working on, or what you'd like to discuss..."
                    rows={5}
                  />
                </div>

                <MagneticButton>
                  <button
                    className="btn btn-primary ctc-submit"
                    onClick={handleSubmit}
                    type="button"
                  >
                    Send Message
                    <span className="ctc-submit-arrow">→</span>
                  </button>
                </MagneticButton>
              </div>
            ) : (
              <motion.div
                className="ctc-success glass-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="success-icon">◈</span>
                <h3 className="success-title">Message received.</h3>
                <p className="success-text">
                  Thanks, {formData.name.split(' ')[0]}. I'll read your message and
                  get back to you within a few business days.
                </p>
                <button
                  className="success-reset"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: ``, email: ``, reason: ``, message: `` });
                  }}
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;