import { FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const services = [
  'Home Renovation', 'Interior Design', 'Electrical Work',
  'Plumbing', 'PVC Paneling', 'Ceiling Design',
  'TV Wall Design', 'Facility Management',
];

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0D0806', borderTop: '1px solid rgba(200,148,58,0.12)', padding: '5rem 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="OHC Logo" style={{ height: '60px', marginBottom: '1.5rem', display: 'block' }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.87rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.8, maxWidth: '260px', marginBottom: '1.5rem' }}>
              Dubai's trusted name in premium renovation, interior design and facility management since 2012.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[FiInstagram, FiFacebook, FiLinkedin].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: '36px', height: '36px', border: '1px solid rgba(200,148,58,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(245,240,232,0.5)', textDecoration: 'none',
                  borderRadius: '2px', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8943A'; e.currentTarget.style.color = '#C8943A'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,148,58,0.25)'; e.currentTarget.style.color = 'rgba(245,240,232,0.5)'; }}
                ><Icon size={15} /></a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8943A', marginBottom: '1.5rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {services.map((s) => (
                <li key={s}>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.87rem', color: 'rgba(245,240,232,0.5)', cursor: 'pointer', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.target.style.color = '#C8943A'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.5)'}
                  >{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8943A', marginBottom: '1.5rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['#home', '#about', '#services', '#gallery', '#process', '#contact'].map((href) => (
                <li key={href}>
                  <span onClick={() => handleNav(href)} style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.87rem', color: 'rgba(245,240,232,0.5)', cursor: 'pointer', transition: 'color 0.3s', textTransform: 'capitalize' }}
                    onMouseEnter={e => e.target.style.color = '#C8943A'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.5)'}
                  >{href.replace('#', '')}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8943A', marginBottom: '1.5rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {[
                { icon: FiPhone, value: '+971 54 373 9453', href: 'tel:+971543739453' },
                { icon: FiMail, value: 'ahsanyasin0008@gmail.com', href: 'mailto:ahsanyasin0008@gmail.com' },
                { icon: FiMapPin, value: 'Al Barsha, Near Emirates, Dubai', href: null },
              ].map(({ icon: Icon, value, href }) => (
                <div key={value} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Icon size={14} color="#C8943A" style={{ marginTop: '3px', flexShrink: 0 }} />
                  {href ? (
                    <a href={href} style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.3s' }}
                      onMouseEnter={e => e.target.style.color = '#C8943A'}
                      onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.5)'}
                    >{value}</a>
                  ) : (
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.5 }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(200,148,58,0.08)',
        padding: '1.5rem 2rem',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.78rem', color: 'rgba(245,240,232,0.3)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} OHC — One Hand Control. All Rights Reserved. Dubai, UAE.
        </p>
      </div>
    </footer>
  );
}
