import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
          background: scrolled ? 'rgba(26,15,8,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,148,58,0.15)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="OHC Logo" style={{ height: '44px', width: 'auto' }} />
        </a>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}
          className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  color: 'rgba(245,240,232,0.85)', textDecoration: 'none',
                  fontFamily: "'Jost', sans-serif", fontSize: '0.82rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  transition: 'color 0.3s',
                  fontWeight: 400,
                }}
                onMouseEnter={e => e.target.style.color = '#C8943A'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.85)'}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA button desktop */}
        <a href="tel:+971543739453"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'linear-gradient(135deg, #C8943A, #C87941)',
            color: '#fff', padding: '0.6rem 1.4rem',
            borderRadius: '2px', textDecoration: 'none',
            fontSize: '0.78rem', letterSpacing: '0.08em',
            fontFamily: "'Jost', sans-serif", fontWeight: 500,
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          className="desktop-cta"
        >
          <FiPhone size={13} /> +971 54 373 9453
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#F5F0E8', display: 'none',
          }}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '80vw', maxWidth: '340px',
              background: 'rgba(26,15,8,0.98)', backdropFilter: 'blur(20px)',
              zIndex: 999, padding: '6rem 2.5rem 3rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
              borderLeft: '1px solid rgba(200,148,58,0.2)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  color: '#F5F0E8', textDecoration: 'none',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem', fontWeight: 400,
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(200,148,58,0.1)',
                }}
              >{link.label}</motion.a>
            ))}
            <motion.a
              href="tel:+971543739453"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem',
                color: '#C8943A', textDecoration: 'none',
                fontFamily: "'Jost', sans-serif", fontSize: '0.9rem',
              }}
            ><FiPhone /> +971 54 373 9453</motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
