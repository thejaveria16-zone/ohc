import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = {
    width: '100%', padding: '0.9rem 1.1rem',
    background: 'rgba(245,240,232,0.05)',
    border: '1px solid rgba(200,148,58,0.2)',
    borderRadius: '2px', outline: 'none',
    fontFamily: "'Jost', sans-serif", fontSize: '0.9rem',
    color: '#F5F0E8',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ background: '#1A0F08', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="section-label">
            Get In Touch
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              color: '#F5F0E8', fontWeight: 400,
              maxWidth: '560px', margin: '0 auto 1rem',
            }}>
            Let's Create Your<br />
            <em style={{ fontStyle: 'italic', color: '#C8943A' }}>Dream Space</em>
          </motion.h2>
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '60px' } : {}} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C8943A, transparent)', margin: '0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#F5F0E8', marginBottom: '0.5rem' }}>
              Start Your Transformation
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.6)', fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '3rem' }}>
              Ready to transform your space? Contact us for a free consultation and let our experts guide you through the possibilities.
            </p>

            {[
              { icon: FiPhone, label: 'Phone / WhatsApp', value: '+971 54 373 9453', href: 'tel:+971543739453' },
              { icon: FiMail, label: 'Email', value: 'ahsanyasin0008@gmail.com', href: 'mailto:ahsanyasin0008@gmail.com' },
              { icon: FiMapPin, label: 'Address', value: 'Al Barsha, Near Emirates, Dubai', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', gap: '1.2rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '2px',
                  border: '1px solid rgba(200,148,58,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={18} color="#C8943A" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginBottom: '0.3rem' }}>{label}</div>
                  {href ? (
                    <a href={href} style={{ color: '#F5F0E8', textDecoration: 'none', fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', transition: 'color 0.3s' }}
                      onMouseEnter={e => e.target.style.color = '#C8943A'}
                      onMouseLeave={e => e.target.style.color = '#F5F0E8'}
                    >{value}</a>
                  ) : (
                    <span style={{ color: '#F5F0E8', fontFamily: "'Jost', sans-serif", fontSize: '0.95rem' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Working hours */}
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', border: '1px solid rgba(200,148,58,0.15)', borderRadius: '2px' }}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', color: '#C8943A', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Working Hours</div>
              <div style={{ color: 'rgba(245,240,232,0.7)', fontFamily: "'Jost', sans-serif", fontSize: '0.88rem', lineHeight: 1.8 }}>
                Saturday – Thursday: 8:00 AM – 8:00 PM<br />
                Friday: By Appointment Only
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '3rem', textAlign: 'center',
                  border: '1px solid rgba(200,148,58,0.3)',
                  borderRadius: '2px',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#C8943A', marginBottom: '0.5rem' }}>
                  Message Received
                </h3>
                <p style={{ color: 'rgba(245,240,232,0.6)', fontFamily: "'Jost', sans-serif" }}>
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { name: 'name', placeholder: 'Your Full Name', type: 'text' },
                  { name: 'email', placeholder: 'Email Address', type: 'email' },
                  { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(200,148,58,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(200,148,58,0.2)'}
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,148,58,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(200,148,58,0.2)'}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(200,148,58,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'linear-gradient(135deg, #C8943A, #C87941)',
                    color: '#fff', border: 'none', cursor: 'pointer',
                    padding: '1rem', borderRadius: '2px',
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.82rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase', fontWeight: 500,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  }}
                >
                  <FiSend size={16} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
