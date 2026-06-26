import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85',
    alt: 'Luxury modern living room',
  },
  {
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1800&q=85',
    alt: 'Premium bedroom interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85',
    alt: 'Elegant kitchen design',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85',
    alt: 'Luxury office lounge',
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      position: 'relative', height: '100vh', minHeight: '600px',
      overflow: 'hidden', display: 'flex', alignItems: 'center',
    }}>
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.03 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${slides[current].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Dark luxury overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(26,15,8,0.82) 0%, rgba(44,24,16,0.65) 50%, rgba(26,15,8,0.78) 100%)',
        zIndex: 1,
      }} />

      {/* Gold vignette bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
        background: 'linear-gradient(to top, rgba(26,15,8,0.9), transparent)',
        zIndex: 2,
      }} />

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '18%', right: '8%',
          width: '180px', height: '180px',
          border: '1px solid rgba(200,148,58,0.3)',
          borderRadius: '50%', zIndex: 2,
        }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute', top: '28%', right: '11%',
          width: '100px', height: '100px',
          border: '1px solid rgba(200,148,58,0.2)',
          borderRadius: '50%', zIndex: 2,
        }}
      />
      <motion.div
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '20%', left: '5%',
          width: '60px', height: '60px',
          border: '1px solid rgba(200,148,58,0.25)',
          zIndex: 2,
        }}
      />

      {/* Hero content */}
      <div style={{
        position: 'relative', zIndex: 3,
        width: '100%', maxWidth: '1200px',
        margin: '0 auto', padding: '0 2rem',
      }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            display: 'inline-block',
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: '#C8943A',
            marginBottom: '1.5rem',
          }}
        >
          Dubai's Premium Renovation Specialists
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 400,
            color: '#F5F0E8',
            lineHeight: 1.05,
            maxWidth: '780px',
            marginBottom: '1.5rem',
          }}
        >
          Transform Your Space<br />
          <em style={{ fontStyle: 'italic', color: '#D4A85A' }}>Into A Masterpiece</em>
        </motion.h1>

        {/* Gold separator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ height: '2px', background: 'linear-gradient(90deg, #C8943A, transparent)', marginBottom: '1.5rem' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(245,240,232,0.75)',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            fontWeight: 300,
          }}
        >
          Luxury Renovation, Interior Design &amp; Facility Management Solutions
          crafted with precision for discerning clients across Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(200,148,58,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            style={{
              background: 'linear-gradient(135deg, #C8943A, #C87941)',
              color: '#fff', border: 'none', cursor: 'pointer',
              padding: '1rem 2.2rem',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.8rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', fontWeight: 500,
              borderRadius: '2px',
            }}
          >
            Get Free Consultation
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, background: 'rgba(200,148,58,0.15)' }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToServices}
            style={{
              background: 'transparent',
              color: '#F5F0E8', cursor: 'pointer',
              padding: '1rem 2.2rem',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.8rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', fontWeight: 500,
              borderRadius: '2px',
              border: '1px solid rgba(245,240,232,0.35)',
              transition: 'background 0.3s',
            }}
          >
            Explore Our Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute', bottom: '3rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '0.6rem', zIndex: 4,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '32px' : '8px',
              height: '3px',
              background: i === current ? '#C8943A' : 'rgba(245,240,232,0.35)',
              border: 'none', cursor: 'pointer', borderRadius: '2px',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '3rem', right: '2.5rem',
          zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}
      >
        <span style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', writingMode: 'vertical-lr' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, rgba(200,148,58,0.7), transparent)' }} />
      </motion.div>
    </section>
  );
}
