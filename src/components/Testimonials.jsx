import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Khalid Al Mansoori',
    role: 'Villa Owner, Al Barsha',
    text: 'OHC transformed our villa beyond recognition. The attention to detail in the living room and kitchen was extraordinary. Every material they used was top quality and the team was professional throughout. Highly recommended for any serious renovation in Dubai.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Apartment Owner, Downtown Dubai',
    text: 'I was nervous about renovating my apartment while living abroad, but OHC made the entire process seamless. Regular video updates, honest communication, and the final result was stunning. My apartment looks like it\'s from a luxury magazine.',
    rating: 5,
  },
  {
    name: 'Mohammed Al Rashidi',
    role: 'Business Owner, JBR',
    text: 'We hired OHC for our office renovation and the transformation was spectacular. The space now reflects the premium brand we\'ve built. On time, within budget, and better than we imagined. Will absolutely use them again.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Jumeirah',
    text: 'The ceiling design and TV wall they created for us is absolutely breathtaking. Every guest who visits compliments the interiors. OHC truly understands luxury — the materials, the craft, the service. An exceptional team.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section style={{ background: '#F5F0E8', padding: '8rem 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="section-label">
            Client Stories
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading" style={{ color: '#1A0F08', maxWidth: '520px', margin: '0 auto 1rem' }}>
            What Our Clients<br />
            <em style={{ fontStyle: 'italic', color: '#C8943A' }}>Say About Us</em>
          </motion.h2>
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '60px' } : {}} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C8943A, transparent)', margin: '0 auto' }} />
        </div>

        {/* Testimonial card */}
        <div style={{ position: 'relative' }}>
          {/* Large quote mark */}
          <div style={{
            position: 'absolute', top: '-40px', left: '0',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '12rem', color: 'rgba(200,148,58,0.1)',
            lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          }}>"</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#fff',
                padding: '3.5rem', borderRadius: '2px',
                boxShadow: '0 8px 48px rgba(26,15,8,0.08)',
                position: 'relative', zIndex: 1,
                borderTop: '3px solid #C8943A',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: '#C8943A', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                color: '#2C1810', lineHeight: 1.75,
                fontWeight: 400, marginBottom: '2.5rem',
                fontStyle: 'italic',
              }}>"{testimonials[current].text}"</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px', height: '50px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #C8943A, #C87941)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.4rem', color: '#fff', fontWeight: 600,
                  flexShrink: 0,
                }}>
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600, color: '#1A0F08', fontSize: '0.95rem' }}>
                    {testimonials[current].name}
                  </div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.8rem', color: '#C8943A', letterSpacing: '0.05em' }}>
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '3rem' }}>
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={prev}
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              border: '1px solid rgba(200,148,58,0.4)',
              background: 'transparent', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#C8943A',
            }}
          ><FiChevronLeft size={20} /></motion.button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '28px' : '8px',
                height: '3px', border: 'none', cursor: 'pointer', borderRadius: '2px',
                background: i === current ? '#C8943A' : 'rgba(200,148,58,0.3)',
                transition: 'all 0.4s', padding: 0,
              }} />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={next}
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              border: '1px solid rgba(200,148,58,0.4)',
              background: 'transparent', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#C8943A',
            }}
          ><FiChevronRight size={20} /></motion.button>
        </div>
      </div>
    </section>
  );
}
