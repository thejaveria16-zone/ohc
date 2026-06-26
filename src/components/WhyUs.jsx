import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiShield, FiStar, FiDollarSign, FiClock, FiHeart, FiRefreshCw } from 'react-icons/fi';

const features = [
  { icon: FiShield, title: 'Professional Quality', desc: 'Every project meets the highest standards, backed by certified professionals with years of luxury renovation experience.' },
  { icon: FiStar, title: 'Modern Designs', desc: 'Cutting-edge design concepts that blend contemporary aesthetics with timeless elegance tailored to Dubai\'s lifestyle.' },
  { icon: FiDollarSign, title: 'Transparent Pricing', desc: 'No hidden costs, no surprises. Clear, competitive pricing with detailed quotes before any work begins.' },
  { icon: FiClock, title: 'On-Time Completion', desc: 'We respect your time. Strict project timelines are maintained with regular progress updates throughout.' },
  { icon: FiHeart, title: 'Client Satisfaction', desc: 'Your vision is our mission. We work closely with every client to ensure the final result exceeds expectations.' },
  { icon: FiRefreshCw, title: 'After-Care Support', desc: 'Comprehensive post-project support and maintenance services to keep your space looking perfect always.' },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      background: 'linear-gradient(135deg, #2C1810 0%, #1A0F08 50%, #3D2015 100%)',
      padding: '8rem 0', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        border: '1px solid rgba(200,148,58,0.06)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '350px', height: '350px',
        border: '1px solid rgba(200,148,58,0.06)',
        borderRadius: '50%',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="section-label"
          >Why Choose OHC</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              color: '#F5F0E8', fontWeight: 400,
              maxWidth: '580px', margin: '0 auto 1rem',
            }}
          >
            The OHC Difference<br />
            <em style={{ color: '#C8943A', fontStyle: 'italic' }}>In Every Detail</em>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }} animate={inView ? { width: '60px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C8943A, transparent)', margin: '0 auto' }}
          />
        </div>

        {/* Feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5px',
          background: 'rgba(200,148,58,0.1)',
          borderRadius: '2px', overflow: 'hidden',
        }}>
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ background: 'rgba(200,148,58,0.08)' }}
              style={{
                background: '#1A0F08', padding: '2.5rem',
                transition: 'background 0.3s',
              }}
            >
              <div style={{
                width: '52px', height: '52px',
                border: '1px solid rgba(200,148,58,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', borderRadius: '2px',
              }}>
                <Icon size={22} color="#C8943A" />
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem', fontWeight: 500,
                color: '#F5F0E8', marginBottom: '0.75rem',
              }}>{title}</h3>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.87rem', color: 'rgba(245,240,232,0.6)',
                lineHeight: 1.8,
              }}>{desc}</p>
              <div style={{
                marginTop: '1.5rem', width: '32px', height: '1px',
                background: 'linear-gradient(90deg, #C8943A, transparent)',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
