import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHome, FiZap, FiDroplet, FiFeather, FiSquare, FiGrid, FiLayers, FiStar, FiCircle, FiMonitor, FiMaximize, FiTool } from 'react-icons/fi';

const services = [
  { icon: FiHome, title: 'Home Renovation', desc: 'Complete transformation of residential spaces with premium finishes and modern design sensibility.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { icon: FiZap, title: 'Electrical Work', desc: 'Safe, certified electrical installations, rewiring, and smart home electrical systems.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80' },
  { icon: FiDroplet, title: 'Plumbing', desc: 'Expert plumbing solutions from installations to repairs using top-grade materials.', img: 'https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80' },
  { icon: FiFeather, title: 'Painting', desc: 'Premium interior and exterior painting with luxury finishes and premium paints.', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80' },
  { icon: FiSquare, title: 'Doors Installation', desc: 'Custom door designs, fitting and installation for both interior and exterior applications.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { icon: FiGrid, title: 'PVC Paneling', desc: 'Modern PVC wall paneling solutions that are durable, moisture-resistant and elegant.', img: 'https://images.unsplash.com/photo-1675135581944-52b9b6f55838?q=80' },
  { icon: FiLayers, title: 'PVC Flooring', desc: 'Luxury vinyl and PVC flooring installations that mimic premium materials beautifully.', img: 'https://images.unsplash.com/photo-1754048073177-c820d9015a1c?q=80' },
  { icon: FiStar, title: 'Interior Design', desc: 'Full-service interior design consulting, space planning, and complete room makeovers.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
  { icon: FiCircle, title: 'Ceiling Design', desc: 'Bespoke ceiling treatments — gypsum, coffered, tray, and decorative ceiling installations.', img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80' },
  { icon: FiMonitor, title: 'TV Wall Design', desc: 'Stunning custom TV unit wall designs that become the focal point of any room.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { icon: FiMaximize, title: 'Mirror Installation', desc: 'Custom mirror installations that enhance light, space, and luxury aesthetics.', img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80' },
  { icon: FiTool, title: 'Facility Management', desc: 'Comprehensive facility management and maintenance services for residential and commercial properties.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      style={{
        background: '#fff',
        borderRadius: '2px', overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 4px 24px rgba(26,15,8,0.07)',
        transition: 'box-shadow 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(200,148,58,0.15)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,15,8,0.07)'}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={service.img}
          alt={service.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(26,15,8,0.5), transparent)',
        }} />
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          width: '40px', height: '40px', borderRadius: '50%',
          background: 'rgba(200,148,58,0.9)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={18} color="#fff" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.35rem', fontWeight: 500,
          color: '#1A0F08', marginBottom: '0.6rem',
        }}>{service.title}</h3>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.87rem', color: '#6B5044',
          lineHeight: 1.7,
        }}>{service.desc}</p>
        <div style={{
          marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
          color: '#C8943A', fontSize: '0.78rem', letterSpacing: '0.1em',
          fontFamily: "'Jost', sans-serif", fontWeight: 500,
        }}>
          Learn More <span style={{ marginLeft: '0.2rem' }}>→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" style={{ background: '#FAF7F2', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="section-label"
          >Our Services</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading" style={{ color: '#1A0F08', maxWidth: '600px', margin: '0 auto 1rem' }}
          >
            Everything Your Space<br />
            <em style={{ fontStyle: 'italic', color: '#C8943A' }}>Deserves & Demands</em>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }} animate={titleInView ? { width: '60px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C8943A, transparent)', margin: '0 auto' }}
          />
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
