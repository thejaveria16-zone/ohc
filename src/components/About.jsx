import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiUsers, FiCheckCircle, FiClock } from 'react-icons/fi';

const stats = [
  { icon: FiAward, value: '500+', label: 'Projects Completed' },
  { icon: FiUsers, value: '350+', label: 'Happy Clients' },
  { icon: FiCheckCircle, value: '12+', label: 'Years Experience' },
  { icon: FiClock, value: '100%', label: 'On-Time Delivery' },
];

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }} variants={variants}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ background: '#F5F0E8', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          {/* Left - image */}
          <FadeIn direction="left">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-20px', left: '-20px',
                width: '100%', height: '100%',
                border: '1px solid rgba(200,148,58,0.3)',
                borderRadius: '2px',
              }} />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80"
                alt="Interior design showcase"
                style={{
                  width: '100%', height: '480px', objectFit: 'cover',
                  borderRadius: '2px', display: 'block',
                  position: 'relative', zIndex: 1,
                }}
              />
              {/* Badge */}
              <div style={{
                position: 'absolute', bottom: '-24px', right: '-24px',
                background: 'linear-gradient(135deg, #C8943A, #C87941)',
                padding: '1.5rem 2rem', borderRadius: '2px', zIndex: 2,
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}>12+</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', marginTop: '0.3rem' }}>Years in Dubai</div>
              </div>
            </div>
          </FadeIn>

          {/* Right - text */}
          <div>
            <FadeIn delay={0.1}>
              <span className="section-label">About OHC</span>
              <h2 className="section-heading" style={{ color: '#1A0F08', marginBottom: '0.5rem' }}>
                We Craft Spaces That<br />
                <em style={{ fontStyle: 'italic', color: '#C8943A' }}>Tell Your Story</em>
              </h2>
              <span className="gold-line" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{ color: '#4A3728', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1rem' }}>
                One Hand Control is Dubai's trusted name in luxury renovation and interior design. 
                With over a decade of excellence, we've transformed hundreds of spaces across Al Barsha 
                and greater Dubai — from intimate apartments to sprawling villas and commercial properties.
              </p>
              <p style={{ color: '#4A3728', lineHeight: 1.9, marginBottom: '2rem', fontSize: '1rem' }}>
                Our team of architects, designers, and craftsmen bring meticulous attention to detail 
                to every project, ensuring each space is not just beautiful but deeply functional 
                and aligned with your vision.
              </p>
            </FadeIn>

            {/* Features */}
            <FadeIn delay={0.3}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                {['Premium Materials', 'Expert Craftsmen', 'Modern Designs', 'Client-First Approach'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '6px', height: '6px', background: '#C8943A', borderRadius: '50%', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', color: '#2C1810' }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2px', marginTop: '6rem',
          background: 'rgba(200,148,58,0.15)',
          borderRadius: '2px', overflow: 'hidden',
        }}>
          {stats.map(({ icon: Icon, value, label }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div style={{
                background: '#2C1810', padding: '2.5rem 2rem', textAlign: 'center',
                transition: 'background 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#3D2015'}
                onMouseLeave={e => e.currentTarget.style.background = '#2C1810'}
              >
                <Icon size={24} style={{ color: '#C8943A', marginBottom: '1rem' }} />
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.8rem', fontWeight: 500, color: '#F5F0E8', lineHeight: 1 }}>{value}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.55)', textTransform: 'uppercase', marginTop: '0.5rem' }}>{label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
