import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const images = [
  { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85', label: 'Luxury Living Room', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=85', label: 'Premium Bedroom' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=85', label: 'Elegant Kitchen' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85', label: 'Designer Bathroom' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=85', label: 'TV Wall Design' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85', label: 'Luxury Villa Interior', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=700&q=85', label: 'Modern Office' },
  { src: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?w=500', label: 'Ceiling Design' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  const next = () => setLightbox((lightbox + 1) % images.length);
  const prev = () => setLightbox((lightbox - 1 + images.length) % images.length);

  return (
    <section id="gallery" style={{ background: '#1A0F08', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="section-label"
          >Our Portfolio</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              color: '#F5F0E8', fontWeight: 400,
              maxWidth: '600px', margin: '0 auto 1rem',
            }}
          >
            Spaces We Have<br />
            <em style={{ fontStyle: 'italic', color: '#C8943A' }}>Brought To Life</em>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }} animate={inView ? { width: '60px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C8943A, transparent)', margin: '0 auto' }}
          />
        </div>

        {/* Masonry-like grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
        }}>
          {images.map((img, i) => {
            const ref = useRef(null);
            const imgInView = useInView(ref, { once: true, margin: '-50px' });
            return (
              <motion.div
                key={i} ref={ref}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={imgInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                onClick={() => setLightbox(i)}
                style={{
                  gridColumn: img.span === 'wide' ? 'span 2' : 'span 1',
                  position: 'relative', overflow: 'hidden',
                  height: img.span === 'wide' ? '320px' : '260px',
                  cursor: 'pointer', borderRadius: '2px',
                  background: '#2C1810',
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6 }}
                  src={img.src} alt={img.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(26,15,8,0.65)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  }}
                >
                  <FiZoomIn size={28} color="#C8943A" />
                  <span style={{
                    color: '#F5F0E8', fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.1rem', letterSpacing: '0.05em',
                  }}>{img.label}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 2000,
              background: 'rgba(10,5,2,0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={images[lightbox].src}
              alt={images[lightbox].label}
              style={{
                maxWidth: '90vw', maxHeight: '85vh',
                objectFit: 'contain', borderRadius: '2px',
                boxShadow: '0 0 80px rgba(200,148,58,0.2)',
              }}
            />
            {/* Controls */}
            <button onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', background: 'rgba(200,148,58,0.8)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
              <FiX size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{ position: 'fixed', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(200,148,58,0.5)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
              <FiChevronLeft size={22} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              style={{ position: 'fixed', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(200,148,58,0.5)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
              <FiChevronRight size={22} />
            </button>
            <div style={{ position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(245,240,232,0.7)', fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', letterSpacing: '0.15em' }}>
              {images[lightbox].label} — {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 700px) {
          div[style*='gridTemplateColumns: repeat(3'] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
