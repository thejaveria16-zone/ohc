import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMessageCircle, FiPenTool, FiTool, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    num: '01',
    icon: FiMessageCircle,
    title: 'Consultation',
    desc: 'We start with a detailed consultation to understand your vision, preferences, budget, and timeline. No obligation, just honest conversation.',
    detail: 'Free site visit included',
  },
  {
    num: '02',
    icon: FiPenTool,
    title: 'Design Planning',
    desc: 'Our designers create detailed 3D renders and material mood boards, refining until every element matches your dream space perfectly.',
    detail: '3D visualization included',
  },
  {
    num: '03',
    icon: FiTool,
    title: 'Execution',
    desc: 'Our skilled craftsmen execute the design with precision, keeping you updated throughout. We use only premium materials from trusted suppliers.',
    detail: 'Daily progress updates',
  },
  {
    num: '04',
    icon: FiCheckCircle,
    title: 'Final Completion',
    desc: 'A thorough walkthrough ensures every detail is perfect. We hand over a pristine, transformed space ready for you to move into and love.',
    detail: '2-year workmanship warranty',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" style={{ background: '#FAF7F2', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="section-label">
            How We Work
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading" style={{ color: '#1A0F08', maxWidth: '560px', margin: '0 auto 1rem' }}>
            From Vision To<br />
            <em style={{ fontStyle: 'italic', color: '#C8943A' }}>Flawless Reality</em>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }} animate={inView ? { width: '60px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C8943A, transparent)', margin: '0 auto' }}
          />
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line - desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              position: 'absolute', top: '52px', left: '12.5%', right: '12.5%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C8943A 20%, #C8943A 80%, transparent)',
              transformOrigin: 'left',
            }}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}>
            {steps.map(({ num, icon: Icon, title, desc, detail }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                style={{ textAlign: 'center', position: 'relative' }}
              >
                {/* Step icon */}
                <div style={{
                  width: '72px', height: '72px', margin: '0 auto 2rem',
                  background: '#1A0F08',
                  border: '1px solid rgba(200,148,58,0.4)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', zIndex: 1,
                }}>
                  <Icon size={26} color="#C8943A" />
                  {/* Step number badge */}
                  <div style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #C8943A, #C87941)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Jost', sans-serif", fontSize: '0.65rem',
                    fontWeight: 600, color: '#fff',
                  }}>{num}</div>
                </div>

                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.6rem', fontWeight: 500,
                  color: '#1A0F08', marginBottom: '0.75rem',
                }}>{title}</h3>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.87rem', color: '#6B5044',
                  lineHeight: 1.8, marginBottom: '1rem',
                }}>{desc}</p>
                <span style={{
                  display: 'inline-block',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.7rem', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#C8943A',
                  borderBottom: '1px solid rgba(200,148,58,0.4)',
                  paddingBottom: '2px',
                }}>{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ textAlign: 'center', marginTop: '5rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(200,148,58,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #C8943A, #C87941)',
              color: '#fff', border: 'none', cursor: 'pointer',
              padding: '1.1rem 3rem',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.8rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: 500,
              borderRadius: '2px',
            }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
